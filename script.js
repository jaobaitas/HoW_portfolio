const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".navlist");

menuToggle.addEventListener("click", function () {
  this.classList.toggle("menu-open");
  navList.classList.toggle("show");
});
