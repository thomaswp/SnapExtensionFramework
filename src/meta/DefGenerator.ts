import { OverrideRegistry, extend } from "../extend/OverrideRegistry";
import { BlockMorph } from "../snap/Snap";
import { Snap } from "../snap/SnapUtils";

class TreeNode {
    name: string;
    children: TreeNode[] = [];
    parent: TreeNode = null;

    constructor(name: string) {
        this.name = name;
    }

    static findLCA(a: TreeNode, b: TreeNode) {
        let aPath = a.rootPath();
        let bPath = b.rootPath();
        let i = 0;
        while (i < aPath.length && i < bPath.length) {
            if (aPath[i] !== bPath[i]) break;
            i++;
        }
        return aPath[i-1];
    }

    rootPath() {
        let path = [] as TreeNode[];
        path.push(this);
        let node = this.parent;
        while (node) {
            path.push(node);
            node = node.parent;
        }
        return path.reverse();
    }
}


/**
 * This class automatically generates typescript definitions
 * from Snap's source code. To run, open Snap in a browser and
 * from the console run:
 * new SEF.DefGenerator().init().downloadAll()
 */
export class DefGenerator {

    classes = new Map<string, ClassDef>;
    instrumenters = new Map<string, Instrumenter>();
    hierarchy: Map<string, TreeNode>;

    walkedThisFrame = false;

    init() {
        for (let key of Object.keys(window)) {
            // console.log(key);
            if (!window.hasOwnProperty(key)) continue;
            let value = window[key];
            if (!(value instanceof Function)) continue;
            if (!value.prototype) continue;
            if (value.name.length == 0) continue;
            this.classes.set(key, new ClassDef(value));
        }
        // this.classes.forEach(c => c.addParentData(this.classes));

        // console.log(this.outputDefinitions());
        // console.log(this);

        let limit = 100;
        for (let clazz of this.classes.values()) {
            if (clazz.isPureFunction) continue;
            let inst = new Instrumenter(clazz);
            this.instrumenters.set(inst.name, inst);
            if (limit-- <= 0) break;
        }
        this.instrumenters.set(BlockMorph.name, new Instrumenter(this.classes.get(BlockMorph.name)));
        
        this.instrumenters.forEach(i => i.onProgressCallback = () => {
            if (this.walkedThisFrame) return;
            this.walkedThisFrame = true;
            this.walkObjects();
            this.saveInstrumenters();
            setTimeout(() => {
                this.walkedThisFrame = false;
            }, 1);
        });

        this.loadInstrumenters();
        this.walkObjects();
        this.hierarchy = this.createHierarchy();

        return this;
    }

    walkObjects(root = Snap.world) {
        this.inspectObject(root);
        if (!root.children) return;
        for (let child of root.children) {
            this.walkObjects(child);
        }
    }

    inspectObject(obj: object) {
        if (!(obj instanceof Object && obj.constructor)) return;
        let type = obj.constructor.name;
        for (let inst of this.instrumenters.values()) {
            if (obj instanceof inst.class) {
                inst.addObject(obj);
            }
        }
    }

    createHierarchy() {
        let hierarchy = new Map<string, TreeNode>();
        this.classes.forEach(c => {
            let node = new TreeNode(c.name);
            hierarchy.set(c.name, node);
        });
        hierarchy.set('SnapType', new TreeNode('SnapType'));
        this.classes.forEach(c => {
            let node = hierarchy.get(c.name);
            let parent = c.uber;
            let parentNode = hierarchy.get(parent);
            if (parentNode == null) parentNode = hierarchy.get('SnapType');
            parentNode.children.push(node);
            node.parent = parentNode;
        });
        return hierarchy;
    }

    
    typesToTS(types: FieldTypes, isField: boolean) {
        if (types == null || types.size == 0) return 'any';
        let typesArray = [...types];
        typesArray = typesArray.map(t => {
            if (t == "Map") return "Map<any, any>";
            if (t == "Array") return "any[]";
            return t;
        });
        if (types.size == 1) return typesArray[0];
        // If this can be a function, it might be defined as such in a parent class, so use any type
        if (isField && typesArray.includes('Function')) return 'any';
        let morphTypes = typesArray.filter(t => t.endsWith('Morph'));
        if (morphTypes.length > 1) {
            typesArray = typesArray.filter(t => !morphTypes.includes(t));
            let lca = morphTypes.map(t => this.hierarchy.get(t)).filter(t => t != null).reduce((a, b) => {
                return TreeNode.findLCA(a, b);
            });
            if (lca != null) {
                // console.log("Collapsed", morphTypes, "to", lca.name);
                typesArray.push(lca.name);
            }
        }
        return typesArray.join(' | ');
    }

    startLogging() {
        this.instrumenters.forEach(i => i.startLogging());
    }

    getInstrumentersJSON() {
        let json = {};
        [...this.instrumenters.values()]
        .sort((a, b) => a.name.localeCompare(b.name))
        .forEach((inst) => {
            json[inst.name] = inst.serialize();
        });
        return json;
    }

    saveInstrumenters() {
        let json = this.getInstrumentersJSON();
        localStorage['instrumenters'] = JSON.stringify(json);
    }

