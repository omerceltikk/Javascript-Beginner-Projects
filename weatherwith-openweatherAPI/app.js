let card = document.querySelector(".card")
let input = document.querySelector(".input")
let url = "https://api.openweathermap.org/data/2.5/"
let locationUrl = " http://api.openweathermap.org/geo/1.0/"
let apiKey = "07d464ac349f7281b7c32c4afb11ca53"

let body = document.querySelector("body")

// input valuesini entera basınca göndren fonksiyon
let setKey = (e) => {
    if(e.keyCode == '13'){
        getResult(input.value)
        
    }
}


let getResult = (cityName) => {
    let city = `${locationUrl}direct?q=${cityName}&appid=${apiKey}`
    fetch(city)
    .then(weather => {
        return weather.json()
    })
    .then(function(result){
        console.log(result)
        console.log(result[0].lat)
        let resultCity = `${url}weather?lat=${result[0].lat}&lon=${result[0].lon}&appid=${apiKey}&units=metric&lang=tr`
        console.log(resultCity)
        fetch(resultCity)
        .then(weath => {
            return weath.json()
        })
        .then(finalResult)
    })
}
let finalResult = (result) => {
    console.log(result)
    let city=document.querySelector(".city")
    city.innerText = `${result.name}, ${result.sys.country}`

    let degree = document.querySelector(".degree")
    degree.innerText = `${Math.round(result.main.temp)}°C`

    let situation = document.querySelector(".weather")
    situation.innerText =`${result.weather[0].description}`

    let minmax = document.querySelector(".minmax")
    minmax.innerText = `${Math.floor(result.main.temp_min)}°C / ${Math.ceil(result.main.temp_max)}°C`
}
input.addEventListener("keypress",setKey)


setInterval(function(){
let random = Math.floor(Math.random() * 100)
let random2 = Math.floor(Math.random() * 200)
    body.style.backgroundImage=`
    radial-gradient(at 12% 67%, hsla(193,${random}%,64%,1) 0px, transparent 50%),
    radial-gradient(at 9% 56%, hsla(115,${random}%,76%,1) 0px, transparent 50%),
    radial-gradient(at 10% 39%, hsla(326,${random}%,61%,1) 0px, transparent 50%),
    radial-gradient(at 33% 72%, hsla(56,${random}%,67%,1) 0px, transparent 50%),
    radial-gradient(at 49% 27%, hsla(320,${random}%,71%,1) 0px, transparent 50%),
    radial-gradient(at 91% 45%, hsla(44,${random}%,64%,1) 0px, transparent 50%),
    radial-gradient(at 12% 53%, hsla(19,${random}%,64%,1) 0px, transparent 50%)`
return random;
},2000
)
colorTheme();

// let cssUrl = document.styleSheets[0]

// let cssMyRule = cssUrl.cssRules? cssUrl.cssRules: cssUrl.rules

// console.log(cssUrl);

// console.log(document.styleSheets[0].cssRules[2].style.backgroundImage)

// let cssDOM = document.styleSheets[0].cssRules[2].style.backgroundImage
