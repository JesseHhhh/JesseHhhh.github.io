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

    // Display the final score and pass/fail message
    const resultSummary = document.getElementById("result-summary");

    if (score >= 7) {
    resultSummary.textContent =
        "You passed! Your score: " + score + " out of 10.";
    } else {
    resultSummary.textContent =
        "You did not pass. Your score: " + score + " out of 10.";
    }

    // Display feedback for each question
    const questionFeedback = document.getElementById("question-feedback");

    questionFeedback.innerHTML = `
    <p>Question 1: ${q1 === answerKey.q1 ? "Correct" : "Incorrect"}.
    Correct answer: Search Engine Optimization</p>

    <p>Question 2: ${q2 === answerKey.q2 ? "Correct" : "Incorrect"}.
    Correct answer: Keywords</p>

    <p>Question 3: ${getRadioAnswer("q3") === answerKey.q3 ? "Correct" : "Incorrect"}.
    Correct answer: A</p>

    <p>Question 4: ${getRadioAnswer("q4") === answerKey.q4 ? "Correct" : "Incorrect"}.
    Correct answer: B</p>

    <p>Question 5: ${getRadioAnswer("q5") === answerKey.q5 ? "Correct" : "Incorrect"}.
    Correct answer: C</p>

    <p>Question 6: ${getRadioAnswer("q6") === answerKey.q6 ? "Correct" : "Incorrect"}.
    Correct answer: A</p>

    <p>Question 7: ${getRadioAnswer("q7") === answerKey.q7 ? "Correct" : "Incorrect"}.
    Correct answer: A</p>

    <p>Question 8: ${q8Answers.length === answerKey.q8.length &&
    answerKey.q8.every(function(answer) {
        return q8Answers.includes(answer);
    }) ? "Correct" : "Incorrect"}.
    Correct answers: A, B, and C</p>

    <p>Question 9: ${getRadioAnswer("q9") === answerKey.q9 ? "Correct" : "Incorrect"}.
    Correct answer: A</p>

    <p>Question 10: ${getRadioAnswer("q10") === answerKey.q10 ? "Correct" : "Incorrect"}.
    Correct answer: B</p>
`;

    // Show the results section
    resultsSection.hidden = false;
});




    let timeLeft = 600;
    let countdown;

    // Function to start the timer
    function startTimer() {
    countdown = setInterval(function() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        timerDisplay.textContent =
            minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(countdown);
            quizForm.requestSubmit();
        }
    }, 1000);
}

// Reset the quiz when the retake button is clicked
quizForm.addEventListener("reset", function() {
    clearInterval(countdown);

    // Clear previous results
    resultsSection.hidden = true;
    document.getElementById("result-summary").textContent = "";
    document.getElementById("question-feedback").innerHTML = "";

    // Reset the timer
    timeLeft = 600;

    // Start the timer again after the form resets
    setTimeout(startTimer, 0);
});

// Start the timer when the page loads
startTimer();
});

