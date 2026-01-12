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


// const vehicle = {
//     brand: 'Honda',
//     year: 2022,
//     isManual: false,
//     partOfCar: ["wheels", "engine",] 
// }


const players = [
  "Коваленко",
  "Шевчук",
  "Бондар",
  "Мельник",
  "Ткаченко",
  "Поліщук",
  "Романюк",
  "Савченко",
  "Дяченко",
  "Лисенко",
  "Гнатюк"
];

const dnipro = {
  "Коваленко": {
    number: 1,
    goals: 0
  },
  "Шевчук":{
    number: 2,
    goals: 0
  },
  "Бондар":{
    number: 3,
    goals: 0
  },
  "Мельник":{
    number: 4,
    goals: 0
  },
  "Ткаченко":{
    number: 5,
    goals: 0
  },
  "Поліщук":{
    number: 6,
    goals: 0
  },
  "Романюк":{
    number: 7,
    goals: 0
  },
  "Савченко":{
    number: 8,
    goals: 0
  },
  "Дяченко":{
    number: 9,
    goals: 0
  },
  "Лисенко":{
    number: 10,
    goals: 0
  },
  "Гнатюк":{
    number: 11,
    goals: 0
  }, 
}

for(let i = 0; i > players.length; i++) {
  dnipro[players[i]] = i +1
}

console.log(dnipro);

