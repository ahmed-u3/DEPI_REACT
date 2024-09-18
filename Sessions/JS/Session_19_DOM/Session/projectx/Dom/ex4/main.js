const products = [
  { id: 1, name: "Product 1", price: 100, rating: 3.5 },
  { id: 2, name: "Product 2", price: 200, rating: 4.5 },
  { id: 3, name: "Product 3", price: 300, rating: 5 },
  { id: 4, name: "Product 4", price: 400, rating: 3.4 },
  { id: 5, name: "Product 5", price: 500, rating: 3.6 },
  { id: 6, name: "Product 6", price: 600, rating: 2.4 },
];

const body = document.body;
const des = document.querySelector(".des");

const h2 = document.createElement("h2");
h2.textContent = "hello from other side";

const h4 = document.createElement("h4");
h4.textContent = "hello from other side h44444444";

// body.append(h2, h4);

// body.prepend(h4, h2);

body.insertBefore(h2, des);
body.insertBefore(h4, des);

const productsDiv = document.querySelector(".products");
