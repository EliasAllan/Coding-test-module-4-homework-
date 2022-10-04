// this is the starting point for this commentary,
// please add more steps
// there may be more steps and corrections to be made in future


// need a collection of objects that hold the questions
console.log("Sam, your questions");
var questions = [
  {
    question: "Which one is not a primitive type ?",
    answers: ["Array", "boolean", "number", "string"],
    rightanswer: 1,
  },
  {   
    question: "What comes after the curly brackets in a function ?",
    answers: ["a for loop", "what the function excecutes", "a variable", "a method"] ,
    rightanswer: 2,
    
  },
  {
    question: "What are the steps you need to take to add something to a page",
    answers: ["Write code , add semicolon", 
              "Create , Modify , Append", 
              "Add head, Add body, Add footer", 
              "Margin, border, padding"] ,
    rightanswer: 2,
    
  },
  {
    question: "What comes after the curly brackets in a function ?",
    answers: ["a for loop", "what the function excecutes", "a variable", "a method"] ,
    rightanswer: 4,
    
  }

]

// var secondquestion = {answer1 : false, answer2 : true, answer3 : false, answer4 :false }
// var thirdquestion = {answer1 : false, answer2 : true, answer3 : false, answer4 :false }
// var fourthquestion = {answer1 : false, answer2 : false, answer3 : false, answer4 :true }



// need to keep a count of the question that is displayed
var question = 1

// need to keep score
var score = '';

// need to keep the time
var timeleft = 120;


var timeEl = document.querySelector(".time");
var startBtn = document.querySelector("#startbutton")



function startTimer() {
  startBtn.setAttribute("style", "display:none")
  
  var timer = setInterval(function() {
    timeleft--;
    timeEl.textContent = "you have " + timeleft + " seconds to finish the test ";

    if (timeleft === 0) {
      // Stops execution of action at set interval
      clearInterval(timer);
      // Calls function to create and append
      // nextquestion();
    }
  }, 1000);
  nextquestion(); 
}

var questionNumber = 1
var answerBtns = document.querySelector(".questions")
answerBtns.addEventListener("click", nextquestion)
function nextquestion() {
  
  if (questionNumber === 1) {
    questionNumber = questionNumber + 1;
    var questionsEl = document.querySelector(".questions");
    questionsEl.textContent = questions[0].question;

    for (var i = 0; i < questions[0].answers.length; i++) {
      
      var answersEl = document.createElement("button");
      answersEl.textContent = questions[0].answers[i];
      questionsEl.appendChild(answersEl);
      console.log(questions[0].answers[i]);
      
    }
  
  } else if (questionNumber === 2) {
    questionNumber = questionNumber + 1;
    var questionsEl = document.querySelector(".questions");
    questionsEl.textContent = questions[1].question;

    for (var i = 0; i < questions[1].answers.length; i++) {
      var answersEl = document.createElement("button");
      questionsEl.appendChild(answersEl);
      console.log(questions[1].answers[i]);
      answersEl.textContent = questions[1].answers[i];
    }
  } else if (questionNumber === 3) {
    questionNumber = questionNumber + 1;
    var questionsEl = document.querySelector(".questions");
    questionsEl.textContent = questions[2].question;

    for (var i = 0; i < questions[2].answers.length; i++) {
      var answersEl = document.createElement("button");
      questionsEl.appendChild(answersEl);
      console.log(questions[2].answers[i]);
      answersEl.textContent = questions[2].answers[i];
    }
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

// startTimer();
startBtn.addEventListener("click", startTimer)
