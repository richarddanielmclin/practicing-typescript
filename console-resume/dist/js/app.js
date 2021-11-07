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
var myName = "Richard McLin";
console.log("Name: " + myName.toUpperCase());
var myCareer = "Shipt shopper";
console.log("Career: " + myCareer);
var myDescription = "I am a passionate individual who loves to learn new things.";
console.log("Description: " + myDescription);
var myInterests = ["* Music", "* Movies", "* Technology", "* Nature"];
console.log("");
console.log("My Interests:");
for (var i = 0; i < myInterests.length; i++) {
    console.log(myInterests[i]);
}
;
var displayPosition = function (jobTitle, companyName, jobDescription) {
    console.log("* " + jobTitle + " at " + companyName + " - " + jobDescription);
};
console.log("");
console.log("My Previous Experience:");
displayPosition('Barista', 'Starbucks', 'I made drinks for people.');
displayPosition('Online Banking Customer Service Rep', 'Wells Fargo', 'I worked in a call center for online banking.');
displayPosition('Intern', 'Birmingham Division of Youth Services', 'We provided community activities for local youth.');
displayPosition('Intern', 'Skin Wellness Dermatology', 'I input patients information and assisted in some outpatient surgeries.');
console.log("");
console.log("My Skills:");
var x = true;
var displaySkill = function (skillName, x) {
    if (x) {
        console.log("* BAM: " + skillName);
    }
    else {
        console.log("* " + skillName);
    }
};
displaySkill('Rapping', x);
displaySkill('Javascript');
displaySkill('Public Speaking');
displaySkill('Singing', x);
displaySkill('Karate', x);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3QkFBd0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25zb2xlLXJlc3VtZS8uL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgbXlOYW1lID0gXCJSaWNoYXJkIE1jTGluXCI7XHJcbmNvbnNvbGUubG9nKFwiTmFtZTogXCIgKyBteU5hbWUudG9VcHBlckNhc2UoKSk7XHJcbnZhciBteUNhcmVlciA9IFwiU2hpcHQgc2hvcHBlclwiO1xyXG5jb25zb2xlLmxvZyhcIkNhcmVlcjogXCIgKyBteUNhcmVlcik7XHJcbnZhciBteURlc2NyaXB0aW9uID0gXCJJIGFtIGEgcGFzc2lvbmF0ZSBpbmRpdmlkdWFsIHdobyBsb3ZlcyB0byBsZWFybiBuZXcgdGhpbmdzLlwiO1xyXG5jb25zb2xlLmxvZyhcIkRlc2NyaXB0aW9uOiBcIiArIG15RGVzY3JpcHRpb24pO1xyXG52YXIgbXlJbnRlcmVzdHMgPSBbXCIqIE11c2ljXCIsIFwiKiBNb3ZpZXNcIiwgXCIqIFRlY2hub2xvZ3lcIiwgXCIqIE5hdHVyZVwiXTtcclxuY29uc29sZS5sb2coXCJcIik7XHJcbmNvbnNvbGUubG9nKFwiTXkgSW50ZXJlc3RzOlwiKTtcclxuZm9yICh2YXIgaSA9IDA7IGkgPCBteUludGVyZXN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc29sZS5sb2cobXlJbnRlcmVzdHNbaV0pO1xyXG59XHJcbjtcclxudmFyIGRpc3BsYXlQb3NpdGlvbiA9IGZ1bmN0aW9uIChqb2JUaXRsZSwgY29tcGFueU5hbWUsIGpvYkRlc2NyaXB0aW9uKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIiogXCIgKyBqb2JUaXRsZSArIFwiIGF0IFwiICsgY29tcGFueU5hbWUgKyBcIiAtIFwiICsgam9iRGVzY3JpcHRpb24pO1xyXG59O1xyXG5jb25zb2xlLmxvZyhcIlwiKTtcclxuY29uc29sZS5sb2coXCJNeSBQcmV2aW91cyBFeHBlcmllbmNlOlwiKTtcclxuZGlzcGxheVBvc2l0aW9uKCdCYXJpc3RhJywgJ1N0YXJidWNrcycsICdJIG1hZGUgZHJpbmtzIGZvciBwZW9wbGUuJyk7XHJcbmRpc3BsYXlQb3NpdGlvbignT25saW5lIEJhbmtpbmcgQ3VzdG9tZXIgU2VydmljZSBSZXAnLCAnV2VsbHMgRmFyZ28nLCAnSSB3b3JrZWQgaW4gYSBjYWxsIGNlbnRlciBmb3Igb25saW5lIGJhbmtpbmcuJyk7XHJcbmRpc3BsYXlQb3NpdGlvbignSW50ZXJuJywgJ0Jpcm1pbmdoYW0gRGl2aXNpb24gb2YgWW91dGggU2VydmljZXMnLCAnV2UgcHJvdmlkZWQgY29tbXVuaXR5IGFjdGl2aXRpZXMgZm9yIGxvY2FsIHlvdXRoLicpO1xyXG5kaXNwbGF5UG9zaXRpb24oJ0ludGVybicsICdTa2luIFdlbGxuZXNzIERlcm1hdG9sb2d5JywgJ0kgaW5wdXQgcGF0aWVudHMgaW5mb3JtYXRpb24gYW5kIGFzc2lzdGVkIGluIHNvbWUgb3V0cGF0aWVudCBzdXJnZXJpZXMuJyk7XHJcbmNvbnNvbGUubG9nKFwiXCIpO1xyXG5jb25zb2xlLmxvZyhcIk15IFNraWxsczpcIik7XHJcbnZhciB4ID0gdHJ1ZTtcclxudmFyIGRpc3BsYXlTa2lsbCA9IGZ1bmN0aW9uIChza2lsbE5hbWUsIHgpIHtcclxuICAgIGlmICh4KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIqIEJBTTogXCIgKyBza2lsbE5hbWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIqIFwiICsgc2tpbGxOYW1lKTtcclxuICAgIH1cclxufTtcclxuZGlzcGxheVNraWxsKCdSYXBwaW5nJywgeCk7XHJcbmRpc3BsYXlTa2lsbCgnSmF2YXNjcmlwdCcpO1xyXG5kaXNwbGF5U2tpbGwoJ1B1YmxpYyBTcGVha2luZycpO1xyXG5kaXNwbGF5U2tpbGwoJ1NpbmdpbmcnLCB4KTtcclxuZGlzcGxheVNraWxsKCdLYXJhdGUnLCB4KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9