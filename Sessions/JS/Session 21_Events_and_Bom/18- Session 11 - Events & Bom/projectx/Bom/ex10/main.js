// const test = setInterval(() => {
//   console.log("jdjkfjd");
// }, 1000);
// console.log(test);

const counter = document.querySelector(".counter");
const [ctr, inc, reset, dec] = counter.children;

let incID;
let decID;

inc.addEventListener("click", () => {
  clearInterval(decID);
  clearInterval(incID);
  incID = setInterval(() => {
    ctr.textContent++;
  }, 1000);
});

reset.addEventListener("click", () => {
  clearInterval(incID);
  clearInterval(decID);
  ctr.textContent = 0;
});

dec.addEventListener("click", () => {
  clearInterval(incID);
  clearInterval(decID);
  decID = setInterval(() => {
    ctr.textContent--;
  }, 1000);
});