    loadInstrumenters() {
        let json = localStorage['instrumenters'];
        if (!json) return;
        json = JSON.parse(json);
        this.instrumenters.forEach((inst, name) => {
            if (!json[name]) return;
            inst.deserialize(json[name]);
        });
    }

    getClasses() {
        return [...this.classes.values()]
        .sort((a, b) => a.compareTo(b));
    }

    outputExports() {
        return this.getClasses().map(c => c.exportStatement()).join('\n');
    }

    outputDefinitions() {
        return `
export class SnapType {
    prototype: any;
    [key: string]: any;
}\n\n` + this.getClasses().map(c => c.toTS(this, this.instrumenters.get(c.name))).join('\n\n');
    }

    downloadAll() {
        this.downloadFile('Snap.js', this.outputExports());
        this.downloadFile('Snap.d.ts', this.outputDefinitions());
        this.downloadFile('types.json', JSON.stringify(this.getInstrumentersJSON(), null, 2));
    }

    downloadFile(filename: string, text: string) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

}

type FieldTypes = Set<string>;
type ArgTypes = FieldTypes[];

function serializeMap(map: Map<string, FieldTypes | ArgTypes>) {
    return [...map.keys()]
    .sort((a, b) => a.localeCompare(b))
    .map(key => {
        let value = map.get(key);
        if (value instanceof Set) return [key, serializeSet(value)];
        return [key, serializeSetArray(value)];
    });
}

function serializeSetArray(arr: ArgTypes) {
    return arr.map(a => serializeSet(a));
}

function serializeSet(set: FieldTypes) {
    return [...set].sort((a, b) => a.localeCompare(b));
}

class Instrumenter {

    def: ClassDef
    class: Function;
    proto: object;
    fieldTypes = new Map<string, FieldTypes>();
    argTypes = new Map<string, ArgTypes>();
    called = new Set<string>();
    assigned = new Set<string>();
    onProgressCallback: () => void;

    get name() { return this.def.name; }
    get nFields() { return this.fieldTypes.size; }
    get nFuncs() { return this.argTypes.size; }

    constructor(def: ClassDef) {
        this.def = def;
        this.class = window[this.name];
        this.proto = def.baseFunction.prototype;

        def.methods.forEach(m => {
            if (m.name === 'constructor') return;
            this.argTypes.set(m.name, []);
        });

        def.fields.forEach(f => {
            this.fieldTypes.set(f.name, new Set<string>());
        });
    }

    startLogging() {
        for (let key of this.argTypes.keys()) {
            let myself = this;
            let fKey = key;
            // TODO: pass class for use here!!
            OverrideRegistry.before(window[this.name], key, function() {
                let args = [...arguments];
                myself.updateArgMap(fKey, args);
            });         
        }
    }

    serialize() {
        return {
            called: [...this.called],
            assigned: [...this.assigned],
            fieldTypes: serializeMap(this.fieldTypes),
            argTypes: serializeMap(this.argTypes),
        };
    }

    deserialize(json) {
        this.called = new Set(json.called);
        this.assigned = new Set(json.assigned);
        this.fieldTypes = new Map(json.fieldTypes.map(([key, value]) => {
            return [key, new Set(value)];
        }));
        this.argTypes = new Map(json.argTypes.map(([key, value]) => {
            return [key, value.map(a => new Set(a))];
        }));
    }

    getTypeOf(object: object) {
        let type = typeof(object) as string;
        if (object instanceof Object && object.constructor) type = object.constructor.name;
        return type;
    }

    addObject(obj: object) {
        for (let key of this.fieldTypes.keys()) {
            let value = obj[key];
            if (value == null) continue;
            this.assigned.add(key);
            this.fieldTypes.get(key).add(this.getTypeOf(value));
        }
    }

    updateArgMap(key: string, args: any[]) {
        let types = this.argTypes.get(key);
        for (let i = 0; i < args.length; i++) {
            let arg = args[i];
            if (arg == null) continue;
            let type = this.getTypeOf(arg);
            while (types.length <= i) {
                types.push(new Set<string>());
            }
            types[i].add(type);
        }
        if (!this.called.has(key)) {
            this.called.add(key);
            console.log(this.name, `${this.assigned.size} / ${this.nFields} fields; ` +
                `${this.called.size} / ${this.nFuncs} functions`, key, types);
            if (this.onProgressCallback) {
                this.onProgressCallback();
            }
        }
    }
}

class ClassDef {
    baseFunction: Function;
    name: string;
    uber = null as string;
    functionProxy : Method;
    fields = new Map<string, Field>;
    methods = new Map<string, Method>;
    addedParentData = false;

    get isPureFunction() {
        return this.functionProxy != null;
    }

    constructor(func: Function) {
        this.baseFunction = func;
        this.name = func.name;
        const proto = func.prototype;
        if (!proto) return;

        if ([...Object.keys(proto)].length <= 1) {
            this.functionProxy = new Method(this.name, func);
            return;
        }

        this.uber = func['uber']?.constructor?.name;
        this.inferFields(func);

        for (let key of Object.getOwnPropertyNames(proto)) {
            // I think this is redundant...
            if (!proto.hasOwnProperty(key)) continue;
            let value = proto[key];
            if (value instanceof Function) {
                this.methods.set(key, new Method(key, value));
            } else {
                // TODO: distinguish between inherited fields and static fields
                // this.fields.push(new Field(key, value, true));
            }
        }
        this.inferFields(proto['init']);
    }

