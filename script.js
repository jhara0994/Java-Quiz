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
var initialsContainer = document.querySelector('.initials')
var enterInit = document.querySelector('.enter-initials')
var scoringNav = document.querySelector('.scoring.nav')

var timerEl = document.querySelector('#timer')
var question = document.querySelector("#question")
var quizScore = document.querySelector('#score')

// quiz questions
var myQuestions = [
    {
        question: "What is the method use to print data to your log?",
            answerA: "console.log",
            answerB: "application.log",
            answerC: "google.console",
        correctAnswer: "answerA"
    },
    {
        question: "What code is used to add text to a variable?",
            answerA: ".append",
            answerB: ".paragraph",
            answerC: ".textContent",
        correctAnswer: "answerC"
    },
    {
        question: "What code is used to add a variable's value to certain portion the HTML?",
            answerA: ".appendChild",
            answerB: ".alert",
            answerC: ".addList",
        correctAnswer: "answerA",
    },
    {
        question: "How do you connect a variable to a specific HTML element?",
            answerA: ".document",
            answerB: "document.querySelector",
            answerC: ".setAttribute",
        correctAnswer: "answerB",
    },
    {
        question: "What code is essential to blocking the browser's default behavior?",
            answerA: ".reset",
            answerB: "event.reset()",
            answerC: "event.preventDefault()",
        correctAnswer: "answerC",
    },
]

let currentQuestionIndex = 0

let score = 0
var scores = []
var initials = []

var secondsLeft = 120

// function to set timer. 
function setTime() {
    headers.classList.add('hide')
    startBtn.classList.add('hide')
    scoreQuiz.classList.remove('hide')
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
    op1.innerHTML = q.answerA
    op2.innerHTML = q.answerB
    op3.innerHTML = q.answerC
}

//functions to check answer and send message once no more questions exist. 
var correctChoice = document.querySelector("#check-answer")

function rightAnswer() {
    correctChoice.innerHTML = "Correct"
    score + 20
}

function wrongAnswer() {
    correctChoice.innerHTML = "Unfortunate!  -20 seconds"
    secondsLeft = (secondsLeft - 20) < 0 ? 1 : (secondsLeft - 20)
    score - 5
}

let q = myQuestions[currentQuestionIndex]
function scoreAnswer(answer) {
    correctChoice.classList.remove('hide')

    if(answer === q.correctAnswer) {
        rightAnswer()
    } else {
        wrongAnswer()
    }

    if(currentQuestionIndex < 2){
        currentQuestionIndex ++
        showQuestions()
    } else {
        questionContainer.classList.remove('show')
        choiceContainer.classList.remove('show')
        nextBtn.classList.remove('show')
        initialsContainer.classList.add('show')
        scoreQuiz.textContent = score
        endQuestion()
    }
}

function endQuestion() {
    correctChoice.textContent = "Congrats! You have beat the clock. Press submit to store your score."
}

// function to start quiz
function startQuiz() {
    setTime()
    scoreAnswer()
}

startBtn.addEventListener("click", startQuiz);

function storeScore() {
    localStorage.setItem("score", JSON.stringify(scores))
    localStorage.setItem("initials", JSON.stringify(initials))
}

var highScore = document.querySelector(".highscores")
var totalScore = document.querySelector(".total-score")
var highInit = document.querySelector('.high-initials')

function renderHighScore() {
    totalScore.innerHTML = ""
    highInit.innerHTML = ""
    var initials = JSON.parse(localStorage.getItems("initials"))
    var scores = JSON.parse(localStorage.getItem("score"))

    for (var i = 0; i < initials.length; i++)
        var initial = initials[i]
        var score = scores[i]
        totalScore.textContent = score
        highInit.textContent = initial
}

submitBtn.addEventListener("click", submitBtnHandler)


function submitBtnHandler() {
    var initials = enterInit.value
    var scoreEl = scoreQuiz.innerHTML

    if (initials === "") {
        return;
    }
        initials.push(initials)
        scores.push(scoreEl)
        enterInit.value = ""
        storeScore()
        renderHighScore()
        scoringNav.classList.add('hide')
        highScore.classList.remove('hide')
}
