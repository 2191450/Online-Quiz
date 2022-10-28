const allScore = document.getElementById("allScore");
const scoreList = JSON.parse(localStorage.getItem("highScores"));

allScore.innerHTML = scoreList
  .map((score) => {
    return `<li class="score-list">${score.name} - ${score.score}</li>`;
  })
  .join("");
//clear localstorage