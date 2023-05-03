"use strict"



const headerBurger = document.querySelector('.header__burger');
const burgerButton = document.querySelector('.burger__button');
const burgerMenu = document.querySelector('.burger');


headerBurger.onclick = function() {
    burgerMenu.classList.remove('hidden');
}
burgerButton.onclick = function() {
    burgerMenu.classList.add('hidden');
}
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        burgerMenu.classList.add('hidden');
    }
  });