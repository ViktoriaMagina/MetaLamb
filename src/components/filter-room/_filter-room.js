const FilterOpen = document.querySelector(".rooms-list__burger")
const FilterClose = document.querySelector(".filter-room__close")

FilterOpen.addEventListener("click", function() {
    const menu = document.querySelector(".filter-room")
    menu.classList.add("active")
})
FilterClose.addEventListener("click", function() {
    const menu = document.querySelector(".filter-room")
    menu.classList.remove("active")
})
