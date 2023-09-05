// variable to keep track of quiz state
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerID;


// html elements;
let questionsElement = document.getElementById("questions");
let timerElement = document.getElementById("time");
let choiceElement = document.getElementById("choices");
let submitButton = document.getElementById("submit");
let startButton = document.getElementById("start");
let initialElement = document.getElementById("initials");