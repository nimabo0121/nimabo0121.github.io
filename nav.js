window.onscroll = function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 950) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
};