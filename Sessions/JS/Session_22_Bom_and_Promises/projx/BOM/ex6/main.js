const exDate = new Date(2024, 8, 23, 19, 55, 0).toUTCString();

document.cookie = `name=Ahmed; expires=${exDate}; path=/`;
document.cookie = `age=19; expires=${exDate}; path=/`;

console.log(document.cookie);
