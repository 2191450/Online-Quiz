const allScore = document.getElementById("allScore");
const scoreList = JSON.parse(localStorage.getItem("highScores"));

//output the names with their corresponding scores to the html
allScore.innerHTML = scoreList
  .map((score) => {
    return `<li class="score-list">${score.name} - ${score.score}</li>`;
  })
  .join("");

// get the array of scores in every type of quiz
const MCScoreStorage = JSON.parse(localStorage.getItem("MCScoreStorage"));
const TFScoreStorage = JSON.parse(localStorage.getItem("TFScoreStorage"));
const IdentScoreStorage = JSON.parse(localStorage.getItem("IdentScoreStorage"));

// sum the list of scores of every student from Multiple Choice
const MCSum = MCScoreStorage.reduce(function (a, b) {
  return Number(a) + Number(b);
});
//sum the list of score of every student from True or False
const TFSum = TFScoreStorage.reduce(function (a, b) {
  return Number(a) + Number(b);
});
//sum the list of score of every student from Identification
const IdentSum = IdentScoreStorage.reduce(function (a, b) {
  return Number(a) + Number(b);
});

console.log(MCSum);
console.log(TFSum);
console.log(IdentSum);

// Load google charts
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Quiz Type", "Score"],
    ["Multiple Choice", Number(MCSum)],
    ["True Or False", Number(TFSum)],
    ["Identification", Number(IdentSum)],
  ]);

  // Optional; add a title and set the width and height of the chart
  var options = { title: "Average", width: 550, height: 400 };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
}

clearScore = (e) => {
  e.preventDefault();
  //clear localstorage
  window.localStorage.clear();

  return window.location.assign("/../teacher.html");
};
