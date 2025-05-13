function toggleMenu() {
    const menu = document.querySelector(".menu-links"); /* This selects the menu links */
    const icon = document.querySelector(".hamburger-icon"); /* This selects the hamburger icon */
    menu.classList.toggle("open"); /* This toggles the menu open and close */
    icon.classList.toggle("open"); /* This toggles the icon open and close */
    }