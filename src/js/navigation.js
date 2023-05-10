const navigationItems = document.querySelectorAll('.navigation__item')
const burgerItems = document.querySelectorAll('.burger__item')

function removeNavActive() {
  let elem = document.querySelector('.navigation__item--active')
  if(elem !== null) {
    elem.classList.remove('navigation__item--active')
  }
}

function removeBurgerActive() {
  let elem = document.querySelector('.burger__item--active')
  if(elem !== null) {
    elem.classList.remove('burger__item--active')
  }
}

for(let item of navigationItems) {
  item.addEventListener('click', () => {
    removeNavActive()
    item.classList.add('navigation__item--active')
  })
}

for(let item of burgerItems) {
  item.addEventListener('click', () => {
    removeBurgerActive()
    item.classList.add('burger__item--active')
  })
}