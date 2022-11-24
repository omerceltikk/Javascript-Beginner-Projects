let container = document.querySelector(".container")
let mainVideo = container.querySelector("video")
let pausePlay = document.querySelector(".pause i")
let skipBack = document.querySelector(".skip-backward")
let skipFor = document.querySelector(".skip-forward")
let videoDuration = document.querySelector(".video-duration")
let currentVidTime = document.querySelector(".current-time")
let volumeBox = container.querySelector(".volume i")
let volumeSlider = container.querySelector(".left input")
let speedOptions = document.querySelector(".speed-options")
let picInpic = document.querySelector(".pic-in-pic")
let fullScreenBtn = document.querySelector(".fullscreen i")
let speedBtn = document.querySelector(".playback-speed span")
let progressBar = container.querySelector(".progress-bar")
let videoTimeline = container.querySelector(".video-timeline")

// mousemove with show control panel
let timer;
let hideControls = () => {
    if(mainVideo.paused) return;
    setTimeout(() => {
        container.classList.remove("show-controls")
    },5000)
}
hideControls();
container.addEventListener("mousemove", () => {
    container.className ="container show-controls"
    clearTimeout(hideControls)
    hideControls();
})
//**TEKRAR**5 saniye ile control paneli kapatıp açma

mainVideo.addEventListener("click",()=> {
    if(mainVideo.paused){
        mainVideo.play()
    }else{
        mainVideo.pause()
    }
    container.className ="container show-controls"
    clearTimeout(hideControls)
    hideControls();
})
//**TEKRAR**video ekranına basınca start pause

//make video time and progress bar configuration
mainVideo.addEventListener("timeupdate",e =>{
    let{currentTime, duration} = e.target;
    let percent = (currentTime / duration *100)
    progressBar.style.width=`${percent}%`
    currentVidTime.innerHTML= formatTime(currentTime);
    videoDuration.innerText=formatTime(mainVideo.duration)
});
//**TEKRAR**süre geçtikçe progress bar ve zamanlamanın uyumu sağlandı 

// setting time function
let formatTime=(time) => {
    let secs = Math.floor(time % 60)
    let minutes = Math.floor(time / 60) % 60
    let hours = Math.floor(time / 3660)

    secs = secs < 10 ? `0${secs}` : secs;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;

    if (hours == 0){
        return `${minutes}:${secs}`
    }
    return `${hours}:${minutes}:${secs}`
}

//progress bar üzerinde tıklandığında videonun tıklanılan süre kısmına gitme
let draggableProgress = (e) => {
    let timelineWidth = e.target.clientWidth;
    progressBar.style.width = `${e.offsetX}px`
    mainVideo.currentTime = (e.offsetX / timelineWidth)* mainVideo.duration;
    currentVidTime.innerHTML= formatTime(mainVideo.currentTime);
}
//**TEKRAR** offsetX ile tıklanınlan yerin pixeli ile progress barın uyumu sağlanmıştır.
//progress bar üzerinde tıklandığında videonun tıklanılan süre kısmına gitme
videoTimeline.addEventListener("click", e =>{
    let timelineWidth = e.target.clientWidth;
    mainVideo.currentTime = (e.offsetX / timelineWidth)* mainVideo.duration;
});
//progress bar üzerinde mouse il sürüklemeyi sağlama
videoTimeline.addEventListener("mousedown", e=>{
  videoTimeline.addEventListener("mousemove", draggableProgress)
});

//**TEKRAR** mousemove ve mouse down ile sürükleme eventi sağlandı
//progress bar üzerinde sürüklemeyi durdurma
container.addEventListener("mouseup", e=>{
    videoTimeline.removeEventListener("mousemove", draggableProgress)
  });
  //mousemove ile progressbar üzerinde sürei gösterme
videoTimeline.addEventListener("mousemove", (e)=> {
    const progressTime = videoTimeline.querySelector("span")
    let offsetX = e.offsetX;
    progressTime.style.left = `${offsetX}px`
    let timeLineWidth = videoTimeline.clientWidth;
    let percent = (e.offsetX / timeLineWidth) * mainVideo.duration
    progressTime.innerText = formatTime(percent)
});
//**TEKRAR** sürenin mouse ile hareket edebilmesi için offsetX kullanıldı

//10 sec skip back
skipBack.addEventListener("click", ()=>{
 mainVideo.currentTime -= 10;   
})
//10 sec skip forward
skipFor.addEventListener("click", ()=>{
 mainVideo.currentTime += 10;   
})
//video played paused
pausePlay.addEventListener("click",()=> { 
mainVideo.paused ? mainVideo.play() : mainVideo.pause();
})
//play icon
mainVideo.addEventListener("play",()=>{
    pausePlay.classList.replace("fa-play", "fa-pause")
})
//pause icon
mainVideo.addEventListener("pause",()=>{
    pausePlay.classList.replace("fa-pause", "fa-play")
});
//picture in picture button
picInpic.addEventListener("click",() => {
mainVideo.requestPictureInPicture();
})
//fullcreen
fullScreenBtn.addEventListener("click", ()=> {
    if(document.fullscreenElement){
        fullScreenBtn.classList.replace("fa-compress", "fa-expand")
        return mainVideo.exitFullscreen();
    }
    fullScreenBtn.classList.replace("fa-expand", "fa-compress");
    mainVideo.requestFullscreen();
})
//make video volume with input value
volumeSlider.addEventListener("input", e =>{
    mainVideo.volume = e.target.value
    if(e.target.value==0){
        volumeBox.classList.replace("fa-volume-high", "fa-volume-xmark")
    }else{
        volumeBox.classList.replace("fa-volume-xmark", "fa-volume-high")
    }
});
//video volume mute and change icon
volumeBox.addEventListener("click", () => {
    if(volumeBox.classList.contains("fa-volume-high")){
        mainVideo.volume= 0.0;
        volumeBox.classList.replace("fa-volume-high", "fa-volume-xmark")
    }else{
        mainVideo.volume = 1.0;
        volumeBox.classList.replace("fa-volume-xmark", "fa-volume-high")
    }
});
//show speed options
speedBtn.addEventListener("click", () => {
    console.log(speedOptions.children)
    speedOptions.classList.toggle("show")
});
//close speed options when any click on document
document.addEventListener("click", e => {
    if(e.target.tagName !== "SPAN" || e.target.className !== "material-symbols-rounded"){
        speedOptions.classList.remove("show")
    }
})
//video speed and button active class 
speedOptions.querySelectorAll("li").forEach(option => {
    console.log(option.innerText)
    
    option.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active")
        if(option.innerText == "2x"){
            mainVideo.playbackRate = 2.0;
            option.classList.add("active")
        };
        if(option.innerText == "1.5x"){
            mainVideo.playbackRate = 1.5;
            option.classList.add("active")
        };
        if(option.innerText == "Normal"){
            mainVideo.playbackRate = 1.0;
            option.classList.add("active")
        };
        if(option.innerText == "0.75x"){
            mainVideo.playbackRate = 0.75
            option.classList.add("active")
        };
        if(option.innerText == "0.5x"){
            mainVideo.playbackRate = 0.5;
            option.classList.add("active")
        };
    })
})
