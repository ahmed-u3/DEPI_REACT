// function sum() {}

// console.log(sum());

let sum = (a = 0, b = 0) => {
  return a + b;
};

console.log(sum());
console.log(sum(20, 25));

let sayHi = () => "hiiiiiiii";

console.log(sayHi());
