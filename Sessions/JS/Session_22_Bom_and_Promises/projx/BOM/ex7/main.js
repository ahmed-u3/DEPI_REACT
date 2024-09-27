const exDate = new Date(2024, 8, 23, 20, 10, 0).toUTCString();

const students = ["ali", "hend", "ammar", "nagy"];
setCookie("name", "Hala", exDate);
setCookie("students", students, exDate);
setCookie("age", 18, exDate);

delCookie("students");

console.log(getCookie("students"));
console.log(getCookie("name"));
console.log(getCookie("age"));

function setCookie(key, value, exDate, path = "/") {
  const sfyValue = JSON.stringify(value);
  document.cookie = `${key}=${sfyValue}; expires=${exDate}; path=${path}`;
  return true;
}

function getCookie(key) {
  const data = document.cookie?.split(`${key}=`)[1]?.split(";")[0];
  if (!data) return `${key}, not found in browser cookie`;
  return JSON.parse(data);
}

function delCookie(key) {
  const exDate = new Date(2000, 8, 23, 20, 10, 0).toUTCString();
  document.cookie = `${key}=; expires=${exDate}; path=/`;
  return true;
}

console.log(document.cookie);
