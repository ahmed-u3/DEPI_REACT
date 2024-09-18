const products = [
  { id: 1, name: "Product 1", price: 100, rating: 3.5 },
  { id: 2, name: "Product 2", price: 200, rating: 4.5 },
  { id: 3, name: "Product 3", price: 300, rating: 5 },
  { id: 4, name: "Product 4", price: 400, rating: 3.4 },
  { id: 5, name: "Product 5", price: 500, rating: 3.6 },
  { id: 6, name: "Product 6", price: 600, rating: 2.4 },
];

console.log(products);

/**
 <div class="product">
            <h4>Name</h4>
            <p>price</p>
            <p>⭐</p>
          </div>
 */

/**
 *
 * <div class="product"> </div>
 * <h4> name </h4>
 */

function renderProduct() {
  const productsParent = document.querySelector(".our-products .products");

  products.map(product => {
    const { name, price, rating } = product;

    const formattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const stars = "⭐".repeat(Math.round(rating));

    const productDiv = document.createElement("div");
    productDiv.classList = "product";

    const h4 = document.createElement("h4");
    h4.textContent = name;

    const priceP = document.createElement("p");
    priceP.textContent = formattedPrice.format(price);

    const ratingP = document.createElement("p");
    ratingP.textContent = stars;

    // productDiv.append(h4);
    // productDiv.append(priceP);
    productDiv.append(h4, priceP, ratingP);

    productsParent.append(productDiv);
  });
}

renderProduct();
