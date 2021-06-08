const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".side-navbar");
const hamburgerContainer = document.querySelector(".hamburger-icon-container");

hamburgerIcon.addEventListener("click", ()=>{
    hamburgerMenu.classList.toggle("hamburger-menu-active");
    hamburgerIcon.classList.toggle("hamburger-animation");
    hamburgerContainer.classList.toggle("hamburger-active-border")
});