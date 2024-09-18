const products = [
  { id: 1, name: "Product 1", price: 100, rating: 3.5 },
  { id: 2, name: "Product 2", price: 200, rating: 4.5 },
  { id: 3, name: "Product 3", price: 300, rating: 5 },
  { id: 4, name: "Product 4", price: 400, rating: 3.4 },
  { id: 5, name: "Product 5", price: 500, rating: 3.6 },
  { id: 6, name: "Product 6", price: 600, rating: 2.4 },
];

/**
 * <div class="product">
        <h4>name</h4>
        <p>price</p>
        <p>rating</p>
      </div>
 */

// const body = document.body;
// const productsDiv = document.querySelector(".products");

// const h2 = document.createElement("h2");
// h2.textContent = "h2222222222222222222222";
// h2.classList = "h222";

// productsDiv.append(h2);

const productsDiv = document.querySelector(".products");

products.map(product => {
  const { name, price, rating } = product;
  productsDiv.innerHTML += `
      <div class="product">
        <h4>${name}</h4>
        <p>${price}</p>
        <p>${rating}</p>
      </div>
  `;
});
