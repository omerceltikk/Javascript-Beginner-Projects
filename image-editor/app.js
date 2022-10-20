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

let setImgScale = function(){
    if(prevImage.style.transform =="-1"){
        ctx.scale(-1,1)
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
    setImgScale();
    ctx.drawImage(prevImage, -canvas.width/2,-canvas.height/2, canvas.width, canvas.height);
    document.body.appendChild(canvas);
    
    let link = document.createElement("a");
    link.download = "image.jpg";
    link.href=canvas.toDataURL()
    link.click();
}

saveBtn.addEventListener("click", saveImage)