const dropdownHeaders = document.querySelectorAll(".dropdown__header");
const dropdownBodys = document.querySelectorAll(".dropdown__body");

window.addEventListener("scroll", function(){
    dropdownHeaders.forEach((item)=> {
        item.classList.remove('active')
    })
    dropdownBodys.forEach((item)=> {
        item.classList.remove('active')
    })
})

dropdownHeaders.forEach((header)=> {
    header.addEventListener("click", function() {
        const dropdown = this.closest(".dropdown");
        const dropdownBody =  dropdown.querySelector(".dropdown__body")
        const dropdownHeader = dropdown.querySelector(".dropdown__header")
        dropdownHeaders.forEach((item)=> {
            item.classList.remove('active')
        })
        dropdownBodys.forEach((item)=> {
            item.classList.remove('active')
        })
        dropdownHeader.classList.toggle("active")
        dropdownBody.classList.toggle("active")
        document.addEventListener("click", function(e){
            if(!(e.target).closest(".dropdown")){
                dropdownBody.classList.remove("active");
                dropdownHeader.classList.remove("active")
            }
        })
    })
})