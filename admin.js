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

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
        "username": nameSingUp.value,
    "userpassword": usernamePassword.value,
});
0
var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("http://10.10.112.95:8008/register", requestOptions)
    .then(response => response.text())
    .then(result => {
            if (result == "ok" ) {
                window.localStorage.setItem("token" , result)
                window.location = "firstindex.html"      
            } else{
                alert("Bu malumot mavjud")
            }
    })
    .catch(error => console.log('error', error));
        
})


