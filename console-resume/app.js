let myName = "Richard McLin"
console.log("Name: " + myName.toUpperCase());

let myCareer = "Shipt shopper";
console.log("Career: " + myCareer)

let myDescription = "I am a passionate individual who loves to learn new things."
console.log("Description: " + myDescription)

let myInterests = ["* Music", "* Movies", "* Technology", "* Nature"]
console.log("")
console.log("My Interests:");

for (let i = 0; i < myInterests.length; i++) {
    console.log(myInterests[i])
};

let jobTitle = ['Barista', 'Online Banking Customer Service Rep', 'Intern', 'Intern']
let companyName = ['Starbucks', 'Wells Fargo', 'Birmingham Division of Youth Services', 'Skin Wellness Dermatology']
let jobDescription = ['I made drinks for people.',
    'I worked in a call center for online banking.',
    'We provided community activities for local youth.',
    'I input patients information and assisted in some outpatient surgeries.']

function displayPosition(jobTitle, companyName, jobDescription) {
    console.log('* ' + jobTitle + ' at ' + companyName + ' - ' + jobDescription)
}

console.log("")
console.log("My Previous Experience:");
displayPosition('Barista', 'Starbucks', 'I made drinks for people.');
displayPosition('Online Banking Customer Service Rep', 'Wells Fargo', 'I worked in a call center for online banking.');
displayPosition('Intern', 'Birmingham Division of Youth Services', 'We provided community activities for local youth.');
displayPosition('Intern', 'Skin Wellness Dermatology', 'I input patients information and assisted in some outpatient surgeries.');

console.log("")
console.log("My Skills:")

let x = true
function displaySkill(skillName, x) {
    if (x) {console.log("* BAM: " + skillName)
        
    } else {console.log('* ' + skillName)}
}

displaySkill('Rapping', x)
displaySkill('Javascript')
displaySkill('Public Speaking')
displaySkill('Singing', x)
displaySkill('Karate', x)