const dropdownСounterHeaders = document.querySelectorAll(".dropdown-counter-facilities__header");
const dropdownСounterMinus = document.querySelectorAll("[data-facilities-minus]");
const dropdownСounterPlus = document.querySelectorAll("[data-facilities-plus]");
let dropdownСounterBedroomsNum = 0;
let dropdownСounterBedsNum = 0;
let dropdownСounterBathroomsNum = 0;

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
    const dropdownСounterName = dropdownСounterBox.closest(".dropdown-counter-facilities__item")
    if(sign ==="plus" ? dropdownСounterNum.innerText < 20  : dropdownСounterNum.innerText > 0){
        if(dropdownСounterName.dataset.facilitiesName === "bedrooms"){
            if(sign === "plus"){
                dropdownСounterNum.innerText = parseInt(dropdownСounterNum.innerText) + 1
                dropdownСounterBedroomsNum++ 
            }
            if(sign === "minus"){
                dropdownСounterNum.innerText = parseInt(dropdownСounterNum.innerText) - 1
                dropdownСounterBedroomsNum-- 
            }
            dropdownСounterHeader.value = `${dropdownСounterBedroomsNum} спальни,`
        }
        if(dropdownСounterName.dataset.facilitiesName === "beds"){
            if(sign === "plus"){
                dropdownСounterNum.innerText = parseInt(dropdownСounterNum.innerText) + 1
                dropdownСounterBedsNum++ 
            }
            if(sign === "minus"){
                dropdownСounterNum.innerText = parseInt(dropdownСounterNum.innerText) - 1
                dropdownСounterBedsNum-- 
            }
            dropdownСounterHeader.value = `${dropdownСounterBedsNum} кровати,`
        }
        if(dropdownСounterName.dataset.facilitiesName === "bathrooms"){
            if(sign === "plus"){
                dropdownСounterNum.innerText = parseInt(dropdownСounterNum.innerText) + 1
                dropdownСounterBathroomsNum++ 
            }
            if(sign === "minus"){
                dropdownСounterNum.innerText = parseInt(dropdownСounterNum.innerText) - 1
                dropdownСounterBathroomsNum-- 
            }
            dropdownСounterHeader.value = `${dropdownСounterBathroomsNum} ванных комнат`
        }
    }
    if(dropdownСounterBedroomsNum == 0 && dropdownСounterBedsNum == 0 && dropdownСounterBathroomsNum == 0)
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