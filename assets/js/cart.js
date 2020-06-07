var cartBtns = document.querySelectorAll(".my-cart");
var cartCloseBtn = itemsModal.querySelector(".close");
var tableBody = itemsModal.querySelector("tbody");
var tableFooter = itemsModal.querySelector("tfoot");
var clearCartButton = itemsModal.querySelector(".btn-red-outline");
var grandTotal = 0;


cartBtns.forEach(function (cartBtn) {
  cartBtn.addEventListener("click", function () {
    darkOverlayModal.classList.add("active");
    itemsModal.classList.add("active");
    document.body.classList.add("inactive");
  });
});

cartCloseBtn.addEventListener("click", function () {
  itemsModal.classList.remove("active");
  body.classList.remove("inactive");
  darkOverlayModal.classList.remove("active");
});

clearCartButton.addEventListener("click", function () {
  cartItems = [];
  cart();
  changeCartcountNumber();
  cartCountUpdater();
});

function cart() {
  tableBody.innerHTML = "";
  tableFooter.innerHTML = "";

  cartItems.forEach(function (cartItem) {
    grandTotal += cartItem.amount;
  })

  cartItems.forEach(function (cartItem) {
    console.log(cartItem)
    var cartItemsEl = document.createElement("tr");
    cartItemsEl.innerHTML = `
    <td>${cartItem.name}</td>
    <td>Rs. ${cartItem.price}/-</td>
    <td>${cartItem.quantity}</td>
    <td>Rs. ${cartItem.amount}/-</td>
    `;

    tableBody.appendChild(cartItemsEl);
    tableFooter.innerHTML = "Shipping Cost: Rs. 0/- <br> Grand Total: Rs. " + grandTotal + "/-";
  });
}
