// const obj1 = {
//     a: 2,
//     b: 3,
//     logSelf() {
//       console.log(this);
//     }
// }

// const obj2 = obj1;

// obj1.b = 777

// obj1.logSelf();
// obj2.logSelf();

// // const obj3 = {}
// // Object.assign(obj3, obj1)

// const obj3 = Object.assign({}, obj1)

// function func() {
//     for (const key in obj3) {
//         console.log(`${key} >>> ${obj3[key]}`)
//     }
// }

// func()


// const driver = {
//     name: 'Carl',
//     age: 23,
    
//     car: {
//         brand: 'bmw',
//         number: '3465',

//         go() {
//           console.log(`машина марки ${this.brand} везе пасажира`)  
//         }
//         //сюди метод go(), що говорить машина марки ${brand} везе пасажира
//     }
// }

// driver.car.go()

// запустіть go()


// ДЗ 38

// 1) Дано об’єкт з методом
// Питання: що буде виведено в консоль і чому?
// const user1 = {
//   name: "Alex",
//   show() {
//     console.log(this.name);
//   }
// };

// user1.show();

// Виведе Alex, тому що this вказує на об'єкт перед крапкою

// 2) Метод повертає властивість об’єкта
// Питання: яке значення поверне функція?
// const car = {
//   brand: "BMW",
//   getBrand() {
//     return this.brand;
//   }
// };

// console.log(car.getBrand());

// виведе BMW, тому що метод повернув властивість this.brand в об'єкті car, а далі вже вивели в консоль що повернув сам метод

// 3) Втрата контексту при присвоєнні в змінну
// Питання: чому результат другого виклику відрізняється від першого?
// const user2 = {
//   name: "Alex",
//   show() {
//     console.log(this.name);
//   }
// };

// user2.show();

// const fn = user2.show;
// fn();

// функція викликається без об’єкта, тому this не вказує на user2 і властивість name недоступна.

// 4) Одна функція — різні об’єкти
// Питання: що буде виведено в консоль і чому?
// function showName() {
//   console.log(this.name);
// }

// const u1 = { name: "Ann", showName };
// const u2 = { name: "Bob", showName };

// u1.showName();
// u2.showName();

// виведе 2 імені, ми передаємо в 2 обєктах імені, а наша функція вказує this, а this визначається під час виклику, тобто останній об'єкт перед крапкою



// 5) Метод вкладеного об’єкта
// Питання: яке значення буде виведено?
// const obj1 = {
//   name: "Outer",
//   inner: {
//     name: "Inner",
//     show() {
//       console.log(this.name);
//     }
//   }
// };

// obj1.inner.show();

// виведе inner тому що this вказує на об'єкт перед крапкою


// 6) Метод повертає this
// Питання: що виведе код?
// const user3 = {
//   name: "Alex",
//   getName() {
//     return this;
//   }
// };

// console.log(user3.getName().name);
// виведе window і Alex?


// 7) Метод, викликаний без об’єкта
// Питання: чому результат саме такий?
// const user4 = {
//   age: 30,
//   getAge() {
//     return this.age;
//   }
// };

// const getAge = user4.getAge;
// console.log(getAge());


// 8) Стрілкова функція як метод об’єкта
// Питання: чому `this` тут не дорівнює об’єкту `user`?
// const user5 = {
//   name: "Alex",
//   show: () => {
//     console.log(this.name);
//   }
// };

// user5.show();

// в стрілочних функціях немає власного this начебто

// 9) Один і той самий метод у різних об’єктів
// Питання: чому виводиться інше значення, ніж у `user`?
// const user6 = {
//   name: "Alex",
//   show() {
//     console.log(this.name);
//   }
// };

// const admin = {
//   name: "Admin",
//   show: user6.show
// };

// admin.show();

// тому що в властивості show передано метод show з this який виводить останній об'єкт перед крапкою, тут це admin і його ім'я Admin


// 10) Визначення this під час виклику
// Питання: на що вказує `this` у момент виклику методу?
// const obj2 = {
//   value: 10,
//   show() {
//     console.log(this.value);
//   }
// };

// obj2.show();

// аналогічно, вказує на останній об'єкт перед крапкою, тому відповідь 10


// Примітка для учнів:
// Значення `this` визначається не там, де функція описана,
// а способом її виклику.





