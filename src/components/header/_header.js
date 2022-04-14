const burgerMenu = document.querySelector("#burger-menu")

burgerMenu.addEventListener("click", function() {
    const menu = document.querySelector("#header__menu")
    const body = document.querySelector("body")
    menu.classList.toggle("active")
    body.classList.toggle("hidden")
})