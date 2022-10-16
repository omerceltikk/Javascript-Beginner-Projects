let btn = document.querySelector("#body")
let bodies = document.querySelector("body")


const codeArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
//6 haneli renk kodlarını oluşturmak için gerekli olan dizi

console.log(codeArray[Math.floor(Math.random() * codeArray.length)]);
// math floor random kullanarak oluştrurulan, dizi içersiniden rastgele bir elemanı seçmemize yarayan işlem
//Math.random 0 - 1 aralığında virgüllü bir sayı verir 
//direkt math.floor ile kullanırsak 0 a yuvarlar
//math.floor u array uzunluğu ile çarparsak artık bize 0-1 aralığında bir random sayı değil 0-1*array.length uzunluğunda bir değer verir örneğin 0-5 aralığı gibi

function createButton() {
    let create = document.createElement("button");
    create.innerHTML = "Renk değiştirme";
    create.className = "btn btn-dark mt-5"
    btn.appendChild(create)
}
createButton();
// create button işlemi

 function colorCodes(){
    let codes = '#'
    for(let i =0; i < 6 ; i++){
        codes += codeArray[Math.floor(Math.random() * codeArray.length)]
        
    }
    return codes;
 }
 //kullandığımız math floor random işlemini for döngüsüyle 6 haneli renk koduna çeviren işlem 

 let btnn = document.querySelector(".btn")

btnn.addEventListener("click",function(){
    let cCodes = colorCodes();  
    bodies.style.backgroundColor = cCodes;
    body.style.backgroundColor = cCodes;
})
//click fonksiyonuyla renk paletinden sayısız renk oluşturabilen click fonksiyonu
 
// setInterval(function(){
//     btn.onClick()
// },1000);
//butona 1000 ms de bir sürekli tıklayan fonksiyon onClick etkinliği üzeinde çalışıyor