// this is the starting point for this commentary,
// please add more steps
// there may be more steps and corrections to be made in future

// collection of objects that hold the questions
console.log("let's crush this");
var questions = [{
    question: "Which one is not a primitive type ?",
    answers: ["Array", "boolean", "number", "string"],
    rightanswer: 0,
  },
  {
    question: "What comes after the curly brackets in a function ?",
    answers: ["A for loop", "The code the function excecutes", "A variable", "A method"],
    rightanswer: 1,

  },
  {
    question: "What are the steps you need to take to add something to a page ?",
    answers: ["Write code , add semicolon",
      "Create , Modify , Append",
      "Add head, Add body, Add footer",
      "Margin, border, padding"
    ],
    rightanswer: 1,

  },
  {
    question: "What does DOM stand for in JavaScript?",
    answers: ["Daily Object Method", "Document Onsite Modification", "Door Open Model", "Document Object Model"],
    rightanswer: 3,

  }

]

// count of the question that is displayed
var questionNumber = 0
var highscoreEl = document.querySelector("#highscore");
// need to keep score
var score = 0;
var scoreEl = document.querySelector("#score")
scoreEl.textContent = "You have " + score + " points";
scoreEl.setAttribute("style", "font-size: 23px")

// need to keep the time
var timeleft = 60;


var timeEl = document.querySelector(".time");
var startBtn = document.querySelector("#startbutton")
var SpanEl = document.querySelector("#title")


function startTimer() {
  startBtn.setAttribute("style", "display:none")
  SpanEl.setAttribute("style", "display:none")
  var timer = setInterval(function() {
    timeleft--;
    timeEl.textContent = "You have " + timeleft + " seconds to finish the test ";

    if (timeleft === 0) {
      // Stops execution of action at set interval
      clearInterval(timer);
      // Calls function to create and append
      // nextquestion();
    }
  }, 1000);

}

var Btn0El = document.querySelector("#Btn0")
var Btn1El = document.querySelector("#Btn1")
var Btn2El = document.querySelector("#Btn2")
var Btn3El = document.querySelector("#Btn3")


// Btn0El.addEventListener("click", scoredata)





// }

// answersEl.onclick = function(e){
//   console.log(e.target)
//   nextquestion()
//  }

var rightwrongEl = document.querySelector(".rightwrong")

