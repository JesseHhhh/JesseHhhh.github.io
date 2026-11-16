document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("seo-quiz");
    const timerDisplay = document.getElementById("timer");
    const resultsSection = document.getElementById("results");


let timeLeft =600; 

const timer = document.getElementById("timer");

const countdown = setInterval (function() {
    // math floor calculates the number of minutes 
    let minutes = Math.floor(timeLeft/60);
    let seconds = timeLeft %60;

    //textContent updates the timer shown in the page
    timer.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

    timeLeft--;

    if (timeLeft < 0) {
        //clearInterval stops the countdown when it finishes
        clearInterval(countdown);
        alert("Time is up!");
    }
},1000);
});
