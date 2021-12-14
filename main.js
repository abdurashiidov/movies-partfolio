// !render
// let father = document.querySelector(".father")

// function render(data, ota){
//     data.map(elem =>{
//         let div = document.createElement("div")
//         let h1 = document.createElement("h1")
//         let img = document.createElement("img")
//         let p = document.createElement("p")


//         h1.style.color = "white"
//         p.style.color = "white"


//         h1.textContent = elem.Title
//         img.setAttribute("src", elem.Images)
//         p.textContent = elem.Plot

//         div.classList.add("boxs")

//         div.appendChild(img)
//         div.appendChild(h1)
//         div.appendChild(p)

//         ota.appendChild(div)
//     })
// }
// render(films_01, father)

// ! Slick
let father3 = document.querySelector(".father3")

function render3(data3, ota3){
    data3.map(elem3 =>{
        let div3 = document.createElement("div")
        let title3 = document.createElement("h2")
        let img3 = document.createElement("img")
        let info3 = document.createElement("p")


        title3.textContent = elem3.Title
        img3.setAttribute("src", elem3.Images)
        info3.textContent = elem3.Plot

        div3.classList.add("boxs3")
        img3.setAttribute("class", "img3")

        div3.appendChild(img3)
        div3.appendChild(title3)
        div3.appendChild(info3)

        ota3.appendChild(div3)

    })
} 
render3(films_01, father3)




