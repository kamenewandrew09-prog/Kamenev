function memorize(fn) {
    const cache = {}
    return function(arg) {
        if(cache[arg] !== undefined) {
            return cache[arg]
        }  
        const result = fn(arg)
        cache[arg] = result
        return result
    }

}

const square = memorize(n => n * n);

console.log(square(2));
console.log(square(2));
console.log(square(2));
console.log(square(3));
console.log(square(3));
console.log(square(2));


function createTempValue(ms) {
    let value = null;
    let timeout = null;

    return {
        set(newValue) {
            value = newValue
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                value = null;
                timeout = null;
            }, ms);
        },
        get() {
            return value;
        }
    }
}

const temp = createTempValue(5000);


temp.set(5);
console.log(temp.get()); 

setTimeout(() => {
    console.log(temp.get()); 
}, 5000);
