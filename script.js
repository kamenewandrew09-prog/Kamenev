class Character {
    #health
    #damage

    constructor(health, damage) {
        this.#health = health
        this.#damage = damage
    }

    takeDamage(value) {
        this.#health -= value
        return this.#health;
    }

    isAlive() {
        if(this.#health > 0) {
            return true
        } 
        return false 
    }
    get damage() {
        return this.#damage
    }
}

class Hero extends Character {
    name

    constructor(name, health, damage) {
        super(health, damage)
        this.name = name
    }

    attack(target) {
        return target.takeDamage(this.damage)
    }
}


const player = new Hero("player", 100, 20)
const enemy = new Hero("enemy", 45, 30)

console.log(player.attack(enemy));
console.log(enemy.attack(player));

