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
    goals: 2
  },
  "Ткаченко":{
    number: 5,
    goals: 1
  },
  "Поліщук":{
    number: 6,
    goals: 4
  },
  "Романюк":{
    number: 7,
    goals: 8
  },
  "Савченко":{
    number: 8,
    goals: 10
  },
  "Дяченко":{
    number: 9,
    goals: 22
  },
  "Лисенко":{
    number: 10,
    goals: 31
  },
  "Гнатюк":{
    number: 11,
    goals: 36
  }, 
}

for(let i = 0; i > players.length; i++) {
  dnipro[players[i]] = i +1
}

console.log(dnipro);

