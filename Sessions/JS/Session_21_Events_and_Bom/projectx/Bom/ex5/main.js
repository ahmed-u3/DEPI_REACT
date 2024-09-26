import productsDB from "./utils/productsDB.js";
const productsParent = document.querySelector(".products");

productsDB.map(product => {
  const { name, price, id } = product;
  const nameUrl = name.split(" ").join("-");

  productsParent.innerHTML += `
   <div class="product">
        <h4>${name}</h4>
        <p>${price}</p>
        <a href="./pages/product.html?id=${id}&prod=${nameUrl}">more...</a>
      </div>
  `;
});
