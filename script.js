// 1.
function createAdder() {
    let add = 0
    return function(num) {
        add += num
        return add
    }
}

const add = createAdder()
console.log(add(5))
console.log(add(3))
console.log(add(8))

// 2.

function createRange(min, max) {
    return function(num) {
        if(num < min) {
            return false
        } else if(num > max) {
            return false
        }
        return true
    }
}

const inRange = createRange(10, 20);
console.log(inRange(5))
console.log(inRange(15))
console.log(inRange(25))

// 3.

function createBank(currentBalance) {
    let balance = currentBalance
    return {
        deposit(amount) {
            balance += amount
        },
        withdraw(amount) {
            balance -= amount
        },
        getBalance() {
            return balance
        }
    }
} 

const bank = createBank(100);
bank.deposit(50)
bank.withdraw(30)
console.log(bank.getBalance())