let father = document.querySelector(".father")

function render(data, ota){
    data.map(elem =>{
        let div = document.querySelector("div")
        let h1 = document.querySelector("h1")
        let img = document.querySelector("img")
        let p = document.querySelector("p")

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
render(films, father)



