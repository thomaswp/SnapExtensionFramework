type FunctionID = Function | string;

function getPrototypeFunctionName(prototype: Object, func: Function) {
    for (let key in prototype) {
        if (prototype[key] === func) return key;
    }
    return null;
}

export class OverrideRegistry {

    static extend(clazz : Function, func : FunctionID, newFunction, countArgs = true) {
        if (!clazz || !clazz.prototype) {
            // eslint-disable-next-line no-console
            console.error('extend requires a class for its first argument');
            return;
        }
        return OverrideRegistry.extendObject(clazz.prototype, func, newFunction, countArgs);
    }

    static after(clazz : Function, func : FunctionID, doAfter: (...args) => void) {
        OverrideRegistry.wrap(clazz, func, null, doAfter);
    }

    static before(clazz : Function, func : FunctionID, doBefore: (...args) => void) {
        OverrideRegistry.wrap(clazz, func, doBefore, null);
    }

    static wrap(
        clazz : Function, func : FunctionID,
        doBefore?: (...args) => void, doAfter?: (...args) => void
    ) {
        function override(base: Function) {
            let args = [...arguments].slice(1);
            if (doBefore) doBefore.apply(this, args);
            base.apply(this, args);
            if (doAfter) doAfter.apply(this, args);
        }
        OverrideRegistry.extend(clazz, func, override, false);
    }

    static extendObject(object : object, func : FunctionID, newFunction, countArgs = true) {
        let functionName = typeof func === 'string' ? func : getPrototypeFunctionName(object, func);

        if (!object[functionName]) {
            // eslint-disable-next-line no-console
            console.trace();
            // eslint-disable-next-line no-console
            console.error('Cannot extend function ' + functionName +
                ' because it does not exist.');
            return;
        }

        var oldFunction = object[functionName];

        if (countArgs && !oldFunction.extended && oldFunction.length != undefined &&
                oldFunction.length + 1 !== newFunction.length) {
            var message = 'Extending function with wrong number of arguments: ' +
                functionName + ' ' +
                oldFunction.length + ' vs ' + newFunction.length;
            console.warn(message);
        }

        object[functionName] = function() {
            var args = [].slice.call(arguments);
            args.unshift(oldFunction);
            return newFunction.apply(this, args);
        };
        object[functionName].extended = true;

        return oldFunction;
    }
}

type BaseFunction = (...args) => any;

export class CallContext<ClassType, FunctionType extends BaseFunction> {

    readonly thisArg: ClassType;
    readonly originalFunction: FunctionType;
    readonly originalArgs: Parameters<FunctionType>;

    constructor(thisArg: ClassType, originalFunction: FunctionType, originalArgs: Parameters<FunctionType>) {
        this.thisArg = thisArg;
        this.originalFunction = originalFunction;
        this.originalArgs = originalArgs;
    }

    apply(args = this.originalArgs) {
        return this.originalFunction.apply(this.thisArg, args);
    }

    callWithArgs(...args) {
        return this.originalFunction.call(this.thisArg, ...args);
    }
}

type BaseWithContext<ClassType, FunctionType> = 
    FunctionType extends (...a: infer U) => infer R ? 
        (info: CallContext<ClassType, FunctionType>, ...a:U) => R: 
        never;

class Extender<Proto extends object, FunctionType extends Function> {

    readonly prototype: Proto;
    readonly originalFunction: FunctionType;

    constructor (proto: Proto, func: FunctionType) {
        this.prototype = proto;
        this.originalFunction = func;
    }
    override(override: BaseWithContext<Proto, FunctionType>) {
        OverrideRegistry.extendObject(this.prototype, this.originalFunction, function (base) {
            let originalArgs = [...arguments].slice(1);
            let info = new CallContext(this, base, originalArgs);
            return override(info, ...originalArgs);
        }, true);
    }

    after<ClassType extends Function, FunctionType extends BaseFunction>(
        doAfter: BaseWithContext<ClassType, FunctionType>,
    ) {
        this.wrap(null, doAfter);
    }

    before<ClassType extends Function, FunctionType extends BaseFunction>(
        doBefore: BaseWithContext<ClassType, FunctionType>,
    ) {
        this.wrap(doBefore, null);
    }

    wrap<ClassType extends Function, FunctionType extends BaseFunction>(
        doBefore?: BaseWithContext<ClassType, FunctionType>,
        doAfter?: BaseWithContext<ClassType, FunctionType>,
    ) {
        function override(base: BaseFunction) {
            let originalArgs = [...arguments].slice(1);
            let info = new CallContext(this, base, originalArgs);
            if (doBefore) doBefore(info, ...originalArgs);
            base.apply(this, originalArgs);
            if (doAfter) doAfter(info, ...originalArgs);
        }
        OverrideRegistry.extendObject(this.prototype, this.originalFunction, override, false);
    }
}

type ExtensionOf<Proto extends object> = {
    [P in keyof Proto]: Proto[P] extends BaseFunction ? Extender<Proto, Proto[P]> : never;
}

export function extend<Proto extends object>(proto: Proto) {
    let ex = {} as ExtensionOf<Proto>;
    Object.keys(proto).forEach(k => {
        let f = proto[k];
        if (typeof f === 'function') {
            ex[k] = new Extender(proto, f);
        }
    });
    return ex;
}

// export class ParameterizedOverride {
//     static override<ClassType extends Function, FunctionType extends (...args) => any>(
//         clazz: ClassType, 
//         functionDef: FunctionType,
//         override: BaseWithContext<ClassType, FunctionType>,
//     ) {
//         OverrideRegistry.extend(clazz, functionDef, function (base) {
//             let originalArgs = [...arguments].slice(1);
//             let info = new CallContext(this, base, originalArgs);
//             return override(info, ...originalArgs);
//         }, true);
//     }

//     static after<ClassType extends Function, FunctionType extends BaseFunction>(
//         clazz: ClassType, 
//         functionDef: FunctionType,
//         doAfter: BaseWithContext<ClassType, FunctionType>,
//     ) {
//         ParameterizedOverride.wrap(clazz, functionDef, null, doAfter);
//     }

//     static before<ClassType extends Function, FunctionType extends BaseFunction>(
//         clazz: ClassType, 
//         functionDef: FunctionType,
//         doBefore: BaseWithContext<ClassType, FunctionType>,
//     ) {
//         ParameterizedOverride.wrap(clazz, functionDef, doBefore, null);
//     }

//     static wrap<ClassType extends Function, FunctionType extends BaseFunction>(
//         clazz: ClassType, 
//         functionDef: FunctionType,
//         doBefore?: BaseWithContext<ClassType, FunctionType>,
//         doAfter?: BaseWithContext<ClassType, FunctionType>,
//     ) {
//         function override(base: BaseFunction) {
//             let originalArgs = [...arguments].slice(1);
//             let info = new CallContext(this, base, originalArgs);
//             if (doBefore) doBefore(info, ...originalArgs);
//             base.apply(this, originalArgs);
//             if (doAfter) doAfter(info, ...originalArgs);
//         }
//         OverrideRegistry.extend(clazz, functionDef, override, false);
//     }

// }

