const username = localStorage.getItem("recentName");

//get the score of the user from the local storage and
const mostRecentScore = localStorage.getItem("mostRecentScore");
const mostRecentScoreTF = localStorage.getItem("mostRecentScoreTF");
const mostRecentScoreIden = localStorage.getItem("mostRecentScoreIden");

//refernce to defined to line 55, 60 and 65
const MCScoreStorage = JSON.parse(localStorage.getItem("MCScoreStorage")) || [];
const TFScoreStorage = JSON.parse(localStorage.getItem("TFScoreStorage")) || [];
const IdentScoreStorage =
  JSON.parse(localStorage.getItem("IdentScoreStorage")) || [];

const finalScore = document.getElementById("finalScore");
// || [] to output empty storage and not null
//save the scores permanently to the localstorage array
const scoreList = JSON.parse(localStorage.getItem("highScores")) || [];

const maxScore = 10;
//include Number object to convert the string from the localstorage into int
const totalScore =
  Number(mostRecentScoreTF) +
  Number(mostRecentScore) +
  Number(mostRecentScoreIden);
finalScore.innerText = totalScore;

//saving score to the array
saveScore = (e) => {
  e.preventDefault();

  //score to json storage
  const score = {
    score: totalScore,
    name: username,
  };
  // push the score to the scoreList
  scoreList.push(score);

  //to sort the scores
  scoreList.sort((a, b) => b.score - a.score);

  //stringyfy to hson to be saved as strings
  localStorage.setItem("highScores", JSON.stringify(scoreList));

  MCScoreStorage.push(mostRecentScore);

  TFScoreStorage.push(mostRecentScoreTF);

  IdentScoreStorage.push(mostRecentScoreIden);

  //permanently be save at local storage
  localStorage.setItem("MCScoreStorage", JSON.stringify(MCScoreStorage));
  localStorage.setItem("TFScoreStorage", JSON.stringify(TFScoreStorage));
  localStorage.setItem("IdentScoreStorage", JSON.stringify(IdentScoreStorage));

  //the user will redirect to the score board
  return window.location.assign("/../index.html");
};
