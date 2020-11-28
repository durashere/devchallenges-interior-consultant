const menu = document.querySelector(".navbar__menu")
const menuBtn = document.querySelector(".navbar__menu-btn")

const navbarList = document.querySelector(".navbar__item-list")

menu.addEventListener("click", toggleMenu)

let showMenu = false
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("navbar__menu-btn--open")
    navbarList.classList.add("navbar__item-list--open")
    showMenu = true
  } else {
    menuBtn.classList.remove("navbar__menu-btn--open")
    navbarList.classList.remove("navbar__item-list--open")
    showMenu = false
  }
}
