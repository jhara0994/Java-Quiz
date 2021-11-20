var headers = document.querySelector('.headers');
var quizEl = document.querySelector('#quiz');
var quizQ = document.querySelector('#question');
var quizA = document.querySelector('#answer');
var startBtn = document.querySelector('#btn-start');
var results = document.querySelector('#results')
var timerEl = document.querySelector('.timer');

var secondsLeft = 120;

const SCORE_POINTS = 50;
const MAX_QUESTIONS = 5; 
const WRONG_ANSWER = -10;


// quiz questions
var myQuestions = [
    {
        question: "What is the method use to print data to your log?",
        answers: {
            a: "console.log",
            b: "application.log",
            c: "google.console",
        },
        correctAnswer: "a"
    },
    {
        question: "What code is used to add text to a variable?",
        answers: {
            a: ".append",
            b: ".paragraph",
            c: ".textContent",
        },
        correctAnswer: "c"
    },
    {
        question: "What code is used to add a variable's value to certain portion the HTML?",
        answers: {
            a: ".appendChild",
            b: ".alert",
            c: ".addList",
        },
        correctAnswer: "a",
    },
    {
        question: "How do you connect a variable to a specific HTML element?",
        answers: {
            a: ".document",
            b: "document.querySelector",
            c: ".setAttribute",
        },
        correctAnswer: "b",
    },
    {
        question: "What code is essential to blocking the browser's default behavior?",
        answers: {
            a: ".reset",
            b: "event.reset()",
            c: "event.preventDefault()",
        },
        correctAnswer: "c",
    },
]

/*
// function to show quiz 
function showQuiz() {
    body.append(myQuestions);

    
    for(i = 0, i < myQuestions.length, i++) {
        body.append(myQuestions);
    }
}*/


// function to set timer. 
function setTime() {
    headers.style.display = "none";
    startBtn.style.display = "none";
    var timerInterval = setInterval(function() {
        
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds remaining.";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
};

// function for sending message once the time has expired. 
function sendMessage() {
    timerEl.textContent = "Game Over!";
};

// function to get a score and store the score to localStorage.
function getScore() {
    var correctAnswer = []
    if (correctAnswer) {
        results.textContent(SCORE_POINTS)
    }

}

// clickability added to the start button. calls up the timer function and the quiz function.
startBtn.addEventListener("click", setTime);
startBtn.addEventListener("click", showQuiz);

// click added to show results when submitBtn is selected. 
// submitBtn.addEventListener("click", showResults);
