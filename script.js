//set variables
var containerEl = document.querySelector(".container")
var headers = document.querySelector(".headers")
var startBtn = document.querySelector("#btn-start")
var submitBtn = document.querySelector("#btn-submit")
var nextBtn = document.querySelector("#btn-skip")
var quizContainerEl = document.querySelector(".quiz-container")
var questionContainer = document.querySelector(".question-container")
var choiceContainer = document.querySelector(".choice-container")
var quizTimer = document.querySelector(".timer")
var scoreQuiz = document.querySelector("#score")
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');

var timerEl = document.querySelector('#timer')
var question = document.querySelector("#question")
var quizScore = document.querySelector('#score')

// quiz questions
var myQuestions = [
    {
        id: 0,
        question: "What is the method use to print data to your log?",
        answers: {
            a: "console.log",
            b: "application.log",
            c: "google.console",
        },
        correctAnswer: "a"
    },
    {
        id: 1,
        question: "What code is used to add text to a variable?",
        answers: {
            a: ".append",
            b: ".paragraph",
            c: ".textContent",
        },
        correctAnswer: "c"
    },
    {
        id: 2,
        question: "What code is used to add a variable's value to certain portion the HTML?",
        answers: {
            a: ".appendChild",
            b: ".alert",
            c: ".addList",
        },
        correctAnswer: "a",
    },
    {
        id: 3,
        question: "How do you connect a variable to a specific HTML element?",
        answers: {
            a: ".document",
            b: "document.querySelector",
            c: ".setAttribute",
        },
        correctAnswer: "b",
    },
    {
        id: 4,
        question: "What code is essential to blocking the browser's default behavior?",
        answers: {
            a: ".reset",
            b: "event.reset()",
            c: "event.preventDefault()",
        },
        correctAnswer: "c",
    },
]

let currentQuestionIndex = 0

let score = 0
var scores = []
var initials = []

var secondsLeft = 30

// function to set timer. 
function setTime() {
    headers.classList.add('hide')
    startBtn.classList.add('hide')
    submitBtn.classList.add("show")
    nextBtn.classList.add('show')
    timerEl.classList.add('show')
    questionContainer.classList.add('show')
    choiceContainer.classList.add('show')
    var timerInterval = setInterval(function() {
        
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds remaining.";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            timeOut();
        }

    }, 1000);
};

function timeOut() {
    timerEl.textContent = "Time has run out! Reload the page to beat the clock or submit your score."
}

// function to show quiz content
function showQuestions () {
    let q = myQuestions[currentQuestionIndex]
    question.innerHTML = q.question
    op1.innerHTML = q.answers.a
    op2.innerHTML = q.answers.b
    op3.innerHTML = q.answers.c
}

//functions to check answer and send message once no more questions exist. 
var correctChoice = document.querySelector("#check-answer")

function rightAnswer() {
    correctChoice.innerHTML = "Correct"
}

function wrongAnswer() {
    correctChoice.innerHTML = "Wrong!"
    secondsLeft = (secondsLeft - 20) < 0 ? 1 : (secondsLeft - 20)
}

function scoreAnswer(answer) {
    correctChoice.classList.remove('hide')

    if(myQuestions[currentQuestionIndex].correctAnswer === answer) {
        score ++
        rightAnswer()
    } else {
        wrongAnswer()
    }

    if(currentQuestionIndex < myQuestions.length){
        currentQuestionIndex ++
        showQuestions()
    } else {
        questionContainer.classList.add('hide')
        scoreQuiz.innerHTML = score
        endQuestion()
    }
}

function endQuestion() {
    correctChoice.textContent = "Congrats! You have beat the clock. Press submit to store your score."
}

//

// function to start quiz
function startQuiz() {
    setTime()
    showQuestions()
}

startBtn.addEventListener("click", startQuiz);

function storeScore() {
    localStorage.setItem("scores", JSON.stringify(scores))
    localStorage.setItem("initials", JSON.stringify(initials))
}

function scoreQuiz() {

}