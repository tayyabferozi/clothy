var body = document.body;
var cards = document.querySelectorAll(".card");
var modal = document.querySelector(".cart-modal");
var itemsModal = document.querySelector(".items-modal");
var darkOverlayModal = document.querySelector(".dark-overlay-modal");
var addToCartButton = modal.querySelector("button");
var modalCloseButton = modal.querySelector(".close");
var quantity = modal.querySelector("input[type='number']");
var cartCountNumber = 0;
var cartItems = [];
var currentItem;

// Updates the amount of item and quantity (cartcountnumber)

function changeCartcountNumber() {
  cartCountNumber = 0;
  cartItems.forEach(function (item) {
    cartCountNumber += item.quantity;
  });
}

function quantityChangeHandler() {
  currentItem.quantity = +quantity.value
  currentItem.amount = currentItem.quantity * currentItem.price;
  modalOpener(currentItem);
}

// Opens the model and fills name, price and amount in the modal

function modalOpener(currentItem) {
  var itemNameEl = modal.querySelector(".name-holder");
  var itemPriceEl = modal.querySelector(".price-holder");
  var itemAmountEl = modal.querySelector(".amount-holder");

  itemNameEl.textContent = currentItem.name;
  itemPriceEl.textContent = currentItem.price;
  itemAmountEl.textContent = currentItem.amount;

  modal.classList.add("active");
}

// Updates the item numbers in the DOM cart in the top and side nav

function cartCountUpdater() {
  var cartCountEls = document.querySelectorAll(".cart-count");
  cartCountEls.forEach(function (cartCountEl) {
    cartCountEl.classList.add("animated", "bounce");
    cartCountEl.textContent = cartCountNumber;
    setTimeout(function () {
      cartCountEl.classList.remove("animated", "bounce");
    }, 1000);
  });
}

// resets the value of input every time its called

function resetInput() {
  quantity.value = 1;
}

// retrieves the info of the item whenever it is clicked and saves it a temporary object

function getCardInfo(el) {
  currentItem = {
    name: el.querySelector(".name").textContent,
    price: +el.querySelector(".price").textContent,
    amount: 0
  }

  quantityChangeHandler();
}

// Adds the item to the itemlist and empties the current item

function addToCart() {
  cartItems.push(currentItem);
  currentItem = {};
}

// All The Event Handlers Down Here

cards.forEach(function (card) {
  card.addEventListener("click", function () {
    getCardInfo(this);
    modalOpener(currentItem);
    darkOverlayModal.classList.add("active");
    body.classList.add("inactive");
  });
});

darkOverlayModal.addEventListener("click", function () {
  darkOverlayModal.classList.remove("active");
  modal.classList.remove("active");
  itemsModal.classList.remove("active");
  body.classList.remove("inactive");
  resetInput();
});

addToCartButton.addEventListener("click", function () {
  modal.classList.remove("active");
  darkOverlayModal.classList.remove("active");
  body.classList.remove("inactive");
  resetInput();
  addToCart();
  changeCartcountNumber();
  cartCountUpdater();
  cart();
});

modalCloseButton.addEventListener("click", function () {
  modal.classList.remove("active");
  darkOverlayModal.classList.remove("active");
  body.classList.remove("inactive");
  resetInput();
});

quantity.addEventListener("input", quantityChangeHandler);

cartCountUpdater();