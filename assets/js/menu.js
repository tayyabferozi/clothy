//////////////////////////////// Side Bar ///////////////////////////////////

var sideNav = document.querySelector(".side-nav");
var darkOverlay = document.querySelector(".dark-overlay");

(function showNav() {
  var menu = document.querySelector(".hamburger");
  menu.addEventListener("click", function () {
    document.body.classList.toggle("inactive");
    menu.classList.toggle("active");
    sideNav.classList.toggle("active");
    darkOverlay.classList.toggle("active");
  });

  darkOverlay.addEventListener("click", function () {
    document.body.classList.toggle("inactive");
    menu.classList.toggle("active");
    sideNav.classList.toggle("active");
    darkOverlay.classList.toggle("active");
  })
})();