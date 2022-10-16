let year = document.querySelector("#year")
let week = document.querySelector(".week")
let day = document.querySelector(".day")
let button = document.querySelectorAll(".button")
let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
let leftButton = document.querySelector("#leftButton")

let date = new Date()
let currYear = date.getFullYear()
let currMonth = date.getMonth()

let getDate = () => {
    //ayın ilk gününün haftanın kaçıncı gününe denk geldiğini gösterir. 0-6 arasında 1/9/22 günü 6. güne denk geliyor
    let firstDayOfMonth = new Date(currYear,currMonth ,1).getDay();
    let lastDateofMonth = new Date(currYear,currMonth +1 ,0).getDate();
    //ayın son gününün haftanın kaçıncı gününe denk geldiğini gösterir. 0-6 arasında 30/9/22 günü 1. güne denk geliyor
    let lastDayofMonth = new Date(currYear,currMonth ,lastDateofMonth).getDay();
    //ayın kaç gün çektiğini gösterir 0 kullanılmasının sebebi tamamiyle ayın kaç gün olduğunu anlamaktır
    let lastDateofLastMonth = new Date(currYear,currMonth ,0).getDate();
    // let february = new Date(2022,2,0).getDate(); şubat deneme**
    // console.log(february) 
    // console.log(lastDateofMonth)
    // console.log(firstDayOfMonth)
    // console.log(currYear)
    // console.log(currMonth)
    // console.log(lastDateofLastMonth)
    // console.log(lastDayofMonth)
    // console.log(lastDayofMonth) console log örnekleri;
    
    
    let liTag = "";
   //azalan index tanımlayarak ayın kaç çektiğinden sırasıyla 0 dan başlaarak çıkarttık ve bunu ayın 1 inden önceki yere yazdık. burada ilk olarak önceki ayın inactive öğeleriyle başlandı. +1 i ise 0 dan 6 ya olması sebebiyle koyduk.
    for (let i = firstDayOfMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth-i +1}</li>`;
    }
    //bulunulan ayın günleri tanımlanmıştır. ayın kaç çektiğine küçük eşit tanımlanmıştır.
    
    for (let i = 1; i <= lastDateofMonth; i++) {
       let isToday = i === date.getDate() && currMonth === new Date().getMonth()
        && currYear === new Date().getFullYear() ? "active" : "";
    // istoday tanımlaması ayın içerisindeki günün ve yılın doğru olup olmadığını kontrol eder. eğer index aynı gün aynı ay ve aynı yıl içerisindeğse active fonksiyonu ile bulunulan günü gösterir.
        liTag += `<li class="${isToday}">${i}</li>`; 
    //litag içerisindeki index ile direkt günler eklenir.
    }
    //direk index verdiğimizde haftanın 0-6 arasındaki gününü göseriyor. bu fomülize ile haftanın gününden ayın son gününün hafta içindeki kaçıncı güne geldiğini yazarız. +1 ile de 0-6 yı hafta gün sayısına tamamlarız.
    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i-lastDayofMonth +1}</li>`;
        
    }
    year.innerText=`${month[currMonth]} / ${currYear}`;
    day.innerHTML=liTag
}
getDate();
//haftanın günleri
function getWeek() {
 dayNames.forEach(function(item,index,array){
    let p = document.createElement("p")
    p.innerText=dayNames[index]
    week.appendChild(p)
 });

}
getWeek();
//if yapısıyla 2022 dışındaki yıllara geçtiğimzde yapının devam etmesini sağladık.
button.forEach(icon => {
    icon.addEventListener("click", function(){
        currMonth  = icon.id === "leftButton" ? currMonth -1 : currMonth +1;
        if (currMonth<0 || currMonth>11){
            date = new Date(currYear,currMonth);
            currYear=date.getFullYear();
            currMonth=date.getMonth();
        }else{
            date = new Date();
        }
        getDate();
    });
});

