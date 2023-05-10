const body = document.body;
const openOrdercallButtons = document.querySelectorAll(".open-ordercall-btn")
const modalOrdercall = document.querySelector("#modal-ordercall")
const ordercall = document.querySelector(".ordercall")
const closeOrdercallButton = document.querySelector(".ordercall .modal-close")
const modalFocus = document.querySelector(".prices__offer")
const afterOrdercallFocus = document.querySelector(".header__repair")


const openModalOrdercall = () => {
  modalOrdercall.classList.add("opened")
  body.classList.add("opening-modal")
  modalFocus.focus()
}
const closeModalOrdercall = () => {
  modalOrdercall.classList.remove("opened")
  body.classList.remove("opening-modal")
  afterOrdercallFocus.focus()
}

for(let openOrdercallButton of openOrdercallButtons){
openOrdercallButton.addEventListener("click", openModalOrdercall)
}

closeOrdercallButton.addEventListener("click", closeModalOrdercall)


const openFeedbackButtons = document.querySelectorAll(".open-feedback-btn")
const modalFeedback = document.querySelector("#modal-feedback")
const feedback = document.querySelector(".feedback")
const closeFeedbackButton = document.querySelector(".feedback .modal-close")

const openModalFeedback = (e) => {
  e.preventDefault();
  modalFeedback.classList.add("opened");
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  body.classList.add("opening-modal");
  body.style.top = `-${scrollY}`;
  modalFocus.focus()
}

const closeModalFeedback = () => {
  modalFeedback.classList.remove("opened")
  const scrollY = body.style.top;
  body.classList.remove("opening-modal");
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  modalFocus.focus()
}

for(let openFeedbackButton of openFeedbackButtons){
  openFeedbackButton.addEventListener("click", openModalFeedback)
  }
  
closeFeedbackButton.addEventListener("click", closeModalFeedback)

const isClickModal = (e) => {
  e._isClickWithInModal = true;
}

const closeIsClickModal = (e) => {
  if (e._isClickWithInModal) return;
  e.currentTarget.classList.remove('opened');
  const scrollY = body.style.top;
  body.classList.remove("opening-modal");
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

ordercall.addEventListener('click', isClickModal);
modalOrdercall.addEventListener('click', closeIsClickModal);

feedback.addEventListener('click', isClickModal);
modalFeedback.addEventListener('click', closeIsClickModal);


function escapeModal(e) {
  if (e.key === "Escape") {
    closeModalOrdercall()
    closeModalFeedback()
  }
}

window.addEventListener('keydown', escapeModal);


function setScrollY() {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
}

window.addEventListener('scroll', setScrollY);
