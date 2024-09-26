import productsDB from "../utils/productsDB.js";

const pageUrl = new URL(location.href);
const productID = pageUrl.searchParams.get("id");
// console.log(productID);

const product = productsDB.find(prod => prod.id === productID);
console.log(pageUrl.href);
console.log(product);

const productSection = document.querySelector(".product");
console.log(product);
// const { name, price, brand } = product;

productSection.innerHTML = `
    <h2>${product.name}</h2>
      <h4>${product.brand}</h4>
      <p>${product.price}</p>
      <p>test</p>
`;

// console.log(product);
