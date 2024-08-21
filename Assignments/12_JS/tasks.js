
// First Task
function firstChar(str) {
    return str.charAt(0);
}

console.log("First Task:" , firstChar("Hello"));

// Second Task
function removeSpace(str){
    return str.split(' ').join('');
}

console.log("Second Task:",removeSpace("Hello World"));

//Third Task
function sum(a,b){
    return a + b;
}
console.log("Third Task:",sum(3,5));

// Fourth Task
function shortenIfTooLong(sentence) {
    if (sentence.length > 19) {
        return sentence.slice(0, 19) + "... read more";
    }
    return sentence;
}
console.log("Fourth Task:",shortenIfTooLong("This is a long sentence."));
console.log("Fourth Task:",shortenIfTooLong("Short sentence"));
// Fifth Task
function square(num) {
    return num * num;
}
console.log("Fifth Task:",square(4));

// Sixth Task
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log("Sixth Task:",reverseString("hello"));

// Seventh Task
const stringLength = (str) => {
    // Write the function her
    return str.length;
}
console.log("Seventh Task:",stringLength("Hello"));

// Eighth Task
const maxNumber = (a, b) => {
    return a > b ? a : b;
}
console.log("Eighth Task:",maxNumber(3, 9));

// Ninth Task

function double(num) {
    return num * 2;
}

console.log("Ninth Task:",double(4));


// Tenth Task
let globalNum = 5;
function sumWithGlobal(num) {
    let localNum = num;
    return globalNum + localNum;
}
console.log("Tenth Task:",sumWithGlobal(3));

function hoistingFunctionExample() {
    // Print the value before initialization
    console.log(myVar);
    var myVar = "Hoisted";
    // Print the value after initialization
    console.log(myVar);
}
hoistingFunctionExample();
