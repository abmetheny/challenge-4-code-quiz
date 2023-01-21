// Variables to correspond to HTML elements
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
var initialsList = document.getElementById("initialsList");
var scoreText = document.getElementById("score");
var scoreList = document.getElementById("scoreList");

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

// Functions for question and answer rendering
function startQuiz() {
    startButton.style.display = "none";
    loadQuestion();
    quizContainer.style.display = "block";
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
        // setScore();
        checkLength();
    }
    else {
        console.log("Incorrect :(");
        checkLength();
    }
}

function checkLength() {
    if (currentQuestion < lastQuestion) {
        currentQuestion++;
        loadQuestion();
    }
    else {
        console.log("There are no more questions.");
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

    // console.log(Object.keys(storedInitials));
    // console.log(Object.values(storedInitials));
    scoreContainer.style.display = "block";

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
        // initialsList.append(`${highScoreKeys[i]}\r\n`);
        // scoreList.append(`${highScoreValues[i]}\r\n`);

        
    }

}



// Event listeners
startButton.addEventListener("click", startQuiz);



// answer1.addEventListener("click", checkAnswer);
// answer2.addEventListener("click", checkAnswer);
// answer3.addEventListener("click", checkAnswer);
// answer4.addEventListener("click", checkAnswer);


// function populateQuiz(event) {
//     var element = event.target.textContent;
//     if (element) {
//         loadNextQuestion();
//     }
// }

// function loadNextQuestion() {
    // for (var i = 0; i < allQuestions.length; i++) {
    //     console.log(i, allQuestions[i]);
    //     questionText = question.textContent = allQuestions[i].question;
    //     answer1Text = answer1.textContent = allQuestions[i].allAnswers[0];
    //     answer2Text = answer2.textContent = allQuestions[i].allAnswers[1];
    //     answer3Text = answer3.textContent = allQuestions[i].allAnswers[2];
    //     answer4Text = answer4.textContent = allQuestions[i].allAnswers[3];
    // }
    // return;
// }

// function checkAnswer(event) {
//     var element = event.target.textContent;
//     if (element) {
//         if (element === allQuestions[i].correctAnswer) {
//             console.log("correct!");
//         }
//         else {
//             console.log("incorrect");
//         } 
//     }
//     loadNextQuestion();
// }


// function setScore() {
//     localStorage.setItem("score", scoreCount);
// }

// function displayScore() {
//     var storedScore = localStorage.getItem("score");

//     if (storedScore === null) {
//         scoreCount = "";
//     }
//     else {
//         scoreCount = storedScore;
//     }

//     scoreText.textContent = scoreCount;
// }



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




// Question and answer object arrays

// var questions = ["Commonly used data types DO NOT include:", "The condition in an if/else statement is enclosed in _________.", 
// "Arrays in JavaScript can be used to store ________.", "String values must be enclosed in ________ when being assigned to variables.",
// "A very useful tool used during development and debugging for printing content to the debugger is:",];
// var answerAs = ["strings", "quotes", "numbers and strings", "commas", "JavaScript"];
// var answerBs = ["booleans", "curly brackets", "other variables", "curly brackets", "terminal/bash"];
// var answerCs = ["alerts", "parentheses", "booleans", "quotes", "for loops", ];
// var answerDs = ["numbers", "square brackets", "all of the above", "parentheses", "console.log"];
// var correcAnswers = ["alerts","parentheses", "all of the above", "quotes", "console.log"]


// function whatever(tacocat){
//     let isPalindrome = tacocat.split("").reverse().join("")

// return (isPalindrome == tacocat) ? "true" : "false"
// }