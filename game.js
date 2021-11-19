var quizEl = document.querySelector('#quiz');
var startBtn = document.querySelector('#play-btn');
var results = document.querySelector('#results');
var timerEl = document.querySelector('#timer');
var headers = document.querySelector('.headers');
var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
var scoreText = document.querySelector('#score');

var secondsLeft = 120;

let currentQuestions = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

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

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5; 

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...question];
    getNewQuestion();
}

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
    }
    
    questionCounter++
    var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestions = availableQuestions[questionsIndex]
    question.innerHTML = currentQuestions.question

    choices.forEach(function choice() {
        var number = choice.dataset['number']
    })

    availableQuestions.splice(questionsIndex, 1) 

    acceptingAnswers = true
}


// function to set timer. 
function setTime() {
    headers.style.display = "none";
    startBtn.style.display = "none";
    var timerInterval = setInterval(function() {
        
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds remaining.";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
};

// function for sending message once the time has expired. 
function sendMessage() {
    timerEl.textContent = "Game Over!";
};

// function for showing the quiz. 


// clickability added to the start button. calls up the timer function and quiz function
startBtn.addEventListener('click', setTime);

// click added to show results when submitBtn is selected. 
//submitBtn.addEventListener("click", showResults);

