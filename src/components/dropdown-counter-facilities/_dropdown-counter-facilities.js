const dropdownСounterHeaders = document.querySelectorAll(".dropdown-counter-facilities__header");
const dropdownСounterMinus = document.querySelectorAll("[data-facilities-minus]");
const dropdownСounterPlus = document.querySelectorAll("[data-facilities-plus]");
let dropdownСounterHeaderNum = 0;
    

dropdownСounterHeaders.forEach((header)=> {
    header.addEventListener("click", function() {
        const dropdownСounter = this.closest(".dropdown-counter-facilities");
        const dropdownСounterBody =  dropdownСounter.querySelector(".dropdown-counter-facilities__body");
        dropdownСounterBody.classList.add("active");
        dropdownСounter.classList.add("active");
        document.addEventListener("click", function(e){
            if(!(e.target).closest(".dropdown-counter-facilities")){
                dropdownСounterBody.classList.remove("active");
                dropdownСounter.classList.remove("active")
            }
        })
    })
})

const dropdownСounterBtn = (item, sign) => {
    const dropdownСounter = item.closest(".dropdown-counter-facilities")
    const dropdownСounterBox = item.closest(".dropdown-counter-facilities__box")
    const dropdownСounterHeader = dropdownСounter.querySelector(".dropdown-counter-facilities__header")
    const dropdownСounterNum = dropdownСounterBox.querySelector("[data-facilities-num]")
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
}
dropdownСounterPlus.forEach((item)=> {
    const sign = "plus"
    item.addEventListener("click", ()=> dropdownСounterBtn(item, sign))
})
dropdownСounterMinus.forEach((item)=> {
    const sign = "minus"
    item.addEventListener("click", () => dropdownСounterBtn(item, sign))
})