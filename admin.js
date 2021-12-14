let nameSingUp = document.querySelector(".name-singup")
let usernamePassword = document.querySelector(".username-password")
let signButton = document.querySelector(".sign_button")

signButton.addEventListener("click", () =>{

    if (window.localStorage.getItem(nameSingUp.value) && window.localStorage.getItem(nameSingUp.value) == 
    usernamePassword.value){
            window.location = "index.html"            
    } else{
             alert("ErrorError! Password or login error!❌❌❌❌❌ ")
        }
        
})