const level1 = document.querySelector(".level1");
const level2 = document.querySelector(".level2");
const level3 = document.querySelector(".level3");
const level4 = document.querySelector(".level4");

level1.addEventListener("click", () => getDivName("black"));
level2.addEventListener("click", () => getDivName("red"));
level3.addEventListener("click", () => getDivName("green"));
level4.addEventListener("click", () => getDivName("blue"));

function getDivName(name) {
  console.log(name);
}
