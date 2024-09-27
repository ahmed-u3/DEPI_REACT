const userName = "hend";
const students = ["ahmed", "ali", "ammar", "sara"];
const user = {
  name: "Hend",
  age: 18,
};

sessionStorage.setItem("username", userName);
sessionStorage.setItem("students", JSON.stringify(students));
sessionStorage.setItem("user", JSON.stringify(user));

// sessionStorage.removeItem("students");
// sessionStorage.clear();

console.log(sessionStorage.getItem("username"));
console.log(JSON.parse(sessionStorage.getItem("students")));
console.log(JSON.parse(sessionStorage.getItem("user")));
