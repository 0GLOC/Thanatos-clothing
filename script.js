//Navbar toggle

const menu = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");
const closeMenu = document.getElementById("close-menu");

menu.addEventListener("click", () => {
    navbar.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    navbar.classList.remove("active");
});