// var answerBtns = document.querySelector("button")
// answerBtns.addEventListener("click", nextquestion)
function nextquestion() {

  if (questionNumber === 0) {
    questionNumber = questionNumber + 1;
    var questionsEl = document.querySelector(".questions");
    questionsEl.textContent = questions[0].question;

    for (var i = 0; i < questions[0].answers.length; i++) {

      var answersEl = document.createElement("button");
      answersEl.setAttribute("style", "color: white ; background-color: blue")
      answersEl.id = 'Btn' + [i];
      answersEl.onclick = function(e) {
        console.log(e.target);
        if (e.target.textContent === "Array") {
          score = score + 5;
          rightwrongEl.textContent = "Right !!!";
          rightwrongEl.setAttribute("style", "color: green")
        } else {
          timeleft = timeleft - 5;
          score = score - 1;
          rightwrongEl.textContent = "Wrong !!!";
          rightwrongEl.setAttribute("style", "color: red")
        }
        scoreEl.textContent = "You have " + score + " points";
        nextquestion()
      }
      answersEl.textContent = questions[0].answers[i];
      questionsEl.appendChild(answersEl);
      console.log(questions[0].answers[i]);


    }

  } else if (questionNumber === 1) {
    questionNumber = questionNumber + 1;
    var questionsEl = document.querySelector(".questions");
    questionsEl.textContent = questions[1].question;

    for (var i = 0; i < questions[1].answers.length; i++) {

      var answersEl = document.createElement("button");
      answersEl.setAttribute("style", "color: white ; background-color: blue")
      answersEl.id = 'Btn' + [i];
      answersEl.onclick = function(e) {
        console.log(e.target);
        if (e.target.textContent === "The code the function excecutes") {
          score = score + 5;
          rightwrongEl.textContent = "Right !!!";
          rightwrongEl.setAttribute("style", "color: green")
        } else {
          timeleft = timeleft - 5;
          score = score - 1;
          rightwrongEl.textContent = "Wrong !!!";
          rightwrongEl.setAttribute("style", "color: red")
        }
        scoreEl.textContent = "You have " + score + " points";
        nextquestion()
      }
      questionsEl.appendChild(answersEl);
      console.log(questions[1].answers[i]);
      answersEl.textContent = questions[1].answers[i];
    }
  } else if (questionNumber === 2) {
    questionNumber = questionNumber + 1;
    var questionsEl = document.querySelector(".questions");
    questionsEl.textContent = questions[2].question;

    for (var i = 0; i < questions[2].answers.length; i++) {
      var answersEl = document.createElement("button");
      answersEl.setAttribute("style", "color: white ; background-color: blue")
      answersEl.id = 'Btn' + [i];
      answersEl.onclick = function(e) {
        console.log(e.target);
        if (e.target.textContent === "Create , Modify , Append") {
          score = score + 5;
          rightwrongEl.textContet = "Right !!!";
          rightwrongEl.setAttribute("style", "color: green")
        } else {
          timeleft = timeleft - 5;
          score = score - 1;
          rightwrongEl.textContent = "Wrong !!!";
          rightwrongEl.setAttribute("style", "color: red")
        }
        scoreEl.textContent = "You have " + score + " points";
        nextquestion()
      }
      questionsEl.appendChild(answersEl);
      console.log(questions[2].answers[i]);
      answersEl.textContent = questions[2].answers[i];
    }
  } else if (questionNumber === 3) {
    questionNumber = questionNumber + 1;
    var questionsEl = document.querySelector(".questions");
    questionsEl.textContent = questions[3].question;

    for (var i = 0; i < questions[3].answers.length; i++) {
      var answersEl = document.createElement("button");
      answersEl.setAttribute("style", "color: white ; background-color: blue")
      answersEl.id = 'Btn' + [i];
      answersEl.onclick = function(e) {
        console.log(e.target);
        if (e.target.textContent === "Document Object Model") {
          score = score + 5;
          rightwrongEl.textContent = "Right !!!";
          rightwrongEl.setAttribute("style", "color: green")
        } else {
          timeleft = timeleft - 5;
          score = score - 1;
          rightwrongEl.textContent = "Wrong !!!";
          rightwrongEl.setAttribute("style", "color: red")
        }
        scoreEl.textContent = "You have " + score + " points";
        nextquestion()
      }
      questionsEl.appendChild(answersEl);
      console.log(questions[3].answers[i]);
      answersEl.textContent = questions[3].answers[i];

    }
  } else {
    var questionsEl = document.querySelector(".questions");
    var highscoreEl = document.querySelector("#highscore");
    var highscoreEl = document.createElement("form");
    questionsEl.setAttribute("style", "display: none");
    timeEl.setAttribute("style", "display: none");
    highscoreEl.setAttribute("method", "post");
    // rightwrongEl.setAttribute("style", "display: none");
    // highscoreEl.setAttribute("action", "submit.php");

  }
}


// create the question elements

// modify the text/attributes
// modify one of the attributes to say right or wrong

// append all elements to something on the page

// for all the buttons, add event listener

// WHEN I answer a question
// if answered correctly
// add points
// show as correct
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// show as incorrect

// after the answer, 
// THEN I am presented with another question
// need a function call to present the question

// if no other questions,
// go to highscore screen


function startQuiz() {
  // timer starts and I am presented with a question
  // need a function call to start the timer

  // need a function call to present the question
}

// eventListener here // when i click the start button
// answersEl.setAttribute("style", "background-color: blue")
// startTimer();
startBtn.addEventListener("click", startTimer)
startBtn.onclick = function() {
  nextquestion()
}
