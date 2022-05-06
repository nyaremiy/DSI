const burgerActions = () => {
  // Add class burger
  document.getElementById('burger').classList.toggle('c-burger--active');
  // Add class to navigation (show element)
  document
    .getElementsByClassName('c-navigation')[0]
    .classList.toggle('c-navigation--show');
  //Changed color icons (white)
  let icon = document.getElementsByClassName('c-header__icon');
  for (const element of icon) {
    element.classList.toggle('c-header__icon--active');
  }
};

export { burgerActions };
