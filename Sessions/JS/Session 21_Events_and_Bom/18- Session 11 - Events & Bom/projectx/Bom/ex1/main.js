// console.log(window);
// console.log(window.innerHeight);
// console.log(window.innerWidth);

const title = document.querySelector(".title");

// window.addEventListener("resize", e => {
//   // console.log(window.innerHeight);
//   // console.log(window.innerWidth);
// });

window.addEventListener("resize", getSize);
window.addEventListener("DOMContentLoaded", getSize);

function getSize() {
  // console.log(title.classList);
  title.classList.forEach(cls => title.classList.remove(cls));
  if (window.innerWidth < 768) {
    title.textContent = "phone";
    title.classList.add("phone");
  } else if (window.innerWidth < 900) {
    title.textContent = "ipad";
    title.classList.add("ipad");
  } else {
    title.textContent = "computer";
    title.classList.add("computer");
  }
}
