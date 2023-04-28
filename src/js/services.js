"use strict"

import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use ([Navigation, Pagination])


const mediaQuery = "(max-width: 768px)";
const mediaQueryList = window.matchMedia(mediaQuery);
const servicesSwiper = document.querySelector(".services__swiper");
let mySwiper;

function mobileservices() {
    if (mediaQueryList.matches) {
        mySwiper = new Swiper(".swiper", {
            direction: "horizontal",
            loop: true,
            speed: 500,
            effect: "slider",
            slidesPerView: "auto",
            spaceBetween: 15,
            wrapperClass: "services__wrapper",
            slideClass: "services__item",
            modules: [Navigation, Pagination],

            pagination: {
                el: ".services__pagination",
                clickable: true,
                
            },

            navigation: {
                nextEl: ".services__button",
                prevEl: ".swiper-button-prev",
            },
        });
    } else if (servicesSwiper.classList.contains("swiper-initialized")) {
        {
            mySwiper.destroy();
        }
    }
}

const servicesWrapper = document.querySelector(".services__wrapper");
const buttonDetails = document.querySelector(".button-details");


buttonDetails.onclick = function () {
    servicesWrapper.classList.toggle("services__wrapper--extended");
    buttonDetails.classList.toggle("button-details--open");
    

    if (servicesWrapper.classList.contains("services__wrapper--extended")) {
        buttonDetails.textContent = "Скрыть";
    } else {
        buttonDetails.textContent = "Показать всё";
    }
};

mobileservices();
mediaQueryList.addEventListener("change", mobileservices);