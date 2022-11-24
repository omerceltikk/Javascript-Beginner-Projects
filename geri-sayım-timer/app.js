let day = document.querySelector(".day")
let hour = document.querySelector(".hour")
let minute = document.querySelector(".minute")
let sec = document.querySelector(".sec")
let msec = document.querySelector(".msec")

 function timer(){
    let endDate = new Date("Jan 1,2023 00:00:00").getTime();
    let now = new Date().getTime();
    let time = endDate-now;

    let gunler = Math.floor(time / (1000*60*60*24));
    let saatler = Math.floor((time % (1000*60*60*24)) / (1000*60*60));
    let dakika = Math.floor((time % (1000*60*60)) / (1000*60));
    let saniye = Math.floor((time %(1000*60)) / (1000));
    let milisaniye = Math.floor(time % (1000))

   if(time >= 0) {day.innerHTML=gunler + " DAY /"
    hour.innerText=saatler + " HOUR /"
    minute.innerText=dakika + " MİN. /"
    sec.innerText=saniye + " SEC. /"
    msec.innerText=milisaniye + " MSEC."
}
}
setInterval(timer,10)

//**TEKRAR** timer fonksiyonu altında bir enddate tanımı verdik. bu enddate ten kendi zaman aralığımızı çıkardık ve ger sayımı oluşturduk. Ardından gun ay yıl vb hesaplaması ile bunu html e yazdırdık.