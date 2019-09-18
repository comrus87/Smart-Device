'use strict';

const overlay = document.querySelector('.overlay-modal');
const modal = document.querySelector('.modal-call');
const buttonOpenModal = document.querySelector('.page-header__button');
const buttonCloseModal = document.querySelector('.modal-call__close');
const navList = document.querySelector('.page-footer__nav-list');
const contactList = document.querySelector('.page-footer__contacts-wrap');
const buttonNavList = document.querySelectorAll('.page-footer__switch-button')[0];
const buttonContactList = document.querySelectorAll('.page-footer__switch-button')[1];


buttonOpenModal.addEventListener('click', function () {
    overlay.classList.remove('overlay-modal--close');
    overlay.classList.add('overlay-modal--open');
    document.body.style.overflow = 'hidden';
});

overlay.addEventListener('click', function (evt) {
  if (!modal.contains(evt.target) || buttonCloseModal.contains(evt.target)) {
    overlay.classList.remove('overlay-modal--open');
    overlay.classList.add('overlay-modal--close');
    document.body.style.overflow = '';
  }
})

function removeNoJs (block) {
  if (block.classList.contains('list--no-js')) {
    block.classList.remove('list--no-js');
  }
}

removeNoJs(navList);
removeNoJs(contactList);

buttonNavList.addEventListener('click', function () {
    navList.classList.toggle('footer-list--closed');
    this.classList.toggle('page-footer__nav--open');
})

buttonContactList.addEventListener('click', function () {
    contactList.classList.toggle('footer-list--closed');
    this.classList.toggle('page-footer__nav--open');
})
