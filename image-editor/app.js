let filterBtn = document.querySelector(".options")
let inputTitle = document.querySelector(".filter-info .title")
let inputValue = document.querySelector(".filter-info .value")
let sliderInput = document.querySelector(".slider input")
let prevImage = document.querySelector(".preview-img img")

console.log(prevImage.style.filter)
filterBtn.addEventListener("click", (e) => {
    inputTitle.innerText = e.target.innerText;
    sliderInput.value=100;
    inputValue.innerText="100%"
});

sliderInput.addEventListener("mouseup", (e) => {
    inputValue.innerText = `${Math.floor(e.target.value)}%`
    if(inputTitle.innerText == "Brightness"){
        let calc = `${e.target.value}%`
        console.log(calc)
        prevImage.style.filter="Brightness(e.target.value)"
    }
})
//