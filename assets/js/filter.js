var menTabs = document.querySelectorAll(".men-tab");
var womenTabs = document.querySelectorAll(".women-tab");
var kidsTabs = document.querySelectorAll(".kids-tab");

function filter(filterName) {
  var allItems = document.querySelectorAll(".card");
  var allTabs = document.querySelectorAll(".categories h3");
  allTabs.forEach(function (tab) {
    var span = tab.querySelector("span");
    span.classList.remove("selected");
  })
  var menu = document.querySelector(".hamburger");
  var sideNav = document.querySelector(".side-nav");
  var darkOverlay = document.querySelector(".dark-overlay");
  allItems.forEach(function (item) {
    item.classList.remove("active");
    item.classList.add("inactive");
  });
  var filteredItems = document.querySelectorAll("." + filterName);
  var i = 0;
  var span = this.querySelector("span");
  span.classList.add("selected");
  filteredItems.forEach(function (filteredItem) {
    filteredItem.classList.remove("inactive");
    filteredItem.classList.add("active");
    menu.classList.remove("active");
    sideNav.classList.remove("active");
    darkOverlay.classList.remove("active");
    document.body.classList.remove("inactive");
    i++;
  });
}

menTabs.forEach(function (menTab) {
  menTab.addEventListener("click", filter.bind(menTab, "men"));
});

womenTabs.forEach(function (womenTab) {
  womenTab.addEventListener("click", filter.bind(womenTab, "women"));
});

kidsTabs.forEach(function (kidsTab) {
  kidsTab.addEventListener("click", filter.bind(kidsTab, "kids"));
});

menTabs[1].click();
menTabs[0].click();
