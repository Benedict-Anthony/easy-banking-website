document.querySelector(".menu").addEventListener("click", ()=>{
    document.querySelector("nav").classList.add("active")
    document.querySelector(".close").classList.add("active")
    document.querySelector(".menu").classList.add("active")
})


document.querySelector(".close").addEventListener("click", ()=>{
    document.querySelector("nav").classList.remove("active")
    document.querySelector(".close").classList.remove("active")
    document.querySelector(".menu").classList.remove("active")
})