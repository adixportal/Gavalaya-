console.log("Galavaya shop loaded");function addToCart(){
  let product = {
    id: 1,
    name: "Hand Embroidered Silk Saree",
    price: 18500,
    qty: document.getElementById("qty").value
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart");
}
