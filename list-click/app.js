let selected = document.querySelector(".selected")
let options = document.querySelector(".options")
let optionList = document.querySelectorAll(".option")



selected.addEventListener("click", () => {
    options.classList.toggle('active')
})

optionList.forEach(option => {
    option.addEventListener("click", () => {
        selected.innerHTML = option.querySelector('label').innerText;
        options.classList.remove('active');
    })
})

