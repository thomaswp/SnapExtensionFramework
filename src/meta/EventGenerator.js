//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory
const directoryPath = path.join(__dirname, '../../snap/src');

let events = {};

const EMPTY_ARGS = 'EmptyArgs';
const VALUE_ARGS = 'ValueArgs';

function getSpecialArg(name) {
    const map = {
        'blockId(': 'BlockIDArgs',
        'argId(': 'InputIDArgs',
        'getDefinitionJSON(': 'CustomBlockDefArgs',
    }
    for (key of Object.keys(map)) {
        if (name.includes(key)) return map[key];
    }
    return null;
}

function extractArgs(args) {
    if (!args) return EMPTY_ARGS;
    if (!args.startsWith('{')) {
        const specialArg = getSpecialArg(args);
        if (specialArg) return specialArg;
        const simpleExpr = /^[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*$/;
        if (simpleExpr.test(args)) {
            parts = args.split('.');
            let name = parts[parts.length - 1];
            if (name && name.length > 0) {
                let obj = {};
                obj[name] = 'any'
                return obj;
            }
        }
        return VALUE_ARGS;
    }

    let argObj = {};
    const propRegex = /['"]?([a-zA-Z0-9-_]+)['"]?:\s*(.+)[,$]/gm;
    let match = propRegex.exec(args);
    while (match != null) {
        let prop = match[1];
        let value = match[2];
        let type = getSpecialArg(value) || 'any';
        argObj[prop] = type;
        console.log(prop);
        match = propRegex.exec(args);
    }
    return argObj;
}

function processSourceFile(name, source) {
    console.log(name);
    console.log('-------------------');
    const regex = /Trace\s*\.\s*log\s*\(\s*['"]([A-Za-z0-9\.]+)['"]\s*(,\s*([^;]+))?\);?/gm;
    let match = regex.exec(source);
    while (match != null) {
        let message = match[1];
        console.log(message);
        let argsString = match[3]?.trim();
        let args = extractArgs(argsString);
        events[message] = args;
        match = regex.exec(source);
    }
    console.log('\n');
}

function readEvents() {
    console.log("!", directoryPath);
    //passsing directoryPath and callback function
    let files = fs.readdirSync(directoryPath);
    console.log(files);
    //listing all files using forEach
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        console.log(file);
        let newPath = path.join(directoryPath, file);
        let data = fs.readFileSync(newPath);
        processSourceFile(file, data.toString());
    });
}

function generateArgsClass(args, className) {
    if (typeof args === 'string') return null;
    let code = `export interface ${className} extends SnapEventArgs {\n`;
    for (let [name, type] of Object.entries(args)) {
        code += `    ${name}: ${type};\n`;
    }
    code += '}\n';
    return code;
}

function indent(code, nSpaces) {
    return code.split('\n').map(line => {
        return line.length == 0 ? line : line.padStart(nSpaces + line.length)
    }).join('\n');
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function generateCode() {
    let code = 'import { BlockIDArgs, EmptyArgs, InputIDArgs, CustomBlockDefArgs, SnapEventArgs, SnapEventListener, ValueArgs } from "./SnapEventListener";\n';
    code += 'export namespace Events {\n';
    let keys = Object.keys(events);
    keys.sort();
    let lastNamespace = '';
    let nSpace = 4;
    let firstNamespace = true;
    keys.forEach(event => {
        let parts = event.split('.');
        let namespace = capitalize(parts[0]);
        let close = false;
        if (namespace != lastNamespace) {
            if (!firstNamespace) {
                code += indent(`}\n\n`, nSpace);
            }
            firstNamespace = false;
            code += indent(`export namespace ${namespace} {\n`, nSpace);
            close = true;
            lastNamespace = namespace;
        }
        nSpace += 4;

        let args = events[event];

        let classNamePrefix = capitalize(parts[1]);

        let argsClassName = classNamePrefix + 'Args';
        let listenerClassName = classNamePrefix + 'Listener';

        let argsClass = generateArgsClass(args, argsClassName);
        let getValue = '';
        if (argsClass) {
            code += indent('\n' + argsClass, nSpace);
            let argKeys = Object.keys(args);
            if (argKeys.length == 1) {
                let argKey = argKeys[0];
                if (argKey !== 'value') {
                    getValue = `\n    getValueKey() { return '${argKey}'; }\n`;
                }
            }
        } else {
            argsClassName = args;
        }

        code += indent(`
export class ${listenerClassName} extends SnapEventListener {
    static readonly type = '${event}';
    constructor(args: (args: ${argsClassName}) => void) {
        super(${listenerClassName}.type, args);
    }${getValue}
}
`, nSpace);

        nSpace -=4;
    });

    code += `    }\n}\n`;
    return code;
}

readEvents();
let code = generateCode();
console.log(code);

fs.writeFileSync(path.join(__dirname, '../events/SnapEvents.ts'), code);