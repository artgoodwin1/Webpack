'use strict'

import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])

const mediaQuery = '(max-width: 768px)'
const mediaQueryList = window.matchMedia(mediaQuery)
const brandsSwiper = document.querySelector('.brands__swiper')
let mySwiper
let mySwiper2
let mySwiper3

function mobileservices() {
  if (mediaQueryList.matches) {
    mySwiper = new Swiper('.brands__swiper', {
      direction: 'horizontal',
      loop: true,
      
      effect: 'slider',
      slidesPerView: 'auto',
      spaceBetween: 15,
      wrapperClass: 'brands__wrapper',
      slideClass: 'brands__item',
      modules: [Navigation, Pagination],

      pagination: {
        el: '.brands__pagination',
        clickable: true
      },

      navigation: {
        nextEl: '.brands__button',
        prevEl: '.swiper-button-prev'
      }
    })

    mySwiper2 = new Swiper('.equipment__swiper', {
      direction: 'horizontal',
      loop: true,
      
      effect: 'slider',
      slidesPerView: 'auto',
      spaceBetween: 15,
      wrapperClass: 'equipment__wrapper',
      slideClass: 'equipment__item',
      modules: [Navigation, Pagination],

      pagination: {
        el: '.equipment__pagination',
        clickable: true
      },

      navigation: {
        nextEl: '.equipment__button',
        prevEl: '.swiper-button-prev'
      }
    })

    mySwiper3 = new Swiper('.prices__swiper', {
        direction: 'horizontal',
        loop: true,
        
        effect: 'slider',
        slidesPerView: 'auto',
        spaceBetween: 15,
        wrapperClass: 'prices__wrapper',
        slideClass: 'prices__item',
        modules: [Navigation, Pagination],
  
        pagination: {
          el: '.prices__pagination',
          clickable: true
        },
  
        navigation: {
          nextEl: '.prices__button',
          prevEl: '.swiper-button-prev'
        }
      })
  } else if (brandsSwiper.classList.contains('swiper-initialized')) {
    {
      mySwiper.destroy()
      mySwiper2.destroy()
      mySwiper3.destroy()
    }
  }
}

const brandsWrapper = document.querySelector('.brands__wrapper')
const equipmentWrapper = document.querySelector('.equipment__wrapper')
const brandsButtonDetails = document.querySelector('.brands .button-details')
const equipmentButtonDetails = document.querySelector(
  '.equipment .button-details'
)

brandsButtonDetails.onclick = function () {
  brandsWrapper.classList.toggle('brands__wrapper--extended')
  brandsButtonDetails.classList.toggle('button-details--open')

  if (brandsWrapper.classList.contains('brands__wrapper--extended')) {
    brandsButtonDetails.textContent = 'Скрыть'
  } else {
    brandsButtonDetails.textContent = 'Показать всё'
  }
}

equipmentButtonDetails.onclick = function () {
  equipmentWrapper.classList.toggle('brands__wrapper--extended')
  equipmentButtonDetails.classList.toggle('button-details--open')

  if (equipmentWrapper.classList.contains('brands__wrapper--extended')) {
    equipmentButtonDetails.textContent = 'Скрыть'
  } else {
    equipmentButtonDetails.textContent = 'Показать всё'
  }
}




// modal








mobileservices()
mediaQueryList.addEventListener('change', mobileservices)
