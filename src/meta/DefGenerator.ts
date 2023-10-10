import { OverrideRegistry, extend } from "../extend/OverrideRegistry";
import { BlockMorph } from "../snap/Snap";

/**
 * This class automatically generates typescript definitions
 * from Snap's source code. To run, open Snap in a browser and
 * from the console run:
 * new SEF.DefGenerator().init().downloadAll()
 */
export class DefGenerator {

    classes = new Map<string, ClassDef>;
    instrumenters = new Map<string, Instrumenter>();

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
        this.classes.forEach(c => c.addParentData(this.classes));

        // console.log(this.outputDefinitions());
        // console.log(this);

        let inst = new Instrumenter(BlockMorph.name, BlockMorph.prototype);
        this.instrumenters.set(inst.name, inst);
        
        this.instrumenters.forEach(i => i.onProgressCallback = () => {
            this.saveInstrumenters();
        });

        this.loadInstrumenters();

        return this;
    }

    startLogging() {
        this.instrumenters.forEach(i => i.startLogging());
    }

    saveInstrumenters() {
        let json = {};
        this.instrumenters.forEach((inst, name) => {
            json[name] = inst.serialize();
        });
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
}\n\n` + this.getClasses().map(c => c.toTS(this.instrumenters.get(c.name))).join('\n\n');
    }

    downloadAll() {
        this.downloadFile('Snap.js', this.outputExports());
        this.downloadFile('Snap.d.ts', this.outputDefinitions());
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

type ArgTypes = Set<string>[];

class Instrumenter {

    name: string
    proto: object;
    argTypes = new Map<string, ArgTypes>();
    called = new Set<string>();
    onProgressCallback: () => void;

    get size() { return this.argTypes.size; }

    constructor(name, proto) {
        this.name = name;
        this.proto = proto;
        for (let key in proto) {
            let value = proto[key];
            if (typeof value !== 'function') continue;
            if (key === 'constructor') continue;
            this.argTypes.set(key, []);   
        }
    }

    startLogging() {
        let proto = this.proto;
        for (let key of this.argTypes.keys()) {
            let myself = this;
            let fKey = key;
            // TODO: pass class for use here!!
            OverrideRegistry.before(BlockMorph, key, function() {
                let args = [...arguments];
                myself.updateArgMap(fKey, args);
            });         
        }
    }

    serialize() {
        return {
            called: [...this.called],
            argTypes: [...this.argTypes.entries()].map(([key, value]) => {
                return [key, value.map(s => [...s])];
            })
        };
    }

    deserialize(json) {
        this.called = new Set(json.called);
        this.argTypes = new Map(json.argTypes.map(([key, value]) => {
            return [key, value.map(a => new Set(a))];
        }));
    }

    updateArgMap(key: string, args: any[]) {
        let types = this.argTypes.get(key);
        for (let i = 0; i < args.length; i++) {
            let arg = args[i];
            if (arg == null) continue;
            let type = typeof(arg);
            if (arg instanceof Object && arg.constructor) type = arg.constructor.name;
            while (types.length <= i) {
                types.push(new Set<string>());
            }
            types[i].add(type);
        }
        if (!this.called.has(key)) {
            this.called.add(key);
            console.log(this.name, `${this.called.size} / ${this.size}`, key, types);
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
            // TODO: Not sure this is the right call; could ignore inheritance
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
            this.fields.set(name, new Field(name, null, false));
        }
    }

    exportStatement() {
        return `export const ${this.name} = window['${this.name}'];`;
    }

    toTS(instrumenter: Instrumenter) : string  {
        if (this.functionProxy) {
            return `export function ${this.functionProxy.toTS()}`;
        }

        // let code = `export class ${this.name} extends ${this.uber ? this.uber : 'SnapType'}`;
        // TODO: Because Typescript seems not to allow function shadowing,
        // need to manually define all parent types and methods (that aren't shadowed) here
        let code = `export class ${this.name} extends SnapType`;
        code += ` {\n`;
        let fKeys = [...this.fields.keys()];
        fKeys.sort();
        for (let fkey of fKeys) {
            code += '    ' + this.fields.get(fkey).toTS() + '\n';
        }
        code += '\n';
        let mKeys = [...this.methods.keys()];
        mKeys.sort();
        for (let mKey of mKeys) {
            code += '    ' + this.methods.get(mKey).toTS(instrumenter?.argTypes?.get(mKey)) + '\n';
        }
        code += '}';
        return code;
    }
}

class Field {
    name: string;
    type: string;
    isStatic: boolean;

    constructor(name: string, value: any, isStatic: boolean) {
        this.name = name;
        this.isStatic = isStatic;
        this.type = 'any';
        if (value !== null && value !== undefined) {
            this.type = typeof(value);
        }
    }

    toTS() : string {
        return `${this.isStatic ? 'static ' : ''}${this.name}: ${this.type};`;
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

    toTS(argTypes?: ArgTypes) : string {
        const override = this.checkOverride();
        if (override) return override;
        let code = `${this.name}(`;
        let first = true;
        let index = 0;
        for (let name of this.paramNames) {
            if (!first) code += ', ';
            first = false;
            let type = 'any';
            if (argTypes && argTypes[index] && argTypes[index].size > 0) {
                type = [...argTypes[index]].join(' | ');
                console.log(this.name, name, type);
            }
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