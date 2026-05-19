function sayHi(msOrMr, position) {
    console.log(`${msOrMr} ${this.name}: ${position}`);
}

const user = {
    name: 'Oleg',
    tempFunc() {console.log('asdbfvasdbkl')}
};

const admin = {
    name: 'Tetyana',
};


function callPolyfill(func, context, ...restArgs) {
    const tempContext = {...context}
    const tempFuncPropName = Symbol();
    tempContext[tempFuncPropName] = func;
    
    return tempContext[tempFuncPropName](...restArgs)
    
}

callPolyfill(sayHi, user, 'Mr', 'director');

console.log(user)


function applyPolyfill(func, context, args) {
    const tempContext = {...context}
    const tempFuncPropName = Symbol();
    tempContext[tempFuncPropName] = func;
    
    return tempContext[tempFuncPropName](...args)
    
}

applyPolyfill(sayHi, user, ['Mr', 'director']);

console.log(user)


function bindPolyfill(func, context, ...bindedArgs) {
    return function(...newArgs) {
        return func.apply(context, [...bindedArgs, ...newArgs])
    }
}

const result = bindPolyfill(sayHi, user, 'Mr');
result('director')
