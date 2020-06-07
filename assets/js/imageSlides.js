window.addEventListener("load", function () {

  var landingTransitionCount = 0;

  // setTimeout(function () {

  //////////////////////////////// Landing Page Animations /////////////////////////////////

  (function landingTransitions() {
    var imgWrap = document.querySelectorAll(".landing-img");
    var rhAnchor = document.querySelector(".landing-content a");
    var nAnchor = document.querySelectorAll(".landing-navbar a");

    rhAnchor.classList.remove("red");
    rhAnchor.classList.remove("yellow");
    rhAnchor.classList.remove("green");

    imgWrap.forEach(img => {
      img.classList.remove("active");
    });
    if (landingTransitionCount > imgWrap.length - 1) {
      landingTransitionCount = 0
    }
    nAnchor.forEach(function (anchor) {
      anchor.classList.remove("red");
      anchor.classList.remove("yellow");
      anchor.classList.remove("green");
      if (landingTransitionCount === 0) {
        anchor.classList.add("red");
      } else if (landingTransitionCount === 1) {
        anchor.classList.add("yellow");
      } else if (landingTransitionCount === 2) {
        anchor.classList.add("green");
      }
    });

    if (landingTransitionCount === 0) {
      rhAnchor.classList.add("red");
    } else if (landingTransitionCount === 1) {
      rhAnchor.classList.add("yellow");
    } else if (landingTransitionCount === 2) {
      rhAnchor.classList.add("green");
    }
    imgWrap[landingTransitionCount].classList.add("active");
    landingTransitionCount++;
    setTimeout(landingTransitions, 1500);
  })();
  // }, 500);


});

