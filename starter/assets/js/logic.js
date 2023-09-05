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
let feedBackElement = document.getElementById("feedback");


let sfxRight = new Audio("assests/sfx/correct.wav");



function getQuestion() {
    let currentQuestion = questions[currentQuestionIndex];

    let titleElement = document.getElementById("question-title");

    titleElement.textContent = currentQuestion.title;

    choiceElement.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, index){
        let choiceButtons = document.createElement("button");

        choiceButtons.setAttribute("class", "choice");
        choiceButtons.setAttribute("value", choice);

        choiceButtons.textContent = `${index +1}. ${choice}`

        choiceButtons.addEventListener("click", questionClick);

        choiceElement.append(choiceButton);
    })
}

function questionClick() {

}

function quizEnd () {
    clearInterval(timerID);

    let endScreenElement = document.getElementById("end-screen");
    endScreenElement.removeAttribute("class");


    let finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = time;

    questionsElement.setAttribute("class", "hide");
}

function clockTick() {
    time--;
    timerElement.textContent = time;
    
    if(time<=0) {
        quizEnd();
    }
}

function startQuiz() {
let startScreenElement = document.getElementById("start-screen");
startScreenElement.setAttribute("class", "hide");

questionsElement.removeAttribute("class");


timerID = setInterval(clockTick, 1000)

timerElement.textContent = time;

getQuestion();
}

function saveHighScore() {

}

function checkForEnter(event) {

}


startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveHighScore);

initialElement.addEventListener("keyup", checkForEnter);