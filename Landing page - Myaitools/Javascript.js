document.querySelector(".navbar-menu").addEventListener("click", animatenavbar);

var line1__navbar = document.querySelector(".line1__navbar-menu");
var line2__navbar = document.querySelector(".line2__navbar-menu");
var line3__navbar = document.querySelector(".line3__navbar-menu"); 
var container__menu = document.querySelector(".menu__mobile");

function animatenavbar(){
    line1__navbar.classList.toggle("activeline1__navbar-menu");
    line2__navbar.classList.toggle("activeline2__navbar-menu");
    line3__navbar.classList.toggle("activeline3__navbar-menu");

    container__menu.classList.toggle(".activemenu__mobile");
}

let menu = document.getElementById ('menu');
let menuMobile = document.querySelector ('.menu__mobile');

function menuHamburguesa() {
    if (menuMobile.className === 'menu__mobile inactive') {
        menuMobile.classList.remove ('inactive');
        menuMobile.classList.add ('active');
    } else if (menuMobile.className === 'menu__mobile active') {
        menuMobile.classList.remove ('active');
        menuMobile.classList.add ('inactive');
    }
}

console.log (menu);
console.log (menuMobile)

menu.addEventListener ('click', menuHamburguesa)