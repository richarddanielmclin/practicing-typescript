/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!****************!*\
  !*** ./app.ts ***!
  \****************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUNBQWlDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBOEM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raXRjaGVuLXNpbmsvLi9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLy8gU3RyaW5nIG9mIG15IG5hbWVcclxudmFyIG15TmFtZSA9IFwiUmljaGFyZFwiO1xyXG4vLyBOdW1iZXIgb2YgVVMgc3RhdGVzXHJcbnZhciBudW1iZXJPZlN0YXRlcyA9IDUwO1xyXG4vLyBTdW0gb2YgNSArIDRcclxudmFyIHN1bSA9IDUgKyA0O1xyXG4vLyBmdW5jdGlvbiBzYXlIZWxsbyBkaXNwbGF5cyBhbGVydCBcIkhlbGxvIFdvcmxkIVwiXHJcbnZhciBzYXlIZWxsbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGFsZXJ0KFwiSGVsbG8gV29ybGQhXCIpO1xyXG59O1xyXG4vLyBjYWxscyB0aGUgc2F5SGVsbG8gZnVuY3Rpb25cclxuc2F5SGVsbG8oKTtcclxudmFyIGNoZWNrQWdlID0gZnVuY3Rpb24gKG5hbWUsIGFnZSkge1xyXG4gICAgY29uc29sZS5sb2cobmFtZSwgYWdlKTtcclxuICAgIGlmIChhZ2UgPCAyMSkge1xyXG4gICAgICAgIGFsZXJ0KFwiU29ycnkgXCIgKyBuYW1lICsgXCIsIHlvdSBhcmVuJ3Qgb2xkIGVub3VnaCB0byB2aWV3IHRoaXMgcGFnZSFcIik7XHJcbiAgICB9XHJcbn07XHJcbmNoZWNrQWdlKFwiQ2hhcmxlc1wiLCAyMSk7XHJcbmNoZWNrQWdlKFwiQWJieVwiLCAyNyk7XHJcbmNoZWNrQWdlKFwiSmFtZXNcIiwgMTgpO1xyXG5jaGVja0FnZShcIkpvaG5cIiwgMTcpO1xyXG52YXIgbXlGYXZvcml0ZVZlZ2V0YWJsZXMgPSBbXCJicm9jY29saVwiLCBcImNhdWxpZmxvd2VyXCIsIFwibGVla3NcIiwgXCJva3JhXCIsIFwiYXNwYXJhZ3VzXCJdO1xyXG5mb3IgKHZhciBpID0gMDsgaSA8IG15RmF2b3JpdGVWZWdldGFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zb2xlLmxvZyhteUZhdm9yaXRlVmVnZXRhYmxlc1tpXSk7XHJcbn1cclxuO1xyXG47XHJcbnZhciBJRFBldCA9IGZ1bmN0aW9uIChteVBldCkge1xyXG4gICAgY29uc29sZS5sb2cobXlQZXQubmFtZSArIFwiIGlzIGFuIFwiICsgbXlQZXQuYnJlZWQgKyBcIiFcIik7XHJcbn07XHJcbklEUGV0KHsgbmFtZTogJ01vbW8nLCBicmVlZDogJ0F1c3RyYWxpYW4gQ2F0dGxlIERvZycgfSk7XHJcbnZhciBwZW9wbGUgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJMZWFoXCIsXHJcbiAgICAgICAgYWdlOiAyMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkJyYWRcIixcclxuICAgICAgICBhZ2U6IDI5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiU2FtXCIsXHJcbiAgICAgICAgYWdlOiAxOFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIktlaXNoYVwiLFxyXG4gICAgICAgIGFnZTogMjBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJMdWtlXCIsXHJcbiAgICAgICAgYWdlOiAyN1xyXG4gICAgfVxyXG5dO1xyXG5mb3IgKHZhciBpID0gMDsgaSA8IHBlb3BsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgY2hlY2tBZ2UocGVvcGxlW2ldLm5hbWUsIHBlb3BsZVtpXS5hZ2UpO1xyXG59XHJcbnZhciBnZXRMZW5ndGggPSBmdW5jdGlvbiAod29yZCkge1xyXG4gICAgcmV0dXJuIHdvcmQubGVuZ3RoO1xyXG59O1xyXG52YXIgc3RyaW5nTGVuZ3RoID0gZ2V0TGVuZ3RoKCdIZWxsbyBXb3JsZCEnKTtcclxuaWYgKHN0cmluZ0xlbmd0aCAlIDIgPT0gMCkge1xyXG4gICAgY29uc29sZS5sb2coJ1RoZSB3b3JsZCBpcyBuaWNlIGFuZCBldmVuIScpO1xyXG59XHJcbmVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coJ1RoZSB3b3JsZCBpcyBhbiBvZGQgcGxhY2UhJyk7XHJcbn1cclxuO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=