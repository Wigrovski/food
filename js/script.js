const nav = document.querySelector(".hamburger-lines");
const menu = document.querySelector(".menu-items");
const container = document.querySelector(".navbar-container");

nav.addEventListener("click", () => {
    
    menu.classList.toggle("open");
    container.classList.toggle("visible");
    nav.classList.toggle("change")
});

