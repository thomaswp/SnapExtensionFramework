export class DefGenerator {

    classes = new Map<string, ClassDef>;

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

        console.log(this.outputDefinitions());
        console.log(this);
    }

    outputExports() {
        return [...this.classes.values()].map(c => c.exportStatement()).join('\n');
    }

    outputDefinitions() {
        return `
export class SnapType {
    prototype: any;
    [key: string]: any;
}\n\n` + [...this.classes.values()].map(c => c.toTS()).join('\n\n');
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

class ClassDef {
    baseFunction: Function;
    name: string;
    uber = null as string;
    functionProxy : Method;
    fields = new Map<string, Field>; //[] as Field[];
    methods = new Map<string, Method>;
    addedParentData = false;

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

    toTS() : string  {
        if (this.functionProxy) {
            return `export function ${this.functionProxy.toTS()}`;
        }

        // let code = `export class ${this.name} extends ${this.uber ? this.uber : 'SnapType'}`;
        // TODO: Because Typescript seems not to allow function shadowing,
        // need to manually define all parent types and methods (that aren't shadowed) here
        let code = `export class ${this.name} extends SnapType`;
        code += ` {\n`;
        for (let field of this.fields.values()) {
            code += '    ' + field.toTS() + '\n';
        }
        code += '\n';
        for (let method of this.methods.values()) {
            code += '    ' + method.toTS() + '\n';
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
        var fnStr = func.toString().replace(Method.STRIP_COMMENTS, '');
        var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(Method.ARGUMENT_NAMES);
        if(result === null)
            result = [];
        result = result.filter(param => param.match(/^[a-zA-Z_$][0-9a-zA-Z_$]*$/))
        return result;
    }

    toTS() : string {
        const override = this.checkOverride();
        if (override) return override;
        let code = `${this.name}(`;
        let first = true;
        for (let name of this.paramNames) {
            if (!first) code += ', ';
            first = false;
            code += `${name}?: any`;
        }
        code += ');';
        return code;
    }

    checkOverride() {
        switch (this.name) {
            case 'childThatIsA': return `${this.name}(...args: any[]);`
        }
        return null;
    }
}