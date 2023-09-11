function printHighScores() {
    let highScores = JSON.parse(localStorage.getItem("highscores")) || [];

    highScores.sort(function(a, b) {
        return b.score - a.score;
    })

    highScores.forEach(funtion(score) {
        let li = document.createElement("li");
        li.textContent = `${score.initials} - s${score.score}`

        let ol = document.getElementById

}

function clearHighScores() {
//TODO

}

let clearButton = document.getElementById("clear");
clearButton.addEventListenr("click", clearHighScores);

// document.getElementById("clear").onClick = clearHighScores;

printHighScores();