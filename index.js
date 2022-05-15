const body = document.querySelector('.store-brand-instacart');
const menu_button = document.querySelector('.hamburger-menu-button');
const menu_button_cross = document.querySelector('.hamburger-menu-main-items-cross');
const menu = document.querySelector('.hamburger-menu');
const menu_side = document.querySelector('.hamburger-menu-main-backgroundside');
var menu_button_toggle = false;

function onClickHamburgerMenu() {
  if(!menu_button_toggle) 
  {
  body.style.overflow = 'hidden';
  }
  else
  {
  body.style.overflow = '';
  }
  menu.classList.toggle('ativo');
  menu_button_toggle = !menu_button_toggle;
}

menu_button_cross.addEventListener('click', onClickHamburgerMenu);
menu_button.addEventListener('click', onClickHamburgerMenu);