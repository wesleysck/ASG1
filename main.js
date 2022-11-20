const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

menu.addEventListener('click', function(){
    console.log('clicked');
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});