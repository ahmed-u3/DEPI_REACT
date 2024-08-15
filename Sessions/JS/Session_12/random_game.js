let randomNumber = Math.floor(Math.random() * 5) + 1;

let targetNumber = 4;

if (randomNumber === targetNumber) {
    console.log('Winner');
} else {
    console.log('Try again');
}
console.log(`Random Number: ${randomNumber}, Target Number: ${targetNumber}`);
