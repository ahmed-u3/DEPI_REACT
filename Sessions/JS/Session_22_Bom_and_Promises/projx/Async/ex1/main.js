// sync code
// console.log(1);
// console.log(2);
// console.log(3);

// console.time("arr");
// const arr = Array.from({ length: 10000000 }, (v, k) => k + 1);
// console.log(arr);
// console.timeEnd("arr");

// console.log(4);
// console.log(5);

// async code
console.log(1);
console.log(2);
console.log(3);

let username;

setTimeout(() => {
  username = "ali";
  console.log("timeout===>", username);
}, 1000);

console.log(4);
console.log(5);

console.log(username);
