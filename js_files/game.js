const questionCounterText = document.getElementById("questionCounter");
const question = document.getElementById("question");
//choice 1-4
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let accoptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

//fetch questions from the json file using fetch API
let questions = [];

fetch("/../questions.json")
  .then((res) => {
    return res.json();
  })
  // call the questions before trigerring start_game()
  .then((loadedQuestions) => {
    //multiple choice
    questions = loadedQuestions.MultipleChoice;
    start_game();
  });

const correct_bonus = 1;
const max_question = 20;
// start function
start_game = () => {
  questionCounter = 0;
  score = 0;
  //... is a spread operator for the question to get all the questions from
  availableQuestions = [...questions];
  get_new_question(0);
};

// get new question from questionaire
function get_new_question(index) {
  //get question
  questionCounterText.innerText = que_count + "/" + max_question;
  currentQuestion = availableQuestions[index];
  question.innerText = currentQuestion.question;
  //get choices
  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });
  //When loaded accepting question is true
  accoptingAnswers = true;
}

let que_count = 1;
choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!accoptingAnswers) return;

    accoptingAnswers = false;
    const selected_choice = e.target;
    const selected_answer = selected_choice.dataset["number"];

    //checking answers for the score
    const classToApply =
      selected_answer == currentQuestion.answer ? "correct" : "incorrect";
    // if the anwer is correct increment score
    if (classToApply == "correct") {
      incrementScore(correct_bonus);
    }

    //if there's no more question proceed to the end html
    if (que_count < questions.length - 1) {
      que_count++;
      get_new_question(que_count);
    } else {
      return window.location.assign("/../game/tf.html");
    }
  });
});

incrementScore = (num) => {
  ``;
  score += num;
  localStorage.setItem("mostRecentScore", score);
};
