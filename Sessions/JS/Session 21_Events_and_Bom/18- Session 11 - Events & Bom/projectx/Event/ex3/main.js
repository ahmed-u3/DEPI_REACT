const level1 = document.querySelector(".level1");
const level2 = document.querySelector(".level2");
const level3 = document.querySelector(".level3");
const level4 = document.querySelector(".level4");
const body = document.body;
const html = document.documentElement;

// bubbling
level1.addEventListener("click", () => getDivName("bubbling ==> black"));
level2.addEventListener("click", () => getDivName("bubbling ==> red"));
level3.addEventListener("click", () => getDivName("bubbling ==> green"));
level4.addEventListener("click", () => getDivName("bubbling ==> blue"));
body.addEventListener("click", () => getDivName("bubbling ==> body"));
html.addEventListener("click", () => getDivName("bubbling ==> html"));

// capturing
level1.addEventListener(
  "click",
  () => {
    getDivName("capturing ==> black");
  },
  { capture: true }
);
level2.addEventListener("click", () => getDivName("capturing ==> red"), {
  capture: true,
});
level3.addEventListener("click", () => getDivName("capturing ==> green"), {
  capture: true,
});
level4.addEventListener("click", () => getDivName("capturing ==> blue"), {
  capture: true,
});
body.addEventListener(
  "click",
  e => {
    e.stopPropagation();
    getDivName("capturing ==> body");
  },
  {
    capture: true,
  }
);
html.addEventListener("click", () => getDivName("capturing ==> html"), {
  capture: true,
});

function getDivName(name) {
  console.log(name);
}
