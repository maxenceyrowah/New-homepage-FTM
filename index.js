const menu = document.querySelector(".header__nav__menu__humburger__menu");
const menuItems = document.querySelectorAll(".header__nav__menu__humburger__menu__item");

const hamburger= document.querySelector(".header__nav__menu__humburger__button");
const closeIcon= document.querySelector(".header__nav__menu__humburger__button__close");
const menuIcon = document.querySelector(".header__nav__menu__humburger__button__open");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )
  