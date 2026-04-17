// тільки повторювані [1, 3]
const a = [1, 1, 2, 3, 3, 7];

const filteredA = a.filter(el => a.indexOf(el) !== a.lastIndexOf(el))
const aftermath = Array.from(new Set(filteredA))
console.log(aftermath)


//Функція, шо приймає масив, і перевіряє, чи всі елементи унікальні

function isUnique(arr) {
  const unique = new Set(arr);
  return unique.size === arr.length;
}

console.log(isUnique([1, 2, 3]));     
console.log(isUnique([1, 2, 2, 3]));

// тільки елементи, що повторюються 1 раз => [1, 3, 5]
const arr = [1, 2, 2, 3, 4, 4, 5];

const filteredArr = arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el))
console.log(filteredArr)    

const set = new Set();
set.add([1,2]);
set.add([1,2]);
console.log(set.size === 1); // false
// що і чому? - тому що це об'єкт і він порівнюється за посиланням в пам'яті