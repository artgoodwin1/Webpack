const aboutText = document.querySelector('.about__text');
const aboutButton = document.querySelector('.about .button-details');

const brandsWrapper = document.querySelector('.brands__wrapper')
const equipmentWrapper = document.querySelector('.equipment__wrapper')

const brandsButtonDetails = document.querySelector('.brands .button-details')
const equipmentButtonDetails = document.querySelector(
  '.equipment .button-details'
)

function extendAbout() {
  aboutText.classList.toggle('brands__wrapper--extended')
  aboutButton.classList.toggle('button-details--open')

  if (aboutText.classList.contains('brands__wrapper--extended')) {
    aboutButton.textContent = 'Скрыть'
  } else {
    aboutButton.textContent = 'Читать далее'
  }
}

aboutButton.addEventListener('click', extendAbout)


function extendBrands() {
  brandsWrapper.classList.toggle('brands__wrapper--extended')
  brandsButtonDetails.classList.toggle('button-details--open')

  if (brandsWrapper.classList.contains('brands__wrapper--extended')) {
    brandsButtonDetails.textContent = 'Скрыть'
  } else {
    brandsButtonDetails.textContent = 'Показать всё'
  }
}

brandsButtonDetails.addEventListener('click', extendBrands)

function extendEquipment () {
  equipmentWrapper.classList.toggle('brands__wrapper--extended')
  equipmentButtonDetails.classList.toggle('button-details--open')

  if (equipmentWrapper.classList.contains('brands__wrapper--extended')) {
    equipmentButtonDetails.textContent = 'Скрыть'
  } else {
    equipmentButtonDetails.textContent = 'Показать всё'
  }
}

equipmentButtonDetails.addEventListener('click', extendEquipment)