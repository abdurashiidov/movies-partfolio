let userName = document.querySelector(".username")
let parol = document.querySelector(".password")
let btn = document.querySelector(".btn")


btn.addEventListener("click", () =>{
    // if(!window.localStorage.getItem(userName.value)){
    //     window.localStorage.setItem(userName.value, parol.value)
    //     alert("Ro'yxatdan o'ting")
    //     window.location = "admin.html"

    // } else {
    //     alert("Mavjud")
    // }

    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
        "username": userName.value,
    "userpassword": parol.value,
});
0
var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("http://10.10.112.95:8008/login", requestOptions)
    .then(response => response.text())
    .then(result => {
            if (result == "ok" ) {
                alert("Bu malumot mavjud emas")
                window.location = "admin.html"      
            } else{
                window.location = "index.html"

            }
    })
    .catch(error => console.log('error', error));

})