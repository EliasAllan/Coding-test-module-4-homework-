
// this is the starting point for this commentary,
// please add more steps
// there may be more steps and corrections to be made in future


// need a collection of objects that hold the questions
console.log("Sam, your questions");
var firstquestion = {answer1 : true, answer2 : false, answer3 : false, answer4 :false }
var secondquestion = {answer1 : false, answer2 : true, answer3 : false, answer4 :false }
var thirdquestion = {answer1 : false, answer2 : true, answer3 : false, answer4 :false }
var fourthquestion = {answer1 : false, answer2 : false, answer3 : false, answer4 :true }



// need to keep a count of the question that is displayed


// need to keep score
var score = '';

// need to keep the time
var timeleft = 120 ;
var timeEl = document.querySelector(".time");
var clickbtn = document.querySelector("#startbutton")

function startTimer() {
    addQuestion();
    var timer = setInterval(function()  {
      timeleft--;
      timeEl.textContent = "you have " + timeleft + " seconds to finish the test ";
    
      if(timeleft === 0) {
        // Stops execution of action at set interval
        clearInterval(timer);
        // Calls function to create and append
        // addQuestion();
      }
    }, 1000);
}



    function addQuestion(){
      var questionsEl = document.querySelector(".questions");
      var answersEl = document.createElement("button");
      questionsEl.textContent= "which one of these is not a primitive data type ?";     
      answersEl.textContent="Boolean";
      questionsEl.appendChild(answersEl);
        
} 
    // answersEl.textContent= "Boolean";
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


function startQuiz(){
  // timer starts and I am presented with a question
  // need a function call to start the timer

  // need a function call to present the question
}

// eventListener here // when i click the start button

// startTimer();
clickbtn.addEventListener("click",startTimer)