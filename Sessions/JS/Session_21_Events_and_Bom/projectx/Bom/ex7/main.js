console.log(history);

const ctrl = document.querySelector(".ctrl");
const [next, prev] = ctrl.children;

next.addEventListener("click", () => {
  history.forward();
});

prev.addEventListener("click", () => {
  history.back();
});
