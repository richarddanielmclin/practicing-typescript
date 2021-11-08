import $ from 'jquery'

// getting button from doc
let newDieBtn = $('#new-die-btn');
let rollDieBtn = $('#roll-die-btn');
let sumDieBtn = $('#sum-die-btn');
let diceArr: Array<any> = [];

// creating container
let container: HTMLDivElement = document.createElement('div')
container.classList.add('container')
container.id = 'container-id'
document.body.appendChild(container)

// // setting class for creation of new die
class Die {
    div: HTMLDivElement
    value: any

    constructor() {
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.div.style.height = '100px'
        this.div.style.width = '100px'
        this.div.style.backgroundColor = 'rgb(102, 202, 186)';
        container.appendChild(this.div)
        diceArr.push(this);


        // assigning random numbers to div ids
        this.value = getRandomNumber(1, 7)
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
        rollDieBtn.on('click', () => this.roll())
    }

    // creating rolling method that will update the numbers on the dice
    roll() {

        this.value = getRandomNumber(1, 7)
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
    let sum: number = 0;
    diceArr.forEach(die => {
        // use die.value add on to sum
        sum += die.value
    })
    alert(`The sum of the dice is ${sum}!`)

}

// // new die every time button is clicked
newDieBtn.on('click', () => {
    new Die();
})

// // setting random number generator from 1-6
let getRandomNumber = (min: number, max: number): any => {
    min = Math.ceil(1);
    max = Math.floor(7);
    return Math.floor(Math.random() * (7 - 1) + 1)
}

sumDieBtn.on('click', () => sumDie())