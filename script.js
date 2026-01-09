// 6. Написати функцію countChar(str, char), яка:
// рахує,
// повертає число
// countChar("banana", "a") // 3

const countChar = (str, char) => {
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] === char) {
            count++
        }

    }   
    return count++;
}

console.log(countChar("banana", "a"));