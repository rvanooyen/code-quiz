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

// score
var score = 0;

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

var timerEl = document.getElementById('timer');
// var mainEl = document.getElementById('main');
var startQuizBtn = document.getElementById('btn-start-quiz');

// timer that counts down from 75
function countdown() {
    var timer = 75;

    if (timer > 0)  {
      timerEl.textContent = timer;
      timer--;
      console.log(timer);
      
    }
    else {
      timerEl.textContent ="";
      clearInterval(timeInterval);
    }
};
  
startQuizBtn.onclick = countdown;
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

// for (var i = 0; i < questions.length; i++) {
//     answer = prompt(questions[i].question);
//     if (answer === questions.answer) {
//         alert("Right");
//         score++;
//     }
//     else {
//         alert("Wrong!");
//     }
    
// }

// alert("final score is " + score);

// var emailInput = document.querySelector('#email');
// var passwordInput = document.querySelector('#password');
// var signUpButton = document.querySelector('#sign-up');
// var msgDiv = document.querySelector('#msg');
// var userEmailSpan = document.querySelector('#user-email');
// var userPasswordSpan = document.querySelector('#user-password');

// function renderLastRegistered() {

//   // TODO: Retrieve the last email and password from localStorage
//   var email = localStorage.getItem("email");
//   var password = localStorage.getItem("password");
  
//   // TODO: If they are null, return early from this function
//   if (email === null && password === null) {
//     return;
//   }
//   else {
//     userEmailSpan = email;
//     userPasswordSpan = password;
//   }
//   // TODO: Otherwise set the text of the 'userEmailSpan' and 'userPasswordSpan' to the corresponding values from localStorage
// }

// renderLastRegistered();

// function displayMessage(type, message) {
//   msgDiv.textContent = message;
//   msgDiv.setAttribute('class', type);
// }

// signUpButton.addEventListener('click', function(event) {
//   event.preventDefault();

//   var email = document.querySelector('#email').value;
//   var password = document.querySelector('#password').value;

//   if (email === '') {
//     displayMessage('error', 'Email cannot be blank');
//   } else if (password === '') {
//     displayMessage('error', 'Password cannot be blank');
//   } else {
//     displayMessage('success', 'Registered successfully');

//     // TODO: Save email and password to localStorage
//     localStorage.setItem("email", email);
//     localStorage.setItem("password",password);
//     // TODO: Render the last registered email and password
//     renderLastRegistered();
    
//   }
// });


