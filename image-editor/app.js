let wrapper= document.querySelector(".wrapper")
let containerArea = document.querySelector(".container") 
let filterBtn = document.querySelector(".options")
let inputTitle = document.querySelector(".filter-info .title")
let inputValue = document.querySelector(".filter-info .value")
let sliderInput = document.querySelector(".slider input")
let prevImage = document.querySelector(".preview-img img")
let optRotate = document.querySelectorAll(".rotate button")
let resetBtn = document.querySelector(".resetBtn")
let choseImg = document.querySelector(".choose-image")
let fileInput = document.querySelector(".file-input")
let saveBtn = document.querySelector(".save-btn")

let rotate = 0, flipHorizontal = 1, flipVertical = 1;

let changeImage = function (){
    let file= fileInput.files[0];
    if(!file) return;
    prevImage.src=URL.createObjectURL(file); 
}
changeImage();
fileInput.addEventListener("change", changeImage)
choseImg.addEventListener("click",()=> fileInput.click());
prevImage.addEventListener("click", ()=> fileInput.click())


console.log(prevImage.style.filter)
filterBtn.addEventListener("click", (e) => {
    inputTitle.innerText = e.target.innerText;
    sliderInput.value=100;
    inputValue.innerText="100%"
});

let updateFilter = sliderInput.addEventListener("mouseup", (e) => {
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
            prevImage.parentElement.classList.toggle("after")
            containerArea.classList.toggle("rotated")
            wrapper.classList.toggle("rotated")
            rotate += 90;
        }
        if (element.target.classList.value || element.target.firstChild.classList.value == "fa-solid fa-rotate-left") {
            prevImage.style.transform += "rotate(-90deg)"
            prevImage.parentElement.classList.toggle("after")
            containerArea.classList.toggle("rotated")
            rotate += -90;
        }
        if (element.target.classList.value || element.target.firstChild.classList.value == "bx bx-reflect-vertical") {
            prevImage.style.transform += "scaleX(-1)"
            flipHorizontal = flipHorizontal === 1 ? -1 : 1;

        }
        if (element.target.classList.value || element.target.firstChild.classList.value == "bx bx-reflect-horizontal") {
            prevImage.style.transform += "scaleY(-1)"
            flipVertical = flipVertical === 1 ? -1 : 1;
        }

    })
    
});

resetBtn.addEventListener("click", ()=> {
    prevImage.style.filter = "Brightness(100%)"
    prevImage.style.filter = "Saturate(100%)"
    prevImage.style.filter = "Invert(100%)"
    prevImage.style.filter = "Grayscale(0%)"
    prevImage.style.transform="rotate(0deg)"
    inputValue.innerText ="100%"
    sliderInput.value="100"
});
////save and download image 
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");

let brightnessImage = function(){
    if(inputTitle.innerText == "Brightness"){
        ctx.filter=`Brightness(${sliderInput.value}%)`
    }
}
let saturateImage = function(){
    if(inputTitle.innerText == "Saturation"){
        ctx.filter=`saturate(${sliderInput.value}%)`
}
    }
let invertImage = function(){
    if (inputTitle.innerText == "Inversion") {
        ctx.filter=`invert(${sliderInput.value}%)`
    }
}
let grayImage = function(){
    if (inputTitle.innerText == "Grayscale") {
        ctx.filter=`grayscale(${sliderInput.value}%)`
    }
}

let saveImage = () => {
    canvas.width=prevImage.naturalWidth;
    canvas.height=prevImage.naturalHeight;
    brightnessImage();
    saturateImage();
    invertImage();
    grayImage();
    ctx.translate(canvas.width/2,canvas.height/2)
    if(rotate !== 0){
        ctx.rotate(rotate * Math.PI / 180)
    }
    ctx.scale(flipHorizontal,flipVertical)
    ctx.drawImage(prevImage, -canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
    let link = document.createElement("a");
    link.download = "image.jpg";
    link.href=canvas.toDataURL()
    link.click();
}

saveBtn.addEventListener("click", saveImage)