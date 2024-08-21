// let x; //undefined ==>  false
// let x = null; // false
// let x = 0; // false
// let x = "";

// console.log(x);

// if (x) {
//   console.log("true value");
// } else {
//   console.log("false value");
// }

let n = "z123";
console.log(n);
console.log(typeof n);

let isNum = parseInt(n);

console.log(isNum);

let url = "https://www.x.com/user?id=5f421";

let id = url.split("user?id=")[1];

// if (parseInt(id)) {
//   console.log("user profile");
// } else {
//   console.log("Error");
// }
// if (Number(id)) {
//   console.log("user profile");
// } else {
//   console.log("Error");
// }
// console.log(id);

// let username = "Heba";
let username = 5;

if (username) {
  console.log("hello");
} else {
  console.log("error");
}
