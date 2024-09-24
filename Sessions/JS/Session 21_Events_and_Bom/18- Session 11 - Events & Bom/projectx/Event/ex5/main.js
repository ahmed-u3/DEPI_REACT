const productsParent = document.querySelector(".products");

productsParent.addEventListener("click", e => {
  if (e.target.matches("button")) {
    document
      .querySelectorAll(".product")
      .forEach(product => (product.style.backgroundColor = "bisque"));
    console.log(e.target);
    e.target.closest(".product").style.backgroundColor = "red";
  }
});
