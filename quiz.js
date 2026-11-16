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

    // Gets the selected answer for a multiple-choice question
    function getRadioAnswer(questionName) {
    const selectedAnswer = quizForm.querySelector(
        'input[name="' + questionName + '"]:checked'
    );

    if (selectedAnswer) {
        return selectedAnswer.value;
    } else {
        return "";
    }
}

// Grades the quiz when the student submits it
quizForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Stop the timer when the quiz is submitted
    clearInterval(countdown);

    let score = 0;

    // Check Questions 1 and 2 (fill-in-the-blank)
    const q1 = document.getElementById("q1").value.trim().toLowerCase();
    const q2 = document.getElementById("q2").value.trim().toLowerCase();

    if (q1 === answerKey.q1) {
        score++;
    }

    if (q2 === answerKey.q2) {
        score++;
    }

    // Check Questions 3 through 7 (multiple choice)
    if (getRadioAnswer("q3") === answerKey.q3) {
        score++;
    }

    if (getRadioAnswer("q4") === answerKey.q4) {
        score++;
    }

    if (getRadioAnswer("q5") === answerKey.q5) {
        score++;
    }

    if (getRadioAnswer("q6") === answerKey.q6) {
        score++;
    }

    if (getRadioAnswer("q7") === answerKey.q7) {
        score++;
    }

    // Check Question 8 (multiple select)
    const selectedCheckboxes = quizForm.querySelectorAll(
        'input[name="q8"]:checked'
    );

    let q8Answers = [];

    selectedCheckboxes.forEach(function(checkbox) {
        q8Answers.push(checkbox.value);
    });

    if (
        q8Answers.length === answerKey.q8.length &&
        answerKey.q8.every(function(answer) {
            return q8Answers.includes(answer);
        })
    ) {
        score++;
    }

    // Check Questions 9 and 10 (multiple choice)
    if (getRadioAnswer("q9") === answerKey.q9) {
        score++;
    }

    if (getRadioAnswer("q10") === answerKey.q10) {
        score++;
    }

    // Display the final score
    document.getElementById("result-summary").textContent =
        "Your score: " + score + " out of 10";

    // Show the results section
    resultsSection.hidden = false;
});




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
