let filterBtn = document.querySelector(".options")
let inputTitle = document.querySelector(".filter-info .title")
let inputValue = document.querySelector(".filter-info .value")
let sliderInput = document.querySelector(".slider input")
let prevImage = document.querySelector(".preview-img img")
let optRotate = document.querySelectorAll(".rotate button")
let resetBtn = document.querySelector(".resetBtn")

console.log(prevImage.style.filter)
filterBtn.addEventListener("click", (e) => {
    inputTitle.innerText = e.target.innerText;
    sliderInput.value=100;
    inputValue.innerText="100%"
});

sliderInput.addEventListener("mouseup", (e) => {
    inputValue.innerText = `${Math.floor(e.target.value)}%`
    if(inputTitle.innerText == "Brightness"){
        let calc = `Brightness(${e.target.value}%)`
        prevImage.style.filter=calc
    }
    if(inputTitle.innerText == "Saturation"){
        let calc = `Saturate(${e.target.value}%)`
        prevImage.style.filter=calc
    }
    if(inputTitle.innerText == "Inversion"){
        let calc = `Invert(${e.target.value}%)`
        prevImage.style.filter=calc
    }
    if(inputTitle.innerText == "Grayscale"){
        let calc = `Grayscale(${e.target.value}%)`
        prevImage.style.filter=calc
    }
})
//
optRotate.forEach(element => {
    element.addEventListener("click", (element)=>{
        if (element.target.classList.value || element.target.firstChild.classList.value == "fa-solid fa-rotate-right") {
            prevImage.style.transform += "rotate(90deg)"
        }
        if (element.target.classList.value || element.target.firstChild.classList.value == "fa-solid fa-rotate-left") {
            prevImage.style.transform += "rotate(-90deg)"
        }
        if (element.target.classList.value || element.target.firstChild.classList.value == "bx bx-reflect-vertical") {
            prevImage.style.transform += "scaleX(-1)"
        }
        if (element.target.classList.value || element.target.firstChild.classList.value == "bx bx-reflect-horizontal") {
            prevImage.style.transform += "scaleY(-1)"
        }
        
    })
    
});

resetBtn.addEventListener("click", ()=> {
    prevImage.style.filter = "Brightness(100%)"
    prevImage.style.filter = "Saturate(100%)"
    prevImage.style.filter = "Invert(100%)"
    prevImage.style.filter = "Grayscale(100%)"
    prevImage.style.transform="rotate(0deg)"
    inputValue.innerText ="100%"
    sliderInput.value="100"
});

////save and download image 