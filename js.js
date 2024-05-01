const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const counting = document.querySelector(".counting")
const reset = document.querySelector(".reset");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
let totalSeconds = 0;
let pauseE = false;
let intervalId;

function setTime(){
    totalSeconds++;
    seconds.textContent = pad(parseInt(totalSeconds%60));
    minutes.textContent = pad(parseInt(totalSeconds/60));
}

function pad (val){
    const valString = val + "";
    if(valString.length < 2){
        return "0" + valString;
    } else {
        return valString;
    }
}

// START //
start.addEventListener("click", function(){
    if(!intervalId){
        if(pauseE){
            intervalId = setInterval(setTime, 1000);
            pauseE = false;
            counting.classList.add("leAnimate")
        } else {
    counting.classList.add("leAnimate")
    intervalId = setInterval(setTime, 1000);
        }
    }
})

// RESET //
reset.addEventListener("click", function (){
    totalSeconds = 0;
})

// Pause //
function handlePause(){
    pauseE = !pauseE;
    if (pauseE){
        clearInterval(intervalId);
        intervalId = null;
    } 
}
pause.addEventListener("click", handlePause)