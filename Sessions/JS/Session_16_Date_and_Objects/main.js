/*************************************** Problem 1
* Define a function `checkBirthday` that takes a `birthDate` in the format 'YYYY-MM-DD'
* and performs the following tasks:
* 1. Checks if today is the user's birthday.
* 2. If it is, return a birthday greeting message.
* 3. If not, calculate and return the number of days remaining until the next birthday.
*/
// function checkBirthday(birthDate) {
//     // Your implementation here
//     const today = new Date();
//     const todaysDay = today.getDate();
//     const todaysMonth = today.getMonth();
//     const todaysYear = today.getFullYear();
//     const birthDateObj = new Date(birthDate);
//     const birthYear = birthDateObj.getFullYear();
//     const birthMonth = birthDateObj.getMonth();
//     const birthDay = birthDateObj.getDate();

//     if (birthDay == todaysDay && birthMonth == todaysMonth) {
//         return `Happy Brithday !!! you are ${todaysYear - birthYear} years old !!` ;
//     }
//     else{
//         const nextBirthday = new Date(todaysYear,birthMonth,birthDay);
//         if (today >= nextBirthday) {
//             nextBirthday.setFullYear(today.getFullYear() + 1);
//         }
//         const timeDifference = nextBirthday - today;
//         const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
//         return `Days remaining until next birthday: ${daysRemaining} days;`
//     }
    
// }

// console.log(checkBirthday('1990-09-01')); // Replace with your test date has context menu


/*---------------------------------------------------------------------------*/
/*
    Problem 2
*/

const students = [
    {
        id: 1,
        name: 'Alice Johnson',
        age: 15,
        grade: '10th',
        subjects: ['Math', 'English', 'Biology'],
        scores: { Math: 90, English: 85, Biology: 92 },
        extracurriculars: ['Soccer', 'Drama Club']
    },
    {
        id: 2,
        name: 'Bob Smith',
        age: 16,
        grade: '11th',
        subjects: ['Math', 'Physics', 'Chemistry'],
        scores: { Math: 78, Physics: 88, Chemistry: 79 },
        extracurriculars: ['Basketball', 'Debate Club']
    },
    {
        id: 3,
        name: 'Catherine Lee',
        age: 15,
        grade: '10th',
        subjects: ['Math', 'History', 'Art'],
        scores: { Math: 82, History: 91, Art: 95 },
        extracurriculars: ['Art Club', 'Volunteering']
    },
    {
        id: 4,
        name: 'David Brown',
        age: 17,
        grade: '12th',
        subjects: ['Biology', 'Chemistry', 'Math'],
        scores: { Biology: 89, Chemistry: 85, Math: 88 },
        extracurriculars: ['Science Club', 'Robotics']
    },
    {
        id: 5,
        name: 'Emily Davis',
        age: 16,
        grade: '11th',
        subjects: ['English', 'History', 'Spanish'],
        scores: { English: 90, History: 87, Spanish: 92 },
        extracurriculars: ['Theater', 'Student Council']
    },
    {
        id: 6,
        name: 'Franklin Wilson',
        age: 15,
        grade: '10th',
        subjects: ['Math', 'Physics', 'Music'],
        scores: { Math: 85, Physics: 80, Music: 88 },
        extracurriculars: ['Music Band', 'Chess Club']
    },
    {
        id: 7,
        name: 'Grace Martinez',
        age: 16,
        grade: '11th',
        subjects: ['Biology', 'Math', 'English'],
        scores: { Biology: 90, Math: 92, English: 88 },
        extracurriculars: ['Sports', 'Volunteering']
    },
    {
        id: 8,
        name: 'Hannah Garcia',
        age: 15,
        grade: '10th',
        subjects: ['English', 'Art', 'Biology'],
        scores: { English: 84, Art: 94, Biology: 89 },
        extracurriculars: ['Art Club', 'Drama Club']
    },
    {
        id: 9,
        name: 'Isaac Rodriguez',
        age: 17,
        grade: '12th',
        subjects: ['Math', 'Physics', 'History'],
        scores: { Math: 87, Physics: 90, History: 83 },
        extracurriculars: ['Debate Club', 'Soccer']
    },
    {
        id: 10,
        name: 'Jessica Lee',
        age: 16,
        grade: '11th',
        subjects: ['Chemistry', 'English', 'Math'],
        scores: { Chemistry: 91, English: 89, Math: 85 },
        extracurriculars: ['Science Club', 'Student Council']
    }
];
/*
    1- Get a List of Student Names.
    2- Find Students with Scores Above 90 in Math.
    3- Calculate Average Score for Each Student.
    4- Find the Top Scoring Student in Chemistry.
    5- List All Unique Extracurricular Activities.
    6- Check if All Students are in the '11th' Grade.
    7- Find a Student by ID.
    8- Sort Students by Age.
    9- List Students with No Extracurricular Activities.
    10- Remove a Student by ID.
  */

