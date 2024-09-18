const productsParent = document.querySelector(".our-products .products");
// const products = document.querySelectorAll(".products .product");
// console.log(productsParent);
// console.log(products);

// const products = productsParent.querySelectorAll(".product");
// console.log(products);

// const products = [...productsParent.children];

// products.forEach(element => {
//     console.log(element);
//   });

// for (let product of products) {
//   console.log(product);
// }

// console.log(products);
// products.map

// const productsNodes = [...productsParent.childNodes];

// console.log(products);
// console.log(productsNodes);

// productsNodes.forEach(ele => {
//   console.log(ele);
// });

// console.log(productsNodes);

const products = productsParent.children;

const [prod1, prod2, ...res] = products;
// console.log(products);
console.log(prod1);
prod1.style.backgroundColor = "red";
prod2.style.backgroundColor = "green";
console.log(prod2);
console.log(res);

res.map(prod => (prod.style.backgroundColor = "yellow"));
