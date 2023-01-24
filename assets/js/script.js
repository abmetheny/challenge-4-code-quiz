// Variables to correspond to HTML elements
var startContainer = document.getElementById("startWrapper");
var viewHighScores = document.getElementById("viewHighScores");
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
var scoreText = document.getElementById("score");
var timerContainer = document.getElementById("timerWrapper");
var timerText = document.getElementById("timer");
var startOverButton = document.getElementById("startOver");
var clearScoresButton = document.getElementById("clearScores");

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

// Adds timer to the page, tests whether the quiz is over or time has run out, and stops the timer
function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerText.textContent = "Time remaining: " + timerCount;
      if (timerCount >= 0) {
        if (isWin && timerCount > 0) {
          clearInterval(timer);
        }
      }
      if (timerCount <= 0) {
        clearInterval(timer);
        timeUp();
      }
    }, 1000);
}

// If time reaches 0, the quiz ends and prompts the user to record their initials to store their score
function timeUp() {
    quizContainer.style.display = "none";
    alert("You ran out of time!");
    enterInitials();
}

// Functions for question and answer rendering

// Reloads the page to land on start screen
function startScreen() {
    location.reload();
}

// Hides the start screen, starts the timer, and loads the first question
function startQuiz() {
    startContainer.style.display = "none";
    scoreContainer.style.display = "none";
    timerCount = 30;
    startTimer();
    loadQuestion();
    quizContainer.style.display = "flex";
}

// Populates text fields using the question/answer array
function loadQuestion() {
    var q = allQuestions[currentQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    answer1.innerHTML = q.choice1;
    answer2.innerHTML = q.choice2;
    answer3.innerHTML = q.choice3;
    answer4.innerHTML = q.choice4;
}

// Checks whether the answer selected is correct; adds to the score count if correct, subtracts time from the timer if incorrect
function checkAnswer(answer) {
    if (answer == allQuestions[currentQuestion].correctAnswer) {
        scoreCount++;
        checkLength();
    }
    else {
        checkLength();
        timerCount = timerCount - 5;
    }
}

// Checks whether there are any more questions/answers to load from the array; if not, prompts the user to enter their initials
function checkLength() {
    if (currentQuestion < lastQuestion) {
        currentQuestion++;
        loadQuestion();
    }
    else {
        clearInterval(timer);
        quizContainer.style.display = "none";
        enterInitials();
    }
}

// Functions for capturing high scores and initials

// Prompts the user to enter their initials until a valid entry is recorded
function enterInitials() {
    initials = prompt("Enter your initials to record your score:");
    if (!initials) {
        alert("Initials must be entered to record score.")
        enterInitials();
    }
    else {
        localStorage.setItem(initials, scoreCount);
        displayInitials();
    }   
}

// Retrieves the initial/score (key/value) pair from local storage, sorts by highest to lowest score, and populates text fields in the HTML
function displayInitials() {
    var storedInitials = {...localStorage};
    var entries = Object.entries(storedInitials);
    var sorted = entries.sort((a, b) => b[1] - a[1]);
    var highScoreKeys = Object.keys(sorted);
    var highScoreValues = Object.values(sorted);

    scoreContainer.style.display = "flex";

    for (let i = 0; i < highScoreValues.length; i++) {
        
        if (storedInitials === null) {
            initials = "";
        }
        else {
            initials = highScoreKeys;
            highScore = highScoreValues;
        }

        var liInitials = document.createElement('li');
        liInitials.appendChild(document.createTextNode(`${highScoreValues[i][0]}`))
        document.getElementById('initials').appendChild(liInitials);

        var liScore = document.createElement('li');
        liScore.appendChild(document.createTextNode(`${highScoreValues[i][1]}`));
        document.getElementById('score').appendChild(liScore);
        
    }

}

// Displays record of high scores from start screen
function viewScores(){
    // Event.preventDefault();
    displayInitials();
    startContainer.style.display = "none";
    quizContainer.style.display = "none";
    scoreContainer.style.display = "flex";
}

// Clears previous scores from local storage
function clearScores() {
    localStorage.clear();
    initialsText.textContent = "Initials: ";
    scoreText.textContent = "Score: ";
}

// Event listeners
startButton.addEventListener("click", startQuiz);
viewHighScores.addEventListener("click", viewScores);
startOverButton.addEventListener("click", startScreen);
clearScoresButton.addEventListener("click", clearScores);