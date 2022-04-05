const dropdownСounterHeaders = document.querySelectorAll(".dropdown-counter-guests__header");
const dropdownСounterMinus = document.querySelectorAll("[data-guests-minus]");
const dropdownСounterPlus = document.querySelectorAll("[data-guests-plus]");
const dropdownСounterBtnClear = document.querySelectorAll("[data-guests-clear]")
const dropdownСounterBtnSelect = document.querySelectorAll("[data-guests-select]")
let dropdownСounterHeaderNum = 0;
    

dropdownСounterHeaders.forEach((header)=> {
    header.addEventListener("click", function() {
        const dropdownСounter = this.closest(".dropdown-counter-guests");
        const dropdownСounterBody =  dropdownСounter.querySelector(".dropdown-counter-guests__body");
        dropdownСounterBody.classList.add("active");
        dropdownСounter.classList.add("active");
        document.addEventListener("click", function(e){
            if(!(e.target).closest(".dropdown-counter-guests")){
                dropdownСounterBody.classList.remove("active");
                dropdownСounter.classList.remove("active")
            }
        })
    })
})


const dropdownСounterBtn = (item, sign) => {
    const dropdownСounter = item.closest(".dropdown-counter-guests")
    const dropdownСounterBox = item.closest(".dropdown-counter-guests__box")
    const dropdownСounterHeader = dropdownСounter.querySelector(".dropdown-counter-guests__header")
    const dropdownСounterNum = dropdownСounterBox.querySelector("[data-guests-num]")
    const dropdownСounterBtnClear = dropdownСounter.querySelector("[data-guests-clear]")
    if(sign ==="plus" 
        ? dropdownСounterNum.innerText < 20  
        : dropdownСounterNum.innerText > 0
    ){
    if(sign === "plus"){
        dropdownСounterNum.innerText = parseInt(dropdownСounterNum.innerText) + 1
        dropdownСounterHeaderNum = dropdownСounterHeaderNum + 1
    }
    if(sign === "minus"){
        dropdownСounterNum.innerText = parseInt(dropdownСounterNum.innerText) - 1
        dropdownСounterHeaderNum = dropdownСounterHeaderNum - 1
    }
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
}
dropdownСounterPlus.forEach((item)=> {
    const sign = "plus"
    item.addEventListener("click", ()=> dropdownСounterBtn(item, sign))
})
dropdownСounterMinus.forEach((item)=> {
    const sign = "minus"
    item.addEventListener("click", () => dropdownСounterBtn(item, sign))
})

dropdownСounterBtnClear.forEach((item) => {
    const dropdownСounter = item.closest(".dropdown-counter-guests")
    const dropdownСounterNums = dropdownСounter.querySelectorAll("[data-guests-num]")
    const dropdownСounterHeader = dropdownСounter.querySelector(".dropdown-counter-guests__header")
    item.addEventListener("click", function(){
        dropdownСounterHeader.value = ""
        dropdownСounterNums.forEach((obj) => {
            obj.innerText = 0
            dropdownСounterHeaderNum = 0;
        })
    })
})

dropdownСounterBtnSelect.forEach((item) => {
    const dropdownСounter = item.closest(".dropdown-counter-guests")
    const dropdownСounterBody = dropdownСounter.querySelector(".dropdown-counter-guests__body")
    item.addEventListener("click", function(){
        dropdownСounterBody.classList.remove("active");
        dropdownСounter.classList.remove("active")
    })
})