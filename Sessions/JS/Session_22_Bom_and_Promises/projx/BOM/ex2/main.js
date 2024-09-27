const students = ["ahmed", "ali", "ammar", "sara"];

const user = {
  name: "Hend",
  age: 18,
};

// localStorage.setItem("students", students);
// localStorage.setItem("user", user);

// console.log(localStorage.getItem("students"));
// console.log(localStorage.getItem("user"));

localStorage.setItem("students", JSON.stringify(students));
localStorage.setItem("user", JSON.stringify(user));

// localStorage.removeItem("user");
// localStorage.removeItem("students");

// localStorage.clear();

console.log(JSON.parse(localStorage.getItem("students")));
console.log(JSON.parse(localStorage.getItem("user")));
