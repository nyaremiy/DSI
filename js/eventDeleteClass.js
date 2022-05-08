import { removeEl } from './removeElement.js';
import { fullScreen } from './variables.js';
const eventDeleteClass = (namaEvent) => {
  fullScreen.addEventListener(namaEvent, () => {
    removeEl();
  });
};
export { eventDeleteClass };
