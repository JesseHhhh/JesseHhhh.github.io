document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("seo-quiz");
    const timerDisplay = document.getElementById("timer");
    const resultsSection = document.getElementById("results");

    // Correct answers for the SEO quiz
    const answerKey = {
    q1: "search engine optimization",
    q2: "keywords",
    q3: "a",
    q4: "b",
    q5: "c",
    q6: "a",
    q7: "a",
    q8: ["a", "b", "c"],
    q9: "a",
    q10: "b"
};


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
