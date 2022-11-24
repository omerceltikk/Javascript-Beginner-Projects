let selected = document.querySelector(".selected")
let options = document.querySelector(".options")
let optionList = document.querySelectorAll(".option")



selected.addEventListener("click", () => {
    options.classList.toggle('active')
})
//**TEKRAR**seçilen option a active classını ekler
optionList.forEach(option => {
    option.addEventListener("click", () => {
        selected.innerHTML = option.querySelector('label').innerText;
        options.classList.remove('active');
    })
})
//**TEKRAR** input değerini click event üzeründen selected kısmına yazdırır. ardındna active classını kaldırarak tekrar seçim penceresini kapatır.

