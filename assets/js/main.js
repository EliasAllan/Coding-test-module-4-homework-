// this is the starting point for this commentary,
// please add more steps
// there may be more steps and corrections to be made in future

// collection of objects that hold the questions
console.log("let's crush this");
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
var scorebutton = document.querySelector("#scorebutton");
var SpanEl = document.querySelector("#title");
var rightwrongEl = document.querySelector(".rightwrong");

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
  rightwrongEl.textContent = "Wrong !!!";
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
  var formEl = document.querySelector("form");
  questionsEl.setAttribute("style", "display: none");
  timeEl.setAttribute("style", "display: none");
  formEl.classList.remove("hidden");
  console.log(formEl);
  renderStorage()
}

function renderStorage(){
  var myinitials = document.querySelector("#initials").value;
    console.log(myinitials)
    console.log(score)
    if(myinitials !== ''){
      var myscore = {"initials" :myinitials , "score" :score}
    highscorearr.push(myscore);
    storehighscores();
    }

  // need another function that displays the score 
  // create new html elements using jquery or Javascript in a for loop ( Because it's an array)
  // Review ( Activity 26 )
  // use localstorage.getitem to retrieve data from local storage
  // about 20 lines of code
    
  
  
}


startBtn.addEventListener("click", startQuiz);
scorebutton.addEventListener("click", endQuiz);