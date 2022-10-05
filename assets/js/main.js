// this is the starting point for this commentary,
// please add more steps
// there may be more steps and corrections to be made in future


// need a collection of objects that hold the questions
console.log("let's crush this");
var questions = [
  {
    question: "Which one is not a primitive type ?",
    answers: ["Array", "boolean", "number", "string"],
    rightanswer: 1,
  },
  {   
    question: "What comes after the curly brackets in a function ?",
    answers: ["A for loop", "The code the function excecutes", "A variable", "A method"] ,
    rightanswer: 2,
    
  },
  {
    question: "What are the steps you need to take to add something to a page ?",
    answers: ["Write code , add semicolon", 
              "Create , Modify , Append", 
              "Add head, Add body, Add footer", 
              "Margin, border, padding"] ,
    rightanswer: 2,
    
  },
  {
    question: "What does DOM stand for in JavaScript?",
    answers: ["Daily Object Method", "Document Onsite Modification", "Door Open Model", "Document Object Model"] ,
    rightanswer: 4,
    
  }

]

// need to keep a count of the question that is displayed
var questionNumber = 1

// need to keep score
var score = 0;

// need to keep the time
var timeleft = 120;


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

// Btn0El.addEventListener("click", )



// function scoredata(){
//   if(answersEl.id

// }





// var answerBtns = document.querySelector("button")
// answerBtns.addEventListener("click", nextquestion)
function nextquestion() {
  
  if (questionNumber === 1) {
    questionNumber = questionNumber + 1;
    var questionsEl = document.querySelector(".questions");
    questionsEl.textContent = questions[0].question;
    
    for (var i = 0; i < questions[0].answers.length; i++) {
      
      var answersEl = document.createElement("button");
      answersEl.id = 'Btn'+[i];
       answersEl.onclick = function(){
        
        nextquestion()
       }  
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
      answersEl.id = 'Btn'+[i];
      answersEl.onclick = function(){
        nextquestion()
       }  
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
      answersEl.id = 'Btn'+[i];
      answersEl.onclick = function(){
        nextquestion()
       }  
      questionsEl.appendChild(answersEl);
      console.log(questions[2].answers[i]);
      answersEl.textContent = questions[2].answers[i];
    }
  }else if (questionNumber === 4) {
    questionNumber = questionNumber + 1;
    var questionsEl = document.querySelector(".questions");
    questionsEl.textContent = questions[3].question;

    for (var i = 0; i < questions[3].answers.length; i++) {
      var answersEl = document.createElement("button");
      answersEl.id = 'Btn'+[i];
      answersEl.onclick = function(){
        nextquestion()
       }  
      questionsEl.appendChild(answersEl);
      console.log(questions[3].answers[i]);
      answersEl.textContent = questions[3].answers[i];
      
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
startBtn.onclick = function (){
  nextquestion()
}
