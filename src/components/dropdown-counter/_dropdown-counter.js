const dropdownСounterHeaders = document.querySelectorAll(".dropdown-counter__header");
const dropdownСounterMinus = document.querySelectorAll("[data-counter-minus]");
const dropdownСounterPlus = document.querySelectorAll("[data-counter-plus]");

    

dropdownСounterHeaders.forEach((header)=> {
    header.addEventListener("click", function() {
        const dropdownСounter = this.closest(".dropdown-counter");
        const dropdownСounterBody =  dropdownСounter.querySelector(".dropdown-counter__body");
        dropdownСounterBody.classList.add("active");
        dropdownСounter.classList.add("active");
        document.addEventListener("click", function(e){
            if(!(e.target).closest(".dropdown-counter")){
                dropdownСounterBody.classList.remove("active");
                dropdownСounter.classList.remove("active")
            }
        })
    })
})

dropdownСounterMinus.forEach((item)=> {
    const dropdownСounterBox = item.closest(".dropdown-counter__box")
    const dropdownСounterNum = dropdownСounterBox.querySelector("[data-counter-num]")
    const dropdownСounterBtnClear = dropdownСounterBox.querySelector("[data-counter-clear]")
    item.addEventListener("click", function () {
        if(dropdownСounterNum.innerText < 20)
            dropdownСounterNum.innerText = parseInt(dropdownСounterNum.innerText) + 1
        parseInt(dropdownСounterNum.innerHTML) != 0 ? dropdownСounterBtnClear.classList.add("active"):dropdownСounterBtnClear.classList.remove("active")
    })
})
dropdownСounterPlus.forEach((item)=> {
    const dropdownСounterBox = item.closest(".dropdown-counter__box")
    const dropdownСounterNum = dropdownСounterBox.querySelector("[data-counter-num]")
    const dropdownСounterBtnClear = dropdownСounterBox.querySelector("[data-counter-clear]")
    item.addEventListener("click", function () {
        if(dropdownСounterNum.innerText > 0)
            dropdownСounterNum.innerText = parseInt(dropdownСounterNum.innerText) - 1
        parseInt(dropdownСounterNum.innerHTML) != 0 ? dropdownСounterBtnClear.classList.add("active"):dropdownСounterBtnClear.classList.remove("active")
    })
})

