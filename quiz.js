document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("seo-quiz");
    const timerDisplay = document.getElementById("timer");
    const resultsSection = document.getElementById("results");

    let timeLeft = 600;

    const countdown = setInterval(function() {
        // Math.floor calculates the number of minutes
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        // textContent updates the timer shown on the page
        timerDisplay.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        timeLeft--;

        if (timeLeft < 0) {
        // clearInterval stops the countdown
        clearInterval(countdown);

        // Automatically submits the quiz when time runs out
        quizForm.requestSubmit();
    
        }
    }, 1000);
});
