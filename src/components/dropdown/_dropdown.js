const dropdownHeaders = document.querySelectorAll(".dropdown__header");
const dropdownBody = document.querySelectorAll(".dropdown__body");

window.addEventListener("DOMContentLoaded", function(){
    dropdownHeaders.forEach((item)=> {
        item.classList.remove('active')
    })
    dropdownBody.forEach((item)=> {
        item.classList.remove('active')
    })
})

dropdownHeaders.forEach((header)=> {
    header.addEventListener("click", function() {
        dropdownHeaders.forEach((item)=> {
            item.classList.remove('active')
        })
        dropdownBody.forEach((item)=> {
            item.classList.remove('active')
        })
        this.classList.toggle("active")
        const dropdown = this.closest(".dropdown");
        dropdown.querySelector(".dropdown__body").classList.toggle("active")
    })
})