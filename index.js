import { burger } from './js/variables.js';
import { toggleEl } from './js/toggleElement.js';
import { removeEl } from './js/removeElement.js';
import { eventDeleteClass } from './js/eventDeleteClass.js';

burger.addEventListener('click', () => {
  toggleEl();
});

document.querySelectorAll('.e-link').forEach((e) =>
  e.addEventListener('click', () => {
    removeEl();
  })
);
eventDeleteClass('click');
eventDeleteClass('touchmove');
