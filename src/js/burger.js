"use strict"

const burgerFocus = document.querySelector(".burger__search")  //

const headerBurger = document.querySelector('.header__burger');
const burgerButton = document.querySelector('.burger__button');
const burgerMenu = document.querySelector('.burger');

function removeHidden() {
    burgerMenu.classList.remove('burger--hidden');
    burgerFocus.focus() //
}
function addHidden() {
    burgerMenu.classList.add('burger--hidden');
}
function escapeBurger(e) {
    if (e.key === "Escape") {
        burgerMenu.classList.add('burger--hidden');
    }
}

headerBurger.addEventListener('click', removeHidden)
burgerButton.addEventListener('click', addHidden)
window.addEventListener('keydown', escapeBurger)