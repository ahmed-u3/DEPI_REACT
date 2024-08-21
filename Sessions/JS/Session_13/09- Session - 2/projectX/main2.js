console.log(sumNum(1000, 5000));

function sayHi() {
  console.log("hiiiiiiiiii");
}

sayHi();

console.log(sayHi());
// console.log(sayHi);

function sayHello() {
  return "Hello";
}

console.log(sayHello());

function sum() {
  let a = 5;
  let b = 7;

  console.log("Funntion", sayHello());

  return a + b;
}
console.log(sum());

function sumNum(a = 0, b = 0) {
  return a + b;
}

console.log(sumNum(5, 6));
console.log(sumNum(7, 10));

// console.log(z);
let z = 18;
