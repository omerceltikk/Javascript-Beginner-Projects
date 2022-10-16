let wordGuess = document.querySelector(".guessword")
let hint = document.querySelector(".title")
let time = document.querySelector(".time")
let input = document.querySelector("#input")
let refreshButton = document.querySelector(".refresh")
let checkButton = document.querySelector(".check")


function getWord()
{
// for(let i = wordGuess.innerText.length-1;i>0;i--){
//    let j = Math.floor(Math.random)*(word+1)

let fetchWord = fetch("https://random-word-api.herokuapp.com/word?length=8")
.then(word => word.json())
.then(word => wordGuess.innerText=word[0])
.then(word => word.split(""))
console.log(fetchWord)
}
getWord();

timeleft = 30;
function countdown(){
    timeleft--;
    time.innerHTML = `Time Left: ${String(timeleft)}s`
    if(timeleft>0){
        setTimeout(countdown,1000)
    }
    if (timeleft == 0) {
        alert("Your Time Is Out!")
    }
}
setTimeout(countdown,1000);

let checkBtn = checkButton.addEventListener("click",function(){
    let guessed = wordGuess.innerText.toLowerCase()
    // console.log(guessed)
    // console.log(input.value)
    if (input.value===""){
        alert("Empty Is Not Correct!")   
    }
    if (input.value === guessed) {
        alert("Congrats,Answer Is Correct!")
    }
    if (input.value !== guessed) {
        alert("Your Answer Is Not Correct!")   
    }
    function restart(){
    timeleft=31;
    }
restart();
function wordFetchFunc(){
    let inputWord = input.value;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`)
    .then(response => response.json())
    .then(data => console.log(data))
}
wordFetchFunc();
});

let refreshBtn = refreshButton.addEventListener("click", ()=> {
    getWord();
    function restart(){
        timeleft=31;
        }
    restart();
});