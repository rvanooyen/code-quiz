// variables
// questions array
var questions = 
[
    {
        question: "Question?", 
        choices: ["a", "b", "c", "d"],
        answer: 0
    },
    {
        question: "Question?", 
        choices: ["a", "b", "c", "d"],
        answer: 0
    },
    {
        question: "Question?", 
        choices: ["a", "b", "c", "d"],
        answer: 0
    },
    {
        question: "Question?", 
        choices: ["a", "b", "c", "d"],
        answer: 0
    },
    {
        question: "Question?", 
        choices: ["a", "b", "c", "d"],
        answer: 0
    },
    {
        question: "Question?", 
        choices: ["a", "b", "c", "d"],
        answer: 0
    },
    {
        question: "Question?", 
        choices: ["a", "b", "c", "d"],
        answer: 0
    },
    {
        question: "Question?", 
        choices: ["a", "b", "c", "d"],
        answer: 0
    },
    {
        question: "Question?", 
        choices: ["a", "b", "c", "d"],
        answer: 0
    },
    {
        question: "Question?", 
        choices: ["a", "b", "c", "d"],
        answer: 0
    },
    
];

// Coding Quiz Challenge
// This script will generate multiple choice questions and four possible answers

// buttons
// startQuiz
// answers
// submit
// goBack
// clearHighScores

// User clicks begin quiz
// Timer starts

var timerEl = document.getElementById('time');
var startQuizBtn = document.getElementById('startQuizBtn');
startQuizBtn.addEventListener("click", function()) {
    countDown();
}

// timer that counts down from 75
var countDown = function () {
    var timer = 75;
    var quizTimer = setInterval(function() {
        if (timer > 0) {
            timer--;
            console.log(timer);
        }
        else {
            clearInterval(quizTimer);
        }
    }, 1000);
};
  
// startQuizBtn.onclick = countdown;
// As long as the time is greater than 0
    // Loads questions into question form with possible answers
    // If the user answers correctly than notify user Right! and add to score
    // If the user answers incorrectly than notify user Wrong! and decrease timer
// When timer hits 0 or user answers all questions
    // Notify user Done with quiz
    // Notify user Final score is score
    // Enter initials into text field
    // click submit to record score
// Take user to high score screen 
// If user score > high score notify user you got the high score and save high score in browser localStorage
// give option to goBack to main screen or reset High Score to clear score
