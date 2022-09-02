export class OverrideRegistry {

    static extend(clazz : Function, functionName : string, newFunction, countArgs = true) {
        if (!clazz || !clazz.prototype) {
            // eslint-disable-next-line no-console
            console.error('extend requires a class for its first argument');
            return;
        }
        return OverrideRegistry.extendObject(clazz.prototype, functionName, newFunction, countArgs);
    }

    static after(clazz : Function, functionName : string, doAfter: (...args) => void) {
        OverrideRegistry.wrap(clazz, functionName, null, doAfter);
    }

    static before(clazz : Function, functionName : string, doBefore: (...args) => void) {
        OverrideRegistry.wrap(clazz, functionName, doBefore, null);
    }

    static wrap(
        clazz : Function, functionName : string,
        doBefore?: (...args) => void, doAfter?: (...args) => void
    ) {
        function override(base: Function) {
            let args = [...arguments].slice(1);
            if (doBefore) doBefore.apply(this, args);
            base.apply(this, args);
            if (doAfter) doAfter.apply(this, args);
        }
        OverrideRegistry.extend(clazz, functionName, override, false);
    }

    static extendObject(object : object, functionName : string, newFunction, countArgs = true) {
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

