function Player(name, power, hp, type='ai') {
    this.name = name;
    this.power = power;
    this.hp = hp;
    this.type = type;

    this.directionOfAttack = null;
    this.directionOfDefence = null;

    this.attack = function() {
        return this.power;
    }

    this.takeDamage = function(damage) {
        this.hp -= damage;
    }
}

const players = [
    new Player('Play1', 10, 100, 'user'),
    new Player('Lvl01', 2, 20, 'comp_lvl_01'),
]

const gameController = {
    attackTurn: null,
    defenceTurn: null,

    start() {
        this.attackTurn = Math.round(Math.random()); //визначаємо чий хід
        this.defenceTurn = Math.abs(this.attackTurn - 1);

        while (players[0].hp > 0 && players[1].hp > 0) {
            alert(`атакує гравець ${players[this.attackTurn].name}`)
            alert(`${players[this.attackTurn].name} наносить ${players[this.attackTurn].power} урона`)
            // реалізація механіки 
            // викликаєте метод отримати урон у захисника та передаєте в нього
            // метод атаки у атакуючого
            players[this.defenceTurn].takeDamage(players[this.attackTurn].attack())
            this.showHealth();
            this.changeTurn();
        }
        this.showWinner();
    }, 
    changeTurn() {
        this.attackTurn = this.defenceTurn;
        this.defenceTurn = Math.abs(this.defenceTurn - 1);
    },
    showHealth() {
        alert(`
            здоров'я ${players[this.attackTurn].name}: ${players[this.attackTurn].hp}
            здоров'я ${players[this.defenceTurn].name}: ${players[this.defenceTurn].hp}
            `)
    },
    showWinner() {
        if(players[0].hp <= 0) {
            alert(`переміг гравець${players[1].name}`)
        } else {
            alert(`переміг гравець${players[0].name}`)
        }
    }
}

gameController.start();


// ДЗ 2
let counterZeros = 0
let counterOnes = 0

for(let i = 0; i < 1000; i++) {
    let turn = Math.round(Math.random());
    if(turn === 0) {
        counterZeros++
    } else {
        counterOnes++
    }

}

console.log(counterZeros)
console.log(counterOnes)


