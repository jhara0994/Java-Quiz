var headers = document.querySelector('#header');
var quizQ = document.querySelector('#question');
var quizA = document.querySelector('#answer');
var startBtn = document.querySelector('#click');
var results = document.querySelector('#results')
var timerEl = document.querySelector('.timer');

var secondsLeft = 120;

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

// function to set timer. 
function setTime() {
    var timerInterval = setInterval(function() {
        
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds remaining.";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}

// function for sending message once the time has expired. 
function sendMessage() {
    timerEl.textContent = "Game Over!";
}

// function for showing questions
function displayQuestions() {
    headers.style.display = "none";
    var output = [];
    myQuestions.forEach(currentQuestion, questionNumber) => {
        var answers = [];
        for (letter in currentQuestions.answers) {
            answers.push(
                <label>
                    <input type="radio" name="question${questionNumber}" value="${letters}"></input>

                </label>
            )

        }

    }

}

// clickability added to the start button. calls up the timer function and the quiz function.
startBtn.addEventListener("click", setTime);
startBtn.addEventListener("click", displayQuestions);

// click added to show results when submitBtn is selected. 
submitBtn.addEventListener("click", showResults);