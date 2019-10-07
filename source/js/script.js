'use strict';

const ESC_KEYCODE = 27;
const overlay = document.querySelector('.overlay-modal');
const modal = document.querySelector('.modal-call');
const buttonOpenModal = document.querySelector('.page-header__button');
const buttonCloseModal = document.querySelector('.modal-call__close');
const navList = document.querySelector('.page-footer__nav-list');
const navBlock = document.querySelector('.page-footer__nav');
const contactList = document.querySelector('.page-footer__contacts-wrap');
const contactsBlock = document.querySelector('.page-footer__contacts');
const buttonNavList = document.querySelectorAll('.page-footer__switch-button')[0];
const buttonContactList = document.querySelectorAll('.page-footer__switch-button')[1];
let nameModal = document.querySelectorAll('.modal-call__input')[0];
let numberModal = document.querySelectorAll('.modal-call__input')[1];
let messageModal = document.querySelector('.modal-call__textarea');
const form = document.querySelector('.modal-call__form');
const formPhone = document.getElementById('form-phone');

buttonOpenModal.addEventListener('click', function () {
    overlay.classList.remove('overlay-modal--close');
    overlay.classList.add('overlay-modal--open');
    document.body.style.overflow = 'hidden';
    nameModal.focus();
});

function closeModal (modal) {
    modal.classList.remove('overlay-modal--open');
    modal.classList.add('overlay-modal--close');
    document.body.style.overflow = '';
    nameModal.value = '';
    numberModal.value = '';
    messageModal.value = '';
}

overlay.addEventListener('click', function (evt) {
  if (!modal.contains(evt.target) || buttonCloseModal.contains(evt.target)) {
    closeModal(this);
  }
})

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeModal(overlay);
  }
});

function removeNoJs (block) {
  if (block.classList.contains('no-js')) {
    block.classList.remove('no-js');
  }
}

removeNoJs(navList);
removeNoJs(contactList);

navBlock.addEventListener('click', function () {
    navList.classList.toggle('list-closed');
    buttonNavList.classList.toggle('page-footer__nav-open');
})

contactsBlock.addEventListener('click', function () {
    contactList.classList.toggle('list-closed');
    buttonContactList.classList.toggle('page-footer__nav-open');
})

const phoneModalMask = IMask(numberModal, {
    mask: '+{7}(000)000-00-00'
  });

const phoneFormMask = IMask(formPhone, {
    mask: '+{7}(000)000-00-00'
  });

form.addEventListener('submit', function () {
  localStorage.setItem('Имя', nameModal.value);
  localStorage.setItem('Телефон', numberModal.value);
  localStorage.setItem('Сообщение', messageModal.value);
})
