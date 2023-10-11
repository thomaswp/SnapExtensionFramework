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
            let value = base.apply(this, args);
            if (doAfter) doAfter.apply(this, args);
            return value;
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

    callWithOriginalArgs() {
        return this.originalFunction.call(this.thisArg, ...this.originalArgs);
    }

    callWithNewArgs(...args) {
        return this.originalFunction.call(this.thisArg, ...args);
    }
}

type BaseWithContext<ClassType, FunctionType> = 
    FunctionType extends (...a: infer U) => infer R ? 
        (this: ClassType, info: CallContext<ClassType, FunctionType>, ...a:U) => R: 
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
            return override.call(this, info, ...originalArgs);
        }, false);
    }

    after(
        doAfter: BaseWithContext<Proto, FunctionType>,
    ) {
        this.wrap(null, doAfter);
    }

    before(doBefore: BaseWithContext<Proto, FunctionType>,) {
        this.wrap(doBefore, null);
    }

    wrap(
        doBefore?: BaseWithContext<Proto, FunctionType>,
        doAfter?: BaseWithContext<Proto, FunctionType>,
    ) {
        OverrideRegistry.extendObject(this.prototype, this.originalFunction, function override(base) {
            let originalArgs = [...arguments].slice(1);
            let info = new CallContext(this, base, originalArgs);
            if (doBefore) doBefore.call(this, info, ...originalArgs);
            let value = base.apply(this, originalArgs);
            if (doAfter) doAfter.call(this, info, ...originalArgs);
            return value;
        }, false);
    }
}

type RemoveIndex<T> = {
    [ K in keyof T as
      string extends K
        ? never
        : number extends K
          ? never
          : symbol extends K
            ? never
            : K
    ]: T[K];
};

type ExtensionOf<Proto extends object> = {
    [P in keyof RemoveIndex<Proto>]: Proto[P] extends BaseFunction
        ? Extender<Proto, Proto[P]>
        : never;
}

export function extend<Proto extends object>(proto: Proto) {
    let ex = {} as ExtensionOf<Proto>;
    let count = 0;
    for (let k in proto) {
        let key = k as string;
        let f = proto[k];
        if (typeof f === 'function') {
            // console.log( k);
            ex[key] = new Extender(proto, f);
            count++;
        }
    };
    // console.log("created " + count + " extenders");
    return ex;
}
