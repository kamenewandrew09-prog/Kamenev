// 1. Написати функцію checkLogin(login), яка:
// приймає рядок
// повертає true, якщо:
// довжина логіну символів більше 8
// інакше повертає false
const checkLogin = (login) => {
    if(login.length > 8) {
        return true
    }
    return false
}


console.log(checkLogin('hfghr'))
console.log(checkLogin('asfjhaksfjf'))


// 2. Написати функцію replaceA(str), яка:
// замінює
// повертає новий рядок
// replaceA("banana") // "b@n@n@"

const replaceA = (str) => {
    return str.replaceAll('a', '@')
}

console.log(replaceA("banana"))


// 3. Написати функцію isEmail(email), яка повертає true, якщо:
// рядок містить символ @
// після @ є крапка .
// @ не на початку рядка
// . не останній символ
// Подивіться сюди: includes(), indexOf(), lastIndexOf()

// const isEmail = (email) => {
//     if(email.indexOf('@') > 0) {
//         email.includes('@')
//         return true
//     } else if() {

//     }
// }

// console.log(isEmail("email@gmail.com"))



// 4. Написати функцію trimText(str), яка:
// видаляє
// повертає новий рядок
// trimText("   hello world ") // "hello world"

const trimText = (str) => {
    return str.trim()
}

console.log(trimText("   hello world     "))

//  5.Написати функцію capitalize(str), яка:
// робить
// повертає новий рядок
// capitalize("javascript is a language") // "Javascript Is A Language"

// toUpperCase(), slice(), split(), join()

const capitalize = (str) => {
    const words = str.split(' ')
    for(let i = 0; i < words.length; i++) {
        let word = words[i]
        words[i] = word[0].toUpperCase() + word.slice(1)
    }
    return words.join(' ')
}

console.log(capitalize("javascript is a language"))

// console.log(capitalize("javascript is a language"))

// 6. Написати функцію countChar(str, char), яка:
// рахує,
// повертає число
// countChar("banana", "a") // 3

let count = 0

const countChar = (str, char) => {
    for(let i = 0; i < str.length; i++) {
        if(char === str[i]) {
           count++
        }
    }
    return count
}

console.log(countChar("banana", "a"))








