"use strict"
let aboutText = document.querySelector('.about__text');
let aboutButton = document.querySelector('.about__button');

aboutButton.onclick = function() {
aboutText.classList.toggle('about__text--open');
}


let headerBurger = document.querySelector('.header__burger');
let burgerButton = document.querySelector('.burger__button');
let burgerMenu = document.querySelector('.burger');

headerBurger.onclick = function() {
    burgerMenu.classList.remove('hidden');
}
burgerButton.onclick = function() {
    burgerMenu.classList.add('hidden');
}