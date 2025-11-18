let url =  'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='

let search  = document.querySelector("input")
let btn = document.querySelector("button")
let img = document.querySelector("img")
btn.addEventListener("click", ()=> {
    
    img.src = url + search.value
    
})

