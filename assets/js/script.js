// Variables to correspond to HTML elements
var startContainer = document.getElementById("startWrapper");
var startButton = document.getElementById("start");
var quizContainer = document.getElementById("quizWrapper");
var question = document.getElementById("question");
var answersContainer = document.getElementById("answersWrapper");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var scoreContainer = document.getElementById("scoreWrapper");
var initialsText = document.getElementById("initials");
// var initialsList = document.getElementById("initialsList");
var scoreText = document.getElementById("score");
// var scoreList = document.getElementById("scoreList");
var timerContainer = document.getElementById("timerWrapper");
var timerText = document.getElementById("timer");


// Variables for question and answer rendering
var allQuestions = [{
    question: "Commonly used data types DO NOT include:",
    choice1: "strings",
    choice2: "booleans",
    choice3: "alerts",
    choice4: "numbers",
    correctAnswer: "3",
    }, {
    question: "The condition in an if/else statement is enclosed in _________.",
    choice1: "quotes",
    choice2: "curly brackets",
    choice3: "parentheses",
    choice4: "square brackets",
    correctAnswer: "3",
    }, {
    question: "Arrays in JavaScript can be used to store ________.",
    choice1: "numbers and strings",
    choice2: "other variables",
    choice3: "booleans",
    choice4: "all of the above",
    correctAnswer: "4",
    }, {
    question: "String values must be enclosed in ________ when being assigned to variables.",
    choice1: "commas",
    choice2: "curly brackets",
    choice3: "quotes",
    choice4: "parentheses",
    correctAnswer: "3",
    }, {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: "JavaScript",
    choice2: "terminal/bash",
    choice3: "for loops",
    choice4: "console.log",
    correctAnswer: "4",
    },
];
const lastQuestion = allQuestions.length - 1;
var currentQuestion = 0;

// Variables for stored scores and initials
var scoreCount = 0;
var initials = "";
var highScore = "";

// Variables for timer
var timer;
var timerCount;
var isWin = false;

// Functions for running the timer
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerText.textContent = "Time remaining: " + timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        timeUp();
      }
    }, 1000);
}

function timeUp() {
    quizContainer.style.display = "none";
    // timerContainer.style.display = "none";
    alert("Time's up!  Please try again.");
    startWrapper.style.display = "flex";
}

// Functions for question and answer rendering
function startQuiz() {
    startWrapper.style.display = "none";
    timerCount = 30;
    startTimer();
    loadQuestion();
    quizContainer.style.display = "flex";
}

function loadQuestion() {
    var q = allQuestions[currentQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    answer1.innerHTML = q.choice1;
    answer2.innerHTML = q.choice2;
    answer3.innerHTML = q.choice3;
    answer4.innerHTML = q.choice4;
}

function checkAnswer(answer) {
    if (answer == allQuestions[currentQuestion].correctAnswer) {
        console.log("Correct!");
        scoreCount++;
        console.log(scoreCount);
        checkLength();
    }
    else {
        console.log("Incorrect :(");
        checkLength();
        timerCount = timerCount - 5;
    }
}

function checkLength() {
    if (currentQuestion < lastQuestion) {
        currentQuestion++;
        loadQuestion();
    }
    else {
        console.log("There are no more questions.");
        clearInterval(timer);
        quizContainer.style.display = "none";
        enterInitials();
    }
}

// Functions for capturing high scores and initials
function enterInitials() {
    initials = prompt("Enter your initials to record your score:");
    localStorage.setItem(initials, scoreCount);
    displayInitials();
}

function displayInitials() {
    var storedInitials = {...localStorage};
    console.log(storedInitials);
    var highScoreKeys = Object.keys(storedInitials);
    var highScoreValues = Object.values(storedInitials);

    // timerContainer.style.display = "none";
    scoreContainer.style.display = "flex";

    for (let i = 0; i < highScoreKeys.length; i++) {
        
        if (storedInitials === null) {
            initials = "";
        }
        else {
            initials = highScoreKeys;
            highScore = highScoreValues;
        }

        var liInitials = document.createElement('li');
        liInitials.appendChild(document.createTextNode(`${highScoreKeys[i]}`))
        document.getElementById('initials').appendChild(liInitials);

        var liScore = document.createElement('li');
        liScore.appendChild(document.createTextNode(`${highScoreValues[i]}`));
        document.getElementById('score').appendChild(liScore);
        
    }

    // sortList(highScoreValues);

}

// function sortList(highScoreValues) {
//     var listItem = document.getElementById('score').highScoreValues;
//     var listLength = score.length;
//     var list = [];
//     for (var i = 0; i < listLength; i++) {
//         list[i] = listItem[i].firstChild.nodeValue;
//         list.sort();
//     }
//     for (var i = 0; i < listLength; i++) {
//         listItem[i].firstChild.nodeValue = list[i];
//     }
// }

// Event listeners
startButton.addEventListener("click", startQuiz);