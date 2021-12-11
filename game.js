//var quizEl = document.querySelector('#quiz');
var startBtn = document.querySelector('#play-btn');
//var results = document.querySelector('#results');
var headers = document.querySelector('.headers')
var timerEl = document.querySelector('#timer');
var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
var scoreText = document.querySelector('#score');

var secondsLeft = 120;

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
// let questionCounter = 0;
let availableQuestions = [];

// quiz questions
var myQuestions = [
    {
        question: "What is the method use to print data to your log?",
            choice1: "console.log",
            choice2: "application.log",
            choice3: "google.console",
            answer: 1
    },
    {
        question: "What code is used to add text to a variable?",
            choice1: ".append",
            choice2: ".paragraph",
            choice3: ".textContent",
            answer: 3
    },
    {
        question: "What code is used to add a variable's value to certain portion the HTML?",
            choice1: ".appendChild",
            choice2: ".alert",
            choice3: ".addList",
            answer: 1
    },
    {
        question: "How do you connect a variable to a specific HTML element?",
            choice1: ".document",
            choice2: "document.querySelector",
            choise3: ".setAttribute",
            answer: 2
    },
    {
        question: "What code is essential to blocking the browser's default behavior?",
            choice1: ".reset",
            choice2: "event.reset()",
            choice3: "event.preventDefault()",
            answer: 3
    },
]

const SCORE_POINTS = 50;
const MAX_QUESTIONS = 5; 
const WRONG_ANSWER = -10;

// function to start game
function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...myQuestions];
    getNewQuestion();
}

// function to show next question
function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/end.html');
    };
    
    // randomly generate one of the questions. 
    var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = myQuestions[currentQuestion].myQuestions

    choices.forEach(function choice() {
        var number = answers.dataset["number"]
        answers.innerHTML = currentQuestion['choice' + number]
    });

    availableQuestions.splice(questionsIndex, 1); 

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset["number"];

        // if statement
        var classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000)

        
    });
})

incrementScore = function(num) {
    score +=num;
    scoreText.innerHTML = score;

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
startBtn.addEventListener('click', setTime());
startBtn.addEventListener('click', startGame());

// click added to show results when submitBtn is selected. 
//submitBtn.addEventListener("click", showResults);

