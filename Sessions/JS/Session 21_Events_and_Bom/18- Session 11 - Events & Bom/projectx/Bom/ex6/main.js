const googleBTN = document.querySelector(".go");
const youtubeBTN = document.querySelector(".yo");
const refrshBTN = document.querySelector(".ref");
const openBTN = document.querySelector(".open");
const closeBTN = document.querySelector(".close");

// console.log(googleBTN);
// console.log(youtubeBTN);

googleBTN.addEventListener("click", () => {
  location.href = "https://www.google.com";
});

youtubeBTN.addEventListener("click", () => {
  location.replace("https://www.youtube.com");
});

refrshBTN.addEventListener("click", () => {
  location.reload();
});

openBTN.addEventListener("click", () => {
  window.open("http://127.0.0.1:60406/Bom/ex6/");
});

closeBTN.addEventListener("click", () => {
  window.close();
});
