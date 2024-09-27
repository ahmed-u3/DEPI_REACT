const productsDiv = document.querySelector(".products");

// fetch("https://fakestoreapi.com/products")
//   .then(res => res.json())
//   .then(data => renderProducts(data));

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  renderProducts(data);
}

getProducts();

function renderProducts(products) {
  products.map(prod => {
    const { image, description, title, price } = prod;
    console.log(prod);

    productsDiv.innerHTML += `
    <div class="product">
        <div class="img">
          <img src=${image} alt="" />
        </div>
        <div class="info">
          <h4>${title}</h4>
          <p>${description}</p>
          <p>${price}</p>
        </div>
      </div>
    `;
  });
}
