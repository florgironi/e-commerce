const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamburguesa = document.querySelector(".menu");
const mobileMenu = document.querySelector(".wraper-menu")


menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamburguesa.addEventListener("click", toggleMobileMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}

