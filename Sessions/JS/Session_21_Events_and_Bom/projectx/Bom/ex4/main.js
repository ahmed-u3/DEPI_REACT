// console.log(location);
// console.log(location.href);
// // console.log(location.href);
// console.log(location.href.split("id="));
// console.log(location.pathname);
// console.log(location.hash);

const url = new URL(location.href);

const id = url.searchParams.get("id");
const limit = url.searchParams.get("limit");

console.log(id);
console.log(limit);

// const msgInpt = document.querySelector(".send-title");
// const title = document.querySelector(".title");
// msgInpt.addEventListener("input", e => {
//   title.textContent = e.target.value;
// });
