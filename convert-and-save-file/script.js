let text = document.querySelector("#text")
let fileName = document.querySelector("#filename")
let format = document.querySelectorAll("option")
let select= document.querySelector("#select")
let saveBtn = document.querySelector(".button");

console.log(select.innerHTML)

console.log(text.value)

// let blob = new Blob(blobContent, Mime-types);
//Blob nesnesi, değişmez, ham verilerin dosya benzeri bir nesnesi olan bir blobu temsil eder; bunlar metin veya ikili veri olarak okunabilir veya bir ReadableStream'e dönüştürülebilir, böylece verileri işlemek için yöntemleri kullanılabilir.

// Bloblar, mutlaka yerel JavaScript biçiminde olması gerekmeyen verileri temsil edebilir. Dosya arabirimi, blob işlevselliğini devralan ve kullanıcının sistemindeki dosyaları desteklemek için genişleten Blob'u temel alır.

// Blobları kullanma
// Blob olmayan diğer nesnelerden ve verilerden bir Blob oluşturmak için Blob() yapıcısını kullanın. Başka bir blobun verilerinin bir alt kümesini içeren bir blob oluşturmak için dilim() yöntemini kullanın. Kullanıcının dosya sistemindeki bir dosya için bir Blob nesnesi almak için Dosya belgelerine bakın.

// Blob nesnelerini kabul eden API'ler, Dosya belgelerinde de listelenir.


saveBtn.addEventListener("click",()=> {
    let blob = new Blob([text.value], {type: select.value});
    //URL.createObjectURL statik yöntemi, parametrede verilen nesneyi temsil eden bir URL içeren bir dize oluşturur.
    //URL ömrü, oluşturulduğu penceredeki belgeye bağlıdır. Yeni nesne URL'si, belirtilen File nesnesini veya Blob nesnesini temsil eder.
    const fileURL = URL.createObjectURL(blob);
    console.log(blob)
    let link = document.createElement("a");//<a> tagi oluşturur
    link.download = fileName.value;// dosya adını bağlantı indirme uzantısı olarak değiştirme
    link.href= fileURL;//indirme linki oluşturma href değeri olarak linki yazdırma
    link.click(); //download linki etkinliği
} )


// **TEKRAR**Blob un tanımlayacağı dosya formatını html içerisinde option value olarak atadık. ardından textarea dan value yi çektik ve option ile bu valueyi type olarak işledik. ve bunları bir evente atadık. belirtildiği gibi reateOBjectURL ile download bağlantısını hazırladık ardından a ve href tanımları üzeründen dosya ismi ve linki tanımladık