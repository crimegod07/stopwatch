window.onload = () => {

var seconds = 00; 
var milliSec = 00;


//Taking Elements  Id And Storing In Variable  
var addSeconds = document.getElementById("seconds");   
var addMillsec = document.getElementById("milli-sec");
var buttonStart = document.getElementById("start");
var buttonStop = document.getElementById("stop");
var buttonReset = document.getElementById("reset");
var interval;

//  Start Stop And Reset Button functions   
buttonStart.onclick = () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
    buttonStart.disabled = true;
    buttonStop.disabled = false;
}

buttonStop.onclick = () => {
    clearInterval(interval);
    buttonStop.disabled=true;
    buttonStart.disabled=false;
}

buttonReset.onclick = () => {
    clearInterval(interval);
    seconds = "00";
    milliSec ="00";

    addSeconds.innerHTML = seconds;
    addMillsec.innerHTML = milliSec;
    buttonStart.disabled=false;
    buttonStop.disabled=false;
}


// Function Of start timer
function startTimer (){
    milliSec++;

    if(milliSec <=9){
        addMillsec.innerHTML ="0" + milliSec;
    }

    if(milliSec > 9){
        addMillsec.innerHTML=milliSec;
    }

    if(milliSec > 99){
        seconds++;
        addSeconds.innerHTML ="0" + seconds;
        milliSec = 0;
        addMillsec.innerHTML = "0" + 0; 
    }
    if(seconds > 9){
        addSeconds.innerHTML = seconds;
    }
}
}