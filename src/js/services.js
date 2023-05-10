'use strict'

import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])

const mediaQuery = '(max-width: 768px)'
const mediaQueryList = window.matchMedia(mediaQuery)
const checkSwiper = document.querySelector('.brands__swiper')
let brandsSwiper
let equipmentSwiper
let pricesSwiper

function mobileservices() {
  if (mediaQueryList.matches) {
    brandsSwiper = new Swiper('.brands__swiper', {
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

    equipmentSwiper = new Swiper('.equipment__swiper', {
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

    pricesSwiper = new Swiper('.prices__swiper', {
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
  } else if (checkSwiper.classList.contains('swiper-initialized')) {
    {
      brandsSwiper.destroy()
      equipmentSwiper.destroy()
      pricesSwiper.destroy()
    }
  }
}


mobileservices()
mediaQueryList.addEventListener('change', mobileservices)
