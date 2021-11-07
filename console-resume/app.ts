import $ from 'jquery'

let myName: string = "Richard McLin"
console.log(`Name: ${myName.toUpperCase()}`);

let myCareer: string = "Shipt shopper"
console.log(`Career: ${myCareer}`)


let myDescription: string = "I am a passionate individual who loves to learn new things."
console.log(`Description: ${myDescription}`)

let myInterests: string[] = ["* Music", "* Movies", "* Technology", "* Nature"]
console.log("")
console.log("My Interests:")

for (let i = 0; i < myInterests.length; i++) {
    console.log(myInterests[i])
};

let displayPosition = (jobTitle: string, companyName: string, jobDescription: string): any => {
    console.log(`* ${jobTitle} at ${companyName} - ${jobDescription}`)
}

console.log("")
console.log("My Previous Experience:");
displayPosition('Barista', 'Starbucks', 'I made drinks for people.');
displayPosition('Online Banking Customer Service Rep', 'Wells Fargo', 'I worked in a call center for online banking.');
displayPosition('Intern', 'Birmingham Division of Youth Services', 'We provided community activities for local youth.');
displayPosition('Intern', 'Skin Wellness Dermatology', 'I input patients information and assisted in some outpatient surgeries.');

console.log("")
console.log("My Skills:")

let x: boolean = true;

let displaySkill = (skillName: string, x?: boolean) => {
    if (x) {
        console.log(`* BAM: ${skillName}`)
    } else {
        console.log(`* ${skillName}`)
    }
}

displaySkill('Rapping', x)
displaySkill('Javascript')
displaySkill('Public Speaking')
displaySkill('Singing', x)
displaySkill('Karate', x)