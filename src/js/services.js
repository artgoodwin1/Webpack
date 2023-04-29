"use strict"

import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use ([Navigation, Pagination])


const mediaQuery = "(max-width: 768px)";
const mediaQueryList = window.matchMedia(mediaQuery);
const servicesSwiper = document.querySelector(".services__swiper");
let mySwiper;
let mySwiper2;

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


        mySwiper2 = new Swiper(".swiper2", {
            direction: "horizontal",
            loop: true,
            speed: 500,
            effect: "slider",
            slidesPerView: "auto",
            spaceBetween: 15,
            wrapperClass: "services2__wrapper",
            slideClass: "services2__item",
            modules: [Navigation, Pagination],

            pagination: {
                el: ".services2__pagination",
                clickable: true,
                
            },

            navigation: {
                nextEl: ".services2__button",
                prevEl: ".swiper-button-prev",
            },
        });
    } else if (servicesSwiper.classList.contains("swiper-initialized")) {
        {
            mySwiper.destroy();
            mySwiper2.destroy();
        }
    }
}

const servicesWrapper = document.querySelector(".services__wrapper");
const servicesWrapper2 = document.querySelector(".services2__wrapper");
const buttonDetails = document.querySelector(".button-details");
const buttonDetails2 = document.querySelector(".services2 .button-details");


buttonDetails.onclick = function () {
    servicesWrapper.classList.toggle("services__wrapper--extended");
    buttonDetails.classList.toggle("button-details--open");
    

    if (servicesWrapper.classList.contains("services__wrapper--extended")) {
        buttonDetails.textContent = "Скрыть";
    } else {
        buttonDetails.textContent = "Показать всё";
    }
};

buttonDetails2.onclick = function () {
    servicesWrapper2.classList.toggle("services__wrapper--extended");
    buttonDetails2.classList.toggle("button-details--open");
    

    if (servicesWrapper2.classList.contains("services__wrapper--extended")) {
        buttonDetails2.textContent = "Скрыть";
    } else {
        buttonDetails2.textContent = "Показать всё";
    }
};

mobileservices();
mediaQueryList.addEventListener("change", mobileservices);