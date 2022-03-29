const burgerMenu = document.querySelector("#burger-menu")
burgerMenu.addEventListener("click", function() {
    const menu = document.querySelector("#header__menu")
    const body = document.querySelector("body")
    menu.classList.toggle("active")
    body.classList.toggle("hidden")
    if(menu.classList.contains("active")){
        window.addEventListener("click", (e) => {
            if(!e.target.classList.contains("header__menu-list")){
                console.log("3")
                // menu.classList.remove("active")
            }
        })
    }
})