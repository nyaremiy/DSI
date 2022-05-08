import { burgerActions } from './js/showBurger.js';
console.log('!!!');
// Click burger
// document.getElementById('burger').addEventListener('click', burgerActions);
const burger = document.getElementById('burger');
const navMenu = document.querySelector('.c-navigation__list');
const headerIcons = document.querySelectorAll('.c-header__icon');
const fullScreen = document.getElementById('js-full-screen');

burger.addEventListener('click', () => {
  burger.classList.toggle('c-burger--active');
  navMenu.classList.toggle('c-navigation__list--active');
  fullScreen.classList.toggle('c-full-screen--show');
  headerIcons.forEach((icon) =>
    icon.classList.toggle('c-header__icon--active')
  );
});
document.querySelectorAll('.e-link').forEach((n) =>
  n.addEventListener('click', () => {
    burger.classList.remove('c-burger--active');
    navMenu.classList.remove('c-navigation__list--active');
    fullScreen.classList.remove('c-full-screen--show');
    headerIcons.forEach((icon) =>
      icon.classList.remove('c-header__icon--active')
    );
  })
);

fullScreen.addEventListener('click', () => {
  fullScreen.classList.remove('c-full-screen--show');
  burger.classList.remove('c-burger--active');
  navMenu.classList.remove('c-navigation__list--active');
  headerIcons.forEach((icon) =>
    icon.classList.remove('c-header__icon--active')
  );
});
fullScreen.addEventListener('touchmove', () => {
  fullScreen.classList.remove('c-full-screen--show');
  burger.classList.remove('c-burger--active');
  navMenu.classList.remove('c-navigation__list--active');
  headerIcons.forEach((icon) =>
    icon.classList.remove('c-header__icon--active')
  );
});
