"use strict";
exports.__esModule = true;
// String of my name
var myName = "Richard";
// Number of US states
var numberOfStates = 50;
// Sum of 5 + 4
var sum = 5 + 4;
// function sayHello displays alert "Hello World!"
var sayHello = function () {
    alert("Hello World!");
};
// calls the sayHello function
sayHello();
var checkAge = function (name, age) {
    console.log(name, age);
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
};
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
var myFavoriteVegetables = ["broccoli", "cauliflower", "leeks", "okra", "asparagus"];
for (var i = 0; i < myFavoriteVegetables.length; i++) {
    console.log(myFavoriteVegetables[i]);
}
;
;
var IDPet = function (myPet) {
    console.log(myPet.name + " is an " + myPet.breed + "!");
};
IDPet({ name: 'Momo', breed: 'Australian Cattle Dog' });
// OR
// let myPet: MyPet = {
//     name: 'Momo',
//     breed: 'Australian Cattle Dog'
// }
// console.log(myPet.breed, myPet.name)
var people = [
    {
        name: "Leah",
        age: 22
    },
    {
        name: "Brad",
        age: 29
    },
    {
        name: "Sam",
        age: 18
    },
    {
        name: "Keisha",
        age: 20
    },
    {
        name: "Luke",
        age: 27
    }
];
for (var i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}
var getLength = function (word) {
    return word.length;
};
var stringLength = getLength('Hello World!');
if (stringLength % 2 == 0) {
    console.log('The world is nice and even!');
}
else {
    console.log('The world is an odd place!');
}
;
