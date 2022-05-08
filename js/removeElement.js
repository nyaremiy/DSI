import { burger, navMenu, headerIcons, fullScreen } from './variables.js';

const removeEl = () => {
  document.body.classList.remove('not-scroll');
  burger.classList.remove('c-burger--active');
  navMenu.classList.remove('c-navigation__list--active');
  fullScreen.classList.remove('c-full-screen--show');
  headerIcons.forEach((icon) =>
    icon.classList.remove('c-header__icon--active')
  );
};
export { removeEl };
