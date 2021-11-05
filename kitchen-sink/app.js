// String of my name
let myName = "Richard";
// Number of US states
const numberOfStates = 50;
// Sum of 5 + 4
let sum = 5 + 4;
// function sayHello displays alert "Hello World!"
function sayHello() {
    alert("Hello World!");
}
// calls the sayHello function
sayHello();

function checkAge(name, age) {
    console.log(name, age);
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    }
}

checkAge("Charles", 21)
checkAge("Abby", 27)
checkAge("James", 18)
checkAge("John", 17)

let myFavoriteVegetables = ["broccoli", "cauliflower", "leeks", "okra", "asparagus"]

for (let i = 0; i < myFavoriteVegetables.length; i++) {
    console.log(myFavoriteVegetables[i])
};

let myPet = {
    name: "Momo",
    breed: "Australian Cattle Dog"
};

console.log(myPet.name, myPet.breed);

let people = [
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

for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);

}

function getLength(word) {
    return word.length
};

let stringLength = getLength('Hello World!');

if (stringLength % 2 == 0) {
    console.log('The world is nice and even!')
} else {
    console.log('The world is an odd place!')
};