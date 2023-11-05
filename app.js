





//  stop--Watch 
var hour = "0" + 0;
var min = "0" + 0;
var sec = "0" + 0;
var milisec = "0" + 0;
var getHour = document.getElementById('hour');
var getmin = document.getElementById('min');
var getsec = document.getElementById('sec');
var getMiliSec = document.getElementById('m-sec');
var interval;  


function start(){
   interval = setInterval(function(){
        milisec++
        getMiliSec.innerHTML = milisec + "ms ";
        if(milisec >= 100){
            sec++
            getsec.innerHTML = sec + "s ";
            milisec = "0" + 0;
        }
        else if(sec >= 60){
            min++
            getmin.innerHTML = min + "m ";
            sec = "0" + 0;
        }
        else if (min >= 60){
            hour++
            getHour.innerHTML = hour + "h ";
            min = "0" + 0;
        }
      
    },10)

    document.getElementById('startDisable').disabled = true;
}

function stop(){
    clearInterval(interval);
    document.getElementById('startDisable').disabled = false; 

   
}


function reset(){
     hour = "0" + 0;
     min = "0" + 0;
     sec = "0" + 0;
     milisec = "0" + 0;
     getHour.innerHTML = hour + "h ";
     getmin.innerHTML = min + "m ";
     getsec.innerHTML = sec + "s " ;
     getMiliSec.innerHTML = milisec + "ms ";
}










// timer.....
var milliseconds = + 0;
var seconds =  + 0;
var minutes = 15;
var timerMinutes = document.getElementById("timer-min");
const timerSeconds = document.getElementById("timer-sec");
const timerMilliseconds = document.getElementById("timer-ms");
var timerInterval;


function startTimer(){
 timerInterval = setInterval(function(){
    milliseconds++
    timerMilliseconds.innerHTML = milliseconds + "ms"
    if(milliseconds >= 100){
        seconds++
        timerSeconds.innerHTML = seconds +"s"
         milliseconds=  + 0;
    }else if(seconds >= 60){
        minutes--
        timerMinutes.innerHTML = minutes +"m"
        seconds= + 0;
     }else if(minutes <= 15){
        timerMilliseconds.innerHTML = milliseconds + "ms"
        timerSeconds.innerHTML = seconds + "s"
        timerMinutes.innerHTML = minutes + "m"
}
},10)
// clearInterval(timerInterval)
document.getElementById('timerStartDisable').disabled = true;
}
function stopTimer(){
    clearInterval(timerInterval)
    document.getElementById('timerStartDisable').disabled = false;
}
function resetTimer(){
    minutes =  15;
    seconds =  + 0;
    milliseconds = + 0;
    timerMinutes.innerHTML = minutes + "m ";
    timerSeconds.innerHTML = seconds + "s " ;
    timerMilliseconds.innerHTML = milliseconds + "ms ";
}






