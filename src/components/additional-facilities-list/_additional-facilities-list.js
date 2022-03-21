const additionalFacilitiesListTitles = document.querySelectorAll('.additional-facilities-list__title')

additionalFacilitiesListTitles.forEach((header)=> {
    header.addEventListener("click", function() {
        const additionalFacilitiesList = this.closest(".additional-facilities-list");
        const additionalFacilitiesListTitle = additionalFacilitiesList.querySelector(".additional-facilities-list__title")
        const additionalFacilitiesListBody =  additionalFacilitiesList.querySelector(".additional-facilities-list__body");
        additionalFacilitiesListBody.classList.toggle("active");
        additionalFacilitiesListTitle.classList.toggle("active");
    })
})
