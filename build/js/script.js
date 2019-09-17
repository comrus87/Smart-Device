'use strict';

const overlay = document.querySelector('.overlay-modal');
const modal = document.querySelector('.modal-call');
const buttonOpenModal = document.querySelector('.page-header__button');
const buttonCloseModal = document.querySelector('.modal-call__image-close');

buttonOpenModal.addEventListener('click', function () {
    overlay.classList.remove('overlay-modal--close');
    overlay.classList.add('overlay-modal--open');
    document.body.style.overflow = 'hidden';
});


// buttonCloseModal.addEventListener('click', function () {
//     overlay.classList.remove('overlay-modal--open');
//     overlay.classList.add('overlay-modal--close');
//     document.body.style.overflow = '';
// })

overlay.addEventListener('click', function (evt) {
  if (!modal.contains(evt.target) || evt.target == buttonCloseModal) {
    overlay.classList.remove('overlay-modal--open');
    overlay.classList.add('overlay-modal--close');
    document.body.style.overflow = '';
  }
})
