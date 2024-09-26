import movies from "./data.js";

const pageUrl = new URL(location.href);
const productID = pageUrl.searchParams.get("id");
console.log(productID)
const product = movies.find(prod => prod.id === Number(productID));

const productSession = document.querySelector(".product");

const { name, price, rating,id } = product;

// Create elements for the product
const nameElement = document.createElement("h2");
nameElement.textContent = name;

const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

const priceElement = document.createElement("p");
priceElement.textContent = formattedPrice.format(price);
const stars = "⭐".repeat(Math.round(rating));

const btn = document.createElement("button");
btn.textContent = `Buy`;

const imageElement = document.createElement("img");
imageElement.src = `../assets/imgs/movie_${id}.jpg`;

const prodArray = [nameElement , priceElement , stars , btn]

// Create elements for the product
const textproductDiv = document.createElement("div");
textproductDiv.classList.add("text");

textproductDiv.append(...prodArray)

productSession.append(imageElement , textproductDiv);
