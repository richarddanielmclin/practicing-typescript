// getting button from doc
let newDieBtn = document.getElementById('new-die-btn');
let rollDieBtn = document.getElementById('roll-die-btn');
let sumDieBtn = document.getElementById('sum-die-btn');
let diceArr = [];

// creating container
let container = document.createElement('div')
container.classList.add('container')
container.id = 'container-id'
document.body.appendChild(container)

// setting class for creation of new die
class Die {
    constructor() {
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.div.style.height = '100px'
        this.div.style.width = '100px'
        this.div.style.backgroundColor = 'rgb(102, 202, 186)';
        container.appendChild(this.div)
        diceArr.push(this);


        // assigning random numbers to div ids
        this.value = getRandomNumber()
        this.div.id = this.value;
        this.div.textContent = this.value;
        // this.val = this.div.id

        // setting numbers to their dice unicode values
        if (this.value === 1) {
            this.div.textContent = '\u2680'
        } else if (this.value === 2) {
            this.div.textContent = '\u2681'
        } else if (this.value === 3) {
            this.div.textContent = '\u2682'
        } else if (this.value === 4) {
            this.div.textContent = '\u2683'
        } else if (this.value === 5) {
            this.div.textContent = '\u2684'
        } else if (this.value === 6) {
            this.div.textContent = '\u2685'
        }


        // setting Roll Die button to roll all dice when clicked
        this.div.addEventListener('click', () => this.roll())
        rollDieBtn.addEventListener('click', () => this.roll())
    }

    // creating rolling method that will update the numbers on the dice
    roll() {

        this.value = getRandomNumber()
        this.div.id = this.value;
        this.div.textContent = this.value;

        if (this.value === 1) {
            this.div.textContent = '\u2680'
        } else if (this.value === 2) {
            this.div.textContent = '\u2681'
        } else if (this.value === 3) {
            this.div.textContent = '\u2682'
        } else if (this.value === 4) {
            this.div.textContent = '\u2683'
        } else if (this.value === 5) {
            this.div.textContent = '\u2684'
        } else if (this.value === 6) {
            this.div.textContent = '\u2685'
        }
    }
}

const sumDie = () => {
    let sum = 0;
    diceArr.forEach(die => {
        // use die.value add on to sum
        sum += die.value
    })
    alert(`The sum of the dice is ${sum}!`)

}

// new die every time button is clicked
newDieBtn.addEventListener('click', () => {
    new Die();
})

// setting random number generator from 1-6
function getRandomNumber(min, max) {
    min = Math.ceil(1);
    max = Math.floor(7);
    return Math.floor(Math.random() * (7 - 1) + 1)
}

sumDieBtn.addEventListener('click', () => sumDie())