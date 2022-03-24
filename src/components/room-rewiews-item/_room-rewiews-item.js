const roomRewiewslikesContainers = document.querySelectorAll('.room-rewiews__likes')

roomRewiewslikesContainers.forEach((item)=> {
    item.addEventListener("click", function(){
        const num = item.querySelector(".room-rewiews__likes-num");
        if(item.classList.contains("active")){
            item.classList.remove("active")
            num.innerText = parseInt(num.innerText) - 1
        }
        else{
            item.classList.add("active")
            num.innerText = parseInt(num.innerText) + 1
        }
    })
})