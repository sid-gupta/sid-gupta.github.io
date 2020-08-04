const burger_icon = document.querySelector('.main-menu .burger-icon');
const nav_menu = document.querySelector('.main-menu .nav-menu');

burger_icon.addEventListener('click', (event) => {
  nav_menu.classList.toggle('shown');
  if (burger_icon.getAttribute('name') === 'close-sharp') {
    burger_icon.setAttribute('name', 'menu-sharp');
  } else {
    burger_icon.setAttribute('name', 'close-sharp');
  }
});
