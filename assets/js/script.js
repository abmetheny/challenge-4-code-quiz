// Write variables to correspond to HTML elements
var question = document.getElementById("question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");


// var submitButton = document.getElementById("submit");

// Quiz question and answer attributes
var allQuestions = [{
    question: "Commonly used data types DO NOT include:",
    allAnswers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
}, {
    question: "The condition in an if/else statement is enclosed in _________.",
    allAnswers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: "parentheses",
}, {
    question: "Arrays in JavaScript can be used to store ________.",
    allAnswers: ["numbers and strings", "other variables", "booleans", "all of the above"],
    correctAnswer: "all of the above",
}, {
    question: "String values must be enclosed in ________ when being assigned to variables.",
    allAnswers: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: "quotes",
}, {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    allAnswers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctAnswer: "console.log",
},
];

question.textContent = allQuestions[0].question;
answer1.textContent = allQuestions[0].allAnswers[0];
answer2.textContent = allQuestions[0].allAnswers[1];
answer3.textContent = allQuestions[0].allAnswers[2];
answer4.textContent = allQuestions[0].allAnswers[3];



// Function to run the quiz

    // Listen for click on start button

        // Timer countdown begins

        // Populate HTML fields with first set of "questions" attributes
        
        // Listen for click on one of the answers

            // If they click on the correct answer, add 1 to total correct value

            //If they click on the wrong answer, subtract time from the timer
        
        // HTML fields cleared and populated with the next question

        // If final question is answered OR if timer = 0, end quiz

        // Prompt user to input initials and store

        // Display score and high scores (indicate which one is the one just finished by highlight?)