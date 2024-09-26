import movies from "./data.js";

const productsContainer = document.querySelector(".products-container");
movies.map(movie => {
    const { name, price, rating,id } = movie;
    const nameUrl = name.split(" ").join("-");

    // Create elements for the product
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
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

    const prodArray = [imageElement,nameElement , priceElement , stars , btn]

    productDiv.append(...prodArray)
        // Create the anchor element
    const productLink = document.createElement("a");
    productLink.href = `./pages/products.html?id=${id}&prod=${nameUrl}`;
    
    productLink.append(productDiv);
    
    productsContainer.append(productLink);
});
