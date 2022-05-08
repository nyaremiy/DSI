import { burger, navMenu, headerIcons, fullScreen } from './variables.js';

const toggleEl = () => {
  document.body.classList.toggle('not-scroll');
  burger.classList.toggle('c-burger--active');
  navMenu.classList.toggle('c-navigation__list--active');
  fullScreen.classList.toggle('c-full-screen--show');
  headerIcons.forEach((icon) =>
    icon.classList.toggle('c-header__icon--active')
  );
};
export { toggleEl };