    compareTo(other: ClassDef) {
        if (this.isPureFunction && !other.isPureFunction) return -1;
        if (!this.isPureFunction && other.isPureFunction) return 1;
        return this.name.localeCompare(other.name);
    }

    // No longer needed as newer TS version allows for function overloading/shadowing
    addParentData(classes: Map<string, ClassDef>): void {
        if (this.addedParentData) return;
        this.addedParentData = true;
        if (this.functionProxy) return;
        if (!this.uber || !classes.has(this.uber)) return;
        const parent = classes.get(this.uber);
        if (!parent.addedParentData) parent.addParentData(classes);
        for (let [methodName, method] of parent.methods) {
            if (this.methods.has(methodName)) continue;
            this.methods.set(methodName, method);
            // If a field overshadows a parent method, it was probably
            // a mistake, so delete it.
            this.fields.delete(methodName);
        }
        for (let [fieldName, field] of parent.fields) {
            // Don't copy fields that have shadowing methods
            if (this.methods.has(fieldName)) continue;
            if (this.fields.has(fieldName)) continue;
            this.fields.set(fieldName, field);
        }
    }

    inferFields(func: Function) {
        if (!func) return;
        const js = func.toString();
        const varDec = /^\s*this\s*\.\s*([a-zA-Z_$][0-9a-zA-Z_$]*)\s*=/gm;
        for (let match of js.matchAll(varDec)) {
            let name = match[1];
            if (this.fields.has(name)) continue;
            // Give precedence to methods
            if (this.methods.has(name)) continue;
            if (this.ignoreField(name)) continue;
            this.fields.set(name, new Field(name, null, false));
        }
    }

    ignoreField(name: string) : boolean {
        if (this.name === 'ToggleButtonMorph') {
            return name === 'query';
        } else if (this.name === 'PaintCanvasMorph') {
            return name === 'isShiftPressed';
        }
    }

    exportStatement() {
        return `export const ${this.name} = window['${this.name}'];`;
    }

    toTS(gen: DefGenerator, instrumenter: Instrumenter) : string  {
        if (this.functionProxy) {
            return `export function ${this.functionProxy.toTS(gen)}`;
        }

        let code = `export class ${this.name} extends ${this.uber ? this.uber : 'SnapType'}`;
        code += ` {\n`;
        let fKeys = [...this.fields.keys()];
        fKeys.sort();
        for (let fkey of fKeys) {
            let types = instrumenter?.fieldTypes?.get(fkey);
            let typesString = gen.typesToTS(types, true);
            code += '    ' + this.fields.get(fkey).toTS(typesString) + '\n';
        }
        code += '\n';
        let mKeys = [...this.methods.keys()];
        mKeys.sort();
        for (let mKey of mKeys) {
            code += '    ' + this.methods.get(mKey).toTS(gen, instrumenter?.argTypes?.get(mKey)) + '\n';
        }
        code += '}';
        return code;
    }
}

class Field {
    name: string;
    isStatic: boolean;

    constructor(name: string, value: any, isStatic: boolean) {
        this.name = name;
        this.isStatic = isStatic;
        // if (value !== null && value !== undefined) {
        //     this.type = typeof(value);
        // }
    }

    toTS(types: string) : string {
        return `${this.isStatic ? 'static ' : ''}${this.name}: ${types};`;
    }
}

class Method {

    static readonly STRIP_COMMENTS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,\)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,\)]*))/mg;
    static readonly ARGUMENT_NAMES = /([^\s,]+)/g;

    name: string;
    paramNames: string[];

    constructor(name: string, func: Function) {
        this.name = name;
        this.paramNames = this.getParamNames(func);
    }

    getParamNames(func: Function) {
        let fnStr = func.toString().replace(Method.STRIP_COMMENTS, '');
        let resultRegex = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(Method.ARGUMENT_NAMES);
        let result = resultRegex ? [...resultRegex] : [];
        result = result.filter(param => param.match(/^[a-zA-Z_$][0-9a-zA-Z_$]*$/))
        return result;
    }

    toTS(gen: DefGenerator, argTypes?: ArgTypes) : string {
        const override = this.checkOverride();
        if (override) return override;
        let code = `${this.name}(`;
        let first = true;
        let index = 0;
        for (let name of this.paramNames) {
            if (!first) code += ', ';
            first = false;
            let type = gen.typesToTS(argTypes?.[index], false);
            // if (argTypes) console.log(name, argTypes[index], type);
            code += `${name}?: ${type}`;
            index++;
        }
        code += ');';
        return code;
    }

    checkOverride() {
        switch (this.name) {
            case 'childThatIsA': return `${this.name}(...args: any[]);`
            case 'parentThatIsA': return `${this.name}(...args: any[]);`
        }
        return null;
    }
}