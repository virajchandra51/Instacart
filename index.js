const body = document.querySelector('.store-brand-instacart');
const menu_button = document.querySelector('.hamburger-menu-button');
const menu_button_cross = document.querySelector('.hamburger-menu-main-items-cross');
const menu = document.querySelector('.hamburger-menu');
const menu_side = document.querySelector('.hamburger-menu-main-backgroundside');
const footer_toggle_in = document.querySelector('.footer-content-accessibility-right-toggle-input')
const footer_toggle_bg = document.querySelector('.footer-content-accessibility-right-toggle-bg')
const footer_toggle_icon = document.querySelector('.footer-content-accessibility-right-toggle-icon')
var menu_button_toggle = false;
var footer_toggle_check = false;

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

function onFooterToggleClick() {
  if(!footer_toggle_check)
  {
    footer_toggle_bg.classList.remove('footer-content-accessibility-right-toggle-bg')
    footer_toggle_bg.classList.add('footer-content-accessibility-right-toggle-bg-on')
    footer_toggle_icon.classList.remove('footer-content-accessibility-right-toggle-icon')
    footer_toggle_icon.classList.add('footer-content-accessibility-right-toggle-icon-on')
    footer_toggle_icon.innerHTML = '<i class="ri-check-line"></i>'
    footer_toggle_in.ariaChecked = true
  }
  else
  {
    footer_toggle_bg.classList.remove('footer-content-accessibility-right-toggle-bg-on')
    footer_toggle_bg.classList.add('footer-content-accessibility-right-toggle-bg')
    footer_toggle_icon.classList.add('footer-content-accessibility-right-toggle-icon')
    footer_toggle_icon.classList.remove('footer-content-accessibility-right-toggle-icon-on')
    footer_toggle_icon.innerHTML = '<i class="ri-close-line"></i>'
    footer_toggle_in.ariaChecked = !footer_toggle_in.ariaChecked
  }
  footer_toggle_check = !footer_toggle_check
}

menu_button_cross.addEventListener('click', onClickHamburgerMenu);
menu_button.addEventListener('click', onClickHamburgerMenu);

footer_toggle_in.addEventListener('click', onFooterToggleClick);
