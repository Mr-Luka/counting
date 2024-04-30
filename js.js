const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const counting = document.querySelector(".counting")
const reset = document.querySelector(".reset");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
let totalSeconds = 0;
const timeDelay = 10000;



// START //
start.addEventListener("click", function(){
    setInterval(setTime, 1000);

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
})


// RESET //
reset.addEventListener("click", function (){
    totalSeconds = 0;
})

