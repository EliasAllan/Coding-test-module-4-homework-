// this is the starting point for this commentary,
// please add more steps
// there may be more steps and corrections to be made in future

// collection of objects that hold the questions
console.log("Quiz logged");
var currentQuestion;
var questions = [
  {
    question: "Which one is not a primitive type ?",
    answers: ["Array", "boolean", "number", "string"],
    rightanswer: 0,
  },
  {
    question: "What comes after the curly brackets in a function ?",
    answers: [
      "A for loop",
      "The code the function excecutes",
      "A variable",
      "A method",
    ],
    rightanswer: 1,
  },
  {
    question:
      "What are the steps you need to take to add something to a page ?",
    answers: [
      "Write code , add semicolon",
      "Create , Modify , Append",
      "Add head, Add body, Add footer",
      "Margin, border, padding",
    ],
    rightanswer: 1,
  },
  {
    question: "What does DOM stand for in JavaScript?",
    answers: [
      "Daily Object Method",
      "Document Onsite Modification",
      "Door Open Model",
      "Document Object Model",
    ],
    rightanswer: 3,
  },
];

// count of the question that is displayed
var questionNumber = 0;
var highscoreEl = document.querySelector("#highscore");
// score
var highscorearr = [];
var score = 0;
var scoreEl = document.querySelector("#score");
scoreEl.textContent = "You have " + score + " points";
scoreEl.setAttribute("style", "font-size: 23px");

// need to keep the time
var timeleft = 60;

// Query selectors
var timeEl = document.querySelector(".time");
var startBtn = document.querySelector("#startbutton");
var restartBtn = document.querySelector("#restart-btn");
var scorebutton = document.querySelector("#scorebutton");
var SpanEl = document.querySelector("#title");
var rightwrongEl = document.querySelector(".rightwrong");
 var formEl = document.querySelector("form");
 
function startQuiz(event) {
  event.preventDefault();
  console.log(event.target);
  startTimer();
  displayQuestion();
  startBtn.setAttribute("style", "display:none");
  SpanEl.setAttribute("style", "display:none");

 
}

function startTimer() {
  startBtn.setAttribute("style", "display:none");
  SpanEl.setAttribute("style", "display:none");
  var timer = setInterval(function () {
    timeleft--;
    timeEl.textContent =
      "You have " + timeleft + " seconds to finish the test ";
    if (timeleft === 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

function displayQuestion() {
  currentQuestion = questions[questionNumber];
  var questionsEl = document.querySelector(".questions");
  questionsEl.textContent = currentQuestion.question;
  for (var i = 0; i < currentQuestion.answers.length; i++) {
    var answersEl = document.createElement("button");
    answersEl.setAttribute("style", "color: white ; background-color: blue");
    answersEl.id = "Btn" + [i];
    answersEl.textContent = currentQuestion.answers[i];
    answersEl.onclick = checkAnswer;
    questionsEl.append(answersEl);
  }
}
function checkAnswer(event) {
  event.stopPropagation();
  console.log(currentQuestion);
  console.log(event.target);
  if (
    event.target.innerHTML ===
    currentQuestion.answers[currentQuestion.rightanswer]
  ) {
    logCorrect();
  } else {
    logWrong();
  }
  scoreEl.textContent = "You have " + score + " points";
  var isFinished = checkIfQuizOver();
  if (!isFinished) {
    questionNumber++;
    return displayQuestion();
  }
  endQuiz();
}

function init() {
  // Get stored todos from localStorage
  var storedscores = JSON.parse(localStorage.getItem("scores"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedscores !== null) {
    highscorearr = storedscores;
  }
console.log("high score array")
console.log(highscorearr)
  // This is a helper function that will render todos to the DOM
  // renderTodos();
}
init();

function storehighscores() {
  // Stringify and set key in localStorage to todos array
  localStorage.setItem("scores", JSON.stringify(highscorearr));
}

function logCorrect() {
  console.log("Correct");
  score = score + 5;
  rightwrongEl.textContent = "Right !!!";
  rightwrongEl.setAttribute("style", "color: green");
}

function logWrong() {
  timeleft = timeleft - 5;
  score = score - 1;
  rightwrongEl.textContent = "Wrong !!! -5 seconds ";
  rightwrongEl.setAttribute("style", "color: red");
}

function checkIfQuizOver() {
  if (timeleft === 0 || questionNumber === questions.length - 1) {
    return true;
  }
  return false;
}

function endQuiz() {
  console.log("ending quiz");
  var questionsEl = document.querySelector(".questions");
  // var highscoreEl = document.querySelector("#highscore");
 
  questionsEl.setAttribute("style", "display: none");
  timeEl.setAttribute("style", "display: none");
  formEl.classList.remove("hidden");
}

function addToStorage(event){
  event.preventDefault();
  var myinitials = document.querySelector("#initials").value;
    console.log(myinitials)
    console.log(score)
    if(myinitials !== ''){
      var myscore = {"initials" :myinitials , "score" :score}
    highscorearr.push(myscore);
    storehighscores();
    renderHighScore();
    formEl.setAttribute("style", "display: none");
    restartBtn.classList.remove("hidden");

    }

    // var hsData = localStorage.getItem("initials");
}

function renderHighScore(){
highscoreEl.classList.remove("hidden");
  //create
  for (let i = 0; i < highscorearr.length; i++){
    var highScore = document.createElement("P");
    console.log(highScore)
    highScore.textContent = highscorearr[i].initials + " = " + highscorearr[0].score
    highscoreEl.append(highScore)
  }
}
  
function refreshPage() {
  location.reload()
}    
  
  


restartBtn.addEventListener("click",refreshPage );
startBtn.addEventListener("click", startQuiz);
scorebutton.addEventListener("click", addToStorage);