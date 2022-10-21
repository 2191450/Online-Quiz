const username = document.getElementById("username");
const saveScorebtn = document.getElementById("saveScorebtn");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.getElementById("finalScore");
// || [] to output empty storage and not null
const scoreList = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(scoreList);

const maxScore = 10;
finalScore.innerText = mostRecentScore;

//disable save button if there's no username
username.addEventListener("keyup", () => {
  saveScorebtn.disabled = !username.value;
});

//saving score to the array
saveScore = (e) => {
  //console.log("click!!!");
  e.preventDefault();

  //score to json storage
  const score = {
    score: mostRecentScore,
    name: username.value,
  };
  //arrange the she scrore
  scoreList.push(score);
  scoreList.sort((a, b) => b.score - a.score);

  //stringyfy to hson to be saved as stings
  localStorage.setItem("highScores", JSON.stringify(scoreList));

  //console.log(scoreList);
  //the user will redirect to the score board
  return window.location.assign("/../game/scores.html");
};