//  1- Get a List of Student Names.
const studentNames = [];
for (stud of students) {
    studentNames.push(stud.name);
}
console.log("All students names: " , studentNames);

//2- Find Students with Scores Above 90 in Math.
const student90Scores = [];
for (studScore of students) {
    if(studScore.scores.Math>90)
        {
            student90Scores.push(studScore.name);
        }
}
console.log("Students scores 90+ in Maths: ", student90Scores);

// 3- Calculate Average Score for Each Student.
const averageScore = [];
for (student of students) {
    const subjectTotalScores = Object.values(student.scores);
    let sum = 0;
    for (let i = 0; i < subjectTotalScores.length; i++) {
    sum += subjectTotalScores[i];
    }
    avg = parseInt(sum / subjectTotalScores.length) ;
    averageScore.push({name: student.name , averageScore: avg})
}
console.log("Average Students scores: ", averageScore);

// 4- Find the Top Scoring Student in Chemistry.
let topChemistryScorer = students[0];
for (const student of students) 
    {
        if (student.scores.Chemistry > topChemistryScorer.scores.Chemistry) 
            {
                topChemistryScorer = student;
            }
}
console.log("Top student in Chemistry is: ",topChemistryScorer.name);

//5- List All Unique Extracurricular Activities.
const allExtracurriculars = [];

students.forEach(student => {
    student.extracurriculars.forEach(activity => {
        if (!allExtracurriculars.includes(activity)) {
            allExtracurriculars.push(activity);
        }
    });
});

console.log(allExtracurriculars);


//6- Check if All Students are in the '11th' Grade
let allIn11thGrade = true;
function is11thGrade()
{
    for (const student of students) {
        if (student.grade !== '11th') {
            allIn11thGrade = false;
            return "No not all in first grade";
        }
    }
    return "there're all in 11th grade"
}
console.log(is11thGrade(students));

// 7. Find a Student by ID
function find(id)
{
    for (const student of students) 
        {
            if (student.id === id) { // Replace 3 with the desired ID
                return "Student's name is: " + student.name;
            }
        }
        return "There's no Student with this ID"
}
console.log(find(3));


// 8- Sort Students by Age
console.log(students.sort((a, b) => a.age - b.age));

// 9- List Students with No Extracurricular Activities.
const studentsWithNoExtracurriculars = [];
for (const student of students) {
    if (student.extracurriculars.length === 0) 
        {
            studentsWithNoExtracurriculars.push(student);
        }
}

// 10- Remove a Student by ID.

function deletebyID(ID){
    const studentCopy = students;
    for (const [index,student] of studentCopy.entries()) {
        if (student.id === ID) 
            {
                delete studentCopy[index]
                return students;
            }
    }
    return "There's no ID like that";
}
console.log(deletebyID(2));


/*-------------------------------------------------------------------------*/

const aliFile = { name: "Ali Selem", bdate: 1990, scores: [95, 90, 98]};
const saraFile = { name: "Sara MAhdy", bdate: 2000, scores: [98, 80, 85]};
const emadFile = { name: "Emad Hany", bdate: 1985, scores: [70, 91, 88] };
const yaraFile = { name: "Yara Sedeek", bdate: 2005, scores: [60, 82, 98] };

/* Problem 3 
    1- create 1 function to greet student with his name
    2- create 1 function to calc age 
    3- create 1 function to calc total score  
    4- create 1 function to calc avg for all students
*/

// 1- create 1 function to greet student with his name
function greet(){
    return `Hello ${this.name}`;
}
console.log(greet.call(aliFile));

//2- create 1 function to calc age
function calcAge()
{
    const Year = new Date().getFullYear();
    return Year - this.bdate;
}
console.log(calcAge.call(saraFile));

// 3- create 1 function to calc total score  
function sumScore() {
    return this.scores.reduce((sum, score) => sum + score, 0);
}
console.log(sumScore.call(emadFile)); 


//4- create 1 function to calc avg for all students
function avgScore(){
    sum = sumScore.call(this);
    return Math.floor(sum / this.scores.length); 
}
console.log(avgScore.call(yaraFile));