const form = document.querySelector(".form");

form.addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const username = formData.get("un");
  localStorage.setItem("username", username);
  const getUserName = localStorage.getItem("username");
  console.log(getUserName);
});

const getUserName = localStorage.getItem("username");
console.log(getUserName);
