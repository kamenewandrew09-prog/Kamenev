function callPolyfill(func, context, ...args) {
    const tempFuncProp = Symbol();

    context[tempFuncProp] = func;
    const result = context[tempFuncProp](...args);
    delete context[tempFuncProp];

    return result;
}

function bindPolyfill(func, context, ...bindedArgs) {
    return function (...newArgs) {
        return callPolyfill(func, context, ...bindedArgs, ...newArgs);
    };
}

const user = {
    name: "Andrii"
};

function sayHi(title, position) {
    console.log(`Hi ${title} ${this.name} ${position}`);
}

const result = bindPolyfill(sayHi, user, "Mr");

result("director");