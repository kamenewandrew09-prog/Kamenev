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
        this.speed += deltaSpeed
        return this
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

autoPark[0].accelerate(20).accelerate(40)
console.log(autoPark[0].showSpeed())
autoPark[1].accelerate(10).accelerate(35)
console.log(autoPark[1].showSpeed())