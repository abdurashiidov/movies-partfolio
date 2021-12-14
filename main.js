let father = document.querySelector(".father")

function render(data, ota){
    data.map(elem =>{
        let div = document.createElement("div")
        let h1 = document.createElement("h1")
        let img = document.createElement("img")
        let p = document.createElement("p")


        h1.style.color = "white"
        p.style.color = "white"


        h1.textContent = elem.Title
        img.setAttribute("src", elem.Images)
        p.textContent = elem.Plot

        div.classList.add("boxs")

        div.appendChild(img)
        div.appendChild(h1)
        div.appendChild(p)

        ota.appendChild(div)
    })
}
render(films_01, father)



