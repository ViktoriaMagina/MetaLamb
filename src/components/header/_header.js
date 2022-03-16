const dropdownHeaders = document.querySelectorAll(".dropdown-header");

dropdownHeaders.forEach((header)=> {
    header.addEventListener("click", function() {
        const dropdown = this.closest(".dropdown");
        this.classList.toggle("active")
        dropdown.querySelector(".dropdown-body").classList.toggle("active")
    })
})