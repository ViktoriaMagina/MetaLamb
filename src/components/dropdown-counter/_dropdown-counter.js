const dropdownСounterHeaders = document.querySelectorAll(".dropdown-counter__header");
const dropdownСounterMinus = document.querySelectorAll("[data-counter-minus]");
const dropdownСounterPlus = document.querySelectorAll("[data-counter-plus]");
const dropdownСounterBtnClear = document.querySelectorAll("[data-counter-clear]")
const dropdownСounterBtnSelect = document.querySelectorAll("[data-counter-select]")
let dropdownСounterHeaderNum = 0;
    

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
    const dropdownСounter = item.closest(".dropdown-counter")
    const dropdownСounterBox = item.closest(".dropdown-counter__box")
    const dropdownСounterHeader = dropdownСounter.querySelector(".dropdown-counter__header")
    const dropdownСounterNum = dropdownСounterBox.querySelector("[data-counter-num]")
    const dropdownСounterBtnClear = dropdownСounter.querySelector("[data-counter-clear]")
    item.addEventListener("click", function() {
        if(dropdownСounterNum.innerText < 20){
            dropdownСounterNum.innerText = parseInt(dropdownСounterNum.innerText) + 1
            dropdownСounterHeaderNum += 1
            if(dropdownСounterHeaderNum == 1)
                dropdownСounterHeader.value = `${dropdownСounterHeaderNum} гость`
            if(dropdownСounterHeaderNum < 5 & dropdownСounterHeaderNum !=1)
                dropdownСounterHeader.value = `${dropdownСounterHeaderNum} гостя`
            if(dropdownСounterHeaderNum >= 5 )
                dropdownСounterHeader.value = `${dropdownСounterHeaderNum} гостей`
        }
        if(dropdownСounterHeaderNum == 0)
            dropdownСounterHeader.value = ""
        parseInt(dropdownСounterNum.innerHTML) != 0 ? dropdownСounterBtnClear.classList.add("active"):dropdownСounterBtnClear.classList.remove("active")
    })
})
dropdownСounterPlus.forEach((item)=> {
    const dropdownСounter = item.closest(".dropdown-counter")
    const dropdownСounterBox = item.closest(".dropdown-counter__box")
    const dropdownСounterHeader = dropdownСounter.querySelector(".dropdown-counter__header")
    const dropdownСounterNum = dropdownСounterBox.querySelector("[data-counter-num]")
    const dropdownСounterBtnClear = dropdownСounter.querySelector("[data-counter-clear]")
    item.addEventListener("click", function () {
        if(dropdownСounterNum.innerText > 0){
            dropdownСounterNum.innerText = parseInt(dropdownСounterNum.innerText) - 1
            dropdownСounterHeaderNum = dropdownСounterHeaderNum - 1
            if(dropdownСounterHeaderNum == 1)
                dropdownСounterHeader.value = `${dropdownСounterHeaderNum} гость`
            if(dropdownСounterHeaderNum < 5 & dropdownСounterHeaderNum !=1)
                dropdownСounterHeader.value = `${dropdownСounterHeaderNum} гостя`
            if(dropdownСounterHeaderNum >= 5 )
                dropdownСounterHeader.value = `${dropdownСounterHeaderNum} гостей`
        }
        if(dropdownСounterHeaderNum == 0)
            dropdownСounterHeader.value = ""
        parseInt(dropdownСounterNum.innerText) != 0 ? dropdownСounterBtnClear.classList.add("active"):dropdownСounterBtnClear.classList.remove("active")
    })
})

dropdownСounterBtnClear.forEach((item) => {
    const dropdownСounter = item.closest(".dropdown-counter")
    const dropdownСounterNums = dropdownСounter.querySelectorAll("[data-counter-num]")
    item.addEventListener("click", function(){
        dropdownСounterNums.forEach((obj)=> {
            obj.innerText = 0;
        })
    })
})

dropdownСounterBtnSelect.forEach((item) => {
    const dropdownСounter = item.closest(".dropdown-counter")
    const dropdownСounterBody = dropdownСounter.querySelector(".dropdown-counter__body")
    item.addEventListener("click", function(){
        dropdownСounterBody.classList.remove("active");
        dropdownСounter.classList.remove("active")
    })
})