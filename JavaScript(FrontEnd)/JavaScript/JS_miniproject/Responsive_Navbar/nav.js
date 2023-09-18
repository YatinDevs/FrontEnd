const menuIcon = document.querySelector(".navbar-menu-icon");
const navbarLinks = document.querySelector(".navbar-links");

menuIcon.addEventListener("click", function () {
  navbarLinks.classList.toggle("active");
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 750) {
    navbarLinks.classList.remove("active");
  }
});
