// function Student(name, surname, age=18) {
//     //при використанні new негласно
//     // this = {}
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.course = 1;
    
    
//     this.nextCourse = function() {
//         this.course++;
//     };
//     this.sayHi = function() {
//         console.log(`Hello, my name is ${this.name}`);
//     };
//     this.changeData = function(prop, val) {
//         this[prop] = val;
//     }
    
//     //return this
// }
// // ФУНКЦІЇ КОНСТРУКТОРИ СТВОРЮЮТЬ ОБ'ЄКТИ
// const people = [
//     { name: 'Іван',   surname: 'Петренко' },
//     { name: 'Олег',   surname: 'Ковальчук' },
//     { name: 'Марія',  surname: 'Шевченко' },
//     { name: 'Анна',   surname: 'Мельник' },
//     { name: 'Дмитро', surname: 'Бондар' }
// ];

// const students = [];
// for (let person of people) {
//     students.push(new Student(person.name, person.surname))
// }

// console.log(students)

// const cars = [
//     { autoBrand: 'BMW',        wheelDrive: 'задній' },
//     { autoBrand: 'Audi',       wheelDrive: 'повний' },
//     { autoBrand: 'Toyota',     wheelDrive: 'передній' },
//     { autoBrand: 'Subaru',     wheelDrive: 'повний' },
//     { autoBrand: 'Mercedes',   wheelDrive: 'задній' }
// ];


// //Створіть конструктор, який створює об'єкт, що має властивіть
// // speed: 0 та передані autoBrend та wheelDrive
// // два методи. showSpeed() та accelerate(deltaSpeed) вони можуть у чейнінг


// const autoPark = []


function Car(autoBrand, wheelDrive, speed = 0) {
    this.autoBrand = autoBrand;
    this.wheelDrive = wheelDrive;
    this.speed = speed;


    this.showSpeed = function() {
        return this.speed
    },

    this.accelerate = function(deltaSpeed) {
        return this.speed += deltaSpeed
    }

}

const cars = [
    { autoBrand: 'BMW',        wheelDrive: 'задній' },
    { autoBrand: 'Audi',       wheelDrive: 'повний' },
    { autoBrand: 'Toyota',     wheelDrive: 'передній' },
    { autoBrand: 'Subaru',     wheelDrive: 'повний' },
    { autoBrand: 'Mercedes',   wheelDrive: 'задній' }
];

const autoPark = []

for(let vehicle of cars) {
    autoPark.push(new Car(vehicle.autoBrand, vehicle.wheelDrive))
}

console.log(autoPark)

