function Player(name, power, defence, hp, type='ai') {
    this.name = name;
    this.power = power;
    this.defence = defence;
    this.hp = hp;
    this.maxHp = hp;
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
    new Player('Player 1', 10, 13, 100, 'user'),
    new Player('AI 01', 2, 13, 20, 'comp_lvl_01'),
]

const gameController = {
    attackTurn: null,
    defenceTurn: null,
    playerCards: null,
    playersHP: null,

    resizeHealthBar() {
        for (const i = 0; i <=1; i++) {
            this.playersHP[i].style.width = `${players[i].hp / players[i].maxHp * 100}%`
        }
    },

    addHTMLData() {
        this.playerCards = document.querySelectorAll('.player-card');
        this.playersHP = document.querySelectorAll('.hp-bar-inner');
        for (let i = 0; i <=1; i++) {
            const playerNameEl = this.playerCards[i].querySelector('.player-stats-item.name');
            playerNameEl.innerText = players[i].name;

            const playerPowerEl = this.playerCards[i].querySelector('.player-stats-item.power span');
            playerPowerEl.innerText = players[i].power;

            const playerDefenceEl = this.playerCards[i].querySelector('.player-stats-item.defence span');
            playerDefenceEl.innerText = players[i].defence;

            
        }
    },

    start() {
        this.addHTMLData();
        this.resizeHealthBar();

        this.attackTurn = Math.round(Math.random()); //визначаємо чий хід
        this.defenceTurn = Math.abs(this.attackTurn - 1);

        while (players[0].hp > 0 && players[1].hp > 0) {
            // alert(`атакує гравець ${players[this.attackTurn].name}`)
            // alert(`${players[this.attackTurn].name} наносить ${players[this.attackTurn].power} урона`);
            // this.resizeHealthBar();
            
            players[this.defenceTurn].takeDamage(players[this.attackTurn].attack())
            // this.showHealth();
            this.changeTurn();
        }
        // this.showWinner();
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
