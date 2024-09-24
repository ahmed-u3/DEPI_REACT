const level1 = document.querySelector(".level1");
const level2 = document.querySelector(".level2");
const level3 = document.querySelector(".level3");
const level4 = document.querySelector(".level4");
const body = document.body;
const html = document.documentElement;

// bubbling
level1.addEventListener("click", e => {
  e.stopPropagation();
  getDivName("bubbling ==> black");
});
level2.addEventListener("click", e => {
  e.stopPropagation();
  getDivName("bubbling ==> red");
});
level3.addEventListener("click", e => {
  e.stopPropagation();
  getDivName("bubbling ==> green");
});
level4.addEventListener("click", e => {
  e.stopPropagation();
  getDivName("bubbling ==> blue");
});

function getDivName(name) {
  console.log(name);
}
