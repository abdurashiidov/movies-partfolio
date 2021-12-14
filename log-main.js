let userName = document.querySelector(".username")
let parol = document.querySelector(".password")
let btn = document.querySelector(".btn")


btn.addEventListener("click", () =>{
    if(!window.localStorage.getItem(userName.value)){
        window.localStorage.setItem(userName.value, parol.value)
        window.location = "admin.html"
    } else {
        alert("Mavjud")
    }

})