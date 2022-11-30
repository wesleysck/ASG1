// HAMBURGER MENU

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

menu.addEventListener('click', function(){
    console.log('clicked');
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// MENU BANNER EFFECT

var image = document.querySelector(".products-banner");

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function moveBackground(event){
    var mouseXposition = event.clientX;
    var mouseYposition = event.clientY;

    var calculatedX = mouseXposition / (windowWidth / 7);
    var calculatedY = mouseYposition / (windowHeight / 7);

    image.style.transform="translate(-"+calculatedX.toString()+"%,-"+calculatedY.toString()+"%)";


}

document.addEventListener("mousemove", moveBackground)