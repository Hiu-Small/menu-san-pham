// Khi trang được tải lại, cuộn về đầu trang
window.onload = function () {
  window.scrollTo(0, 0);
};

const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links li a");

function toggleMenu() {
  navLinks.classList.toggle("active");
}

function removeMenu() {
  navLinks.classList.remove("active");
}

menuIcon.addEventListener("click", toggleMenu());

navItems.forEach((item) => {
  item.addEventListener("click", removeMenu);
});
