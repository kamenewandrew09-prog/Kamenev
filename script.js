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


function applyPolyfill(func, context, ...restArgs) {
    const tempContext = {...context}
    const tempFuncPropName = Symbol();
    tempContext[tempFuncPropName] = func;
    
    return tempContext[tempFuncPropName](...restArgs)
    
}

applyPolyfill(sayHi, user, 'Mr', 'director');

console.log(user)