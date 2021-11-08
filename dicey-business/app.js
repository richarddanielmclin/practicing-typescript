"use strict";
exports.__esModule = true;
var jquery_1 = require("jquery");
// getting button from doc
var newDieBtn = (0, jquery_1["default"])('#new-die-btn');
var rollDieBtn = (0, jquery_1["default"])('#roll-die-btn');
var sumDieBtn = (0, jquery_1["default"])('#sum-die-btn');
var diceArr = [];
// creating container
var container = document.createElement('div');
container.classList.add('container');
container.id = 'container-id';
document.body.appendChild(container);
// // setting class for creation of new die
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.div.style.height = '100px';
        this.div.style.width = '100px';
        this.div.style.backgroundColor = 'rgb(102, 202, 186)';
        container.appendChild(this.div);
        diceArr.push(this);
        // assigning random numbers to div ids
        this.value = getRandomNumber(1, 7);
        this.div.id = this.value;
        this.div.textContent = this.value;
        // this.val = this.div.id
        // setting numbers to their dice unicode values
        if (this.value === 1) {
            this.div.textContent = '\u2680';
        }
        else if (this.value === 2) {
            this.div.textContent = '\u2681';
        }
        else if (this.value === 3) {
            this.div.textContent = '\u2682';
        }
        else if (this.value === 4) {
            this.div.textContent = '\u2683';
        }
        else if (this.value === 5) {
            this.div.textContent = '\u2684';
        }
        else if (this.value === 6) {
            this.div.textContent = '\u2685';
        }
        // setting Roll Die button to roll all dice when clicked
        this.div.addEventListener('click', function () { return _this.roll(); });
        rollDieBtn.on('click', function () { return _this.roll(); });
    }
    // creating rolling method that will update the numbers on the dice
    Die.prototype.roll = function () {
        this.value = getRandomNumber(1, 7);
        this.div.id = this.value;
        this.div.textContent = this.value;
        if (this.value === 1) {
            this.div.textContent = '\u2680';
        }
        else if (this.value === 2) {
            this.div.textContent = '\u2681';
        }
        else if (this.value === 3) {
            this.div.textContent = '\u2682';
        }
        else if (this.value === 4) {
            this.div.textContent = '\u2683';
        }
        else if (this.value === 5) {
            this.div.textContent = '\u2684';
        }
        else if (this.value === 6) {
            this.div.textContent = '\u2685';
        }
    };
    return Die;
}());
var sumDie = function () {
    var sum = 0;
    diceArr.forEach(function (die) {
        // use die.value add on to sum
        sum += die.value;
    });
    alert("The sum of the dice is " + sum + "!");
};
// // new die every time button is clicked
newDieBtn.on('click', function () {
    new Die();
});
// // setting random number generator from 1-6
var getRandomNumber = function (min, max) {
    min = Math.ceil(1);
    max = Math.floor(7);
    return Math.floor(Math.random() * (7 - 1) + 1);
};
sumDieBtn.on('click', function () { return sumDie(); });
