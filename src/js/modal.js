const body = document.body;
const openOrdercallButtons = document.querySelectorAll(".open-ordercall-btn")
const modalOrdercall = document.querySelector("#modal-ordercall")
const ordercall = document.querySelector(".ordercall")
const closeOrdercallButton = document.querySelector(".ordercall .modal-close")
const openModalOrdercall = () => {
  modalOrdercall.classList.add("opened")
  body.style.position = 'fixed'
}
const closeModalOrdercall = () => {
  modalOrdercall.classList.remove("opened")
  body.style.position = ''
  body.style.top = ''
}

for(let openOrdercallButton of openOrdercallButtons){
openOrdercallButton.addEventListener("click", openModalOrdercall)
}

closeOrdercallButton.addEventListener("click", closeModalOrdercall)

ordercall.addEventListener('click', event => {
  event._isClickWithInModal = true;
});
modalOrdercall.addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('opened');
  body.style.position = ''
  body.style.top = ''
});



const openFeedbackButtons = document.querySelectorAll(".open-feedback-btn")
const modalFeedback = document.querySelector("#modal-feedback")
const feedback = document.querySelector(".feedback")
const closeFeedbackButton = document.querySelector(".feedback .modal-close")
const openModalFeedback = (e) => {
  e.preventDefault();
  modalFeedback.classList.add("opened");
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
}
const closeModalFeedback = () => {
  modalFeedback.classList.remove("opened")
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

for(let openFeedbackButton of openFeedbackButtons){
  openFeedbackButton.addEventListener("click", openModalFeedback)
  }
  
closeFeedbackButton.addEventListener("click", closeModalFeedback)

feedback.addEventListener('click', event => {
  event._isClickWithInModal = true;
});
modalFeedback.addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('opened');
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
});


window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    closeModalOrdercall()
    closeModalFeedback()
  }
});

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});
