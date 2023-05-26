var body = document.body;
var timerEl = document.getElementById('countdown');
var highscoretext = document.createElement("h1");
var printScore = document.createElement("h2");
var answer1btn = document.createElement("button");
var answer2btn = document.createElement("button");
var answer3btn = document.createElement("button");
var answer4btn = document.createElement("button");
var question = document.createElement("h1");
var startBtn = document.querySelector(".start-button");
var scoreButton = document.querySelector(".score-button");
var answers = document.createElement("section");
var initials = document.createElement("input");
initials.setAttribute("id", "inputs");
var scoreReading = document.createElement("h2");
var enterInitials = document.createElement("h2");
var submitButton = document.createElement("button");
var score = 0;
var questionCount = 1;
var timeLeft = 30;
enterInitials.textContent = "Enter Your Initials";
submitButton.textContent = "Submit";
answer1btn.textContent = "Boolean";
answer2btn.textContent = "String";
answer3btn.textContent = "number";
answer4btn.textContent = "array";
question.textContent = "What type of variable is either True or False?";
body.setAttribute("style", "margin:auto; width:75%; text-align:center; display: flex; flex-direction: column");


  // Timer that counts down from 30
  function countdown() {
    
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        endGame();
      }
    }, 1000);
  }

function endGame() {
    timeLeft = 0;
    timerEl.remove();
    answers.remove();
    question.remove();
    scoreReading.textContent = "Score: " + score + " points";
    body.appendChild(scoreReading);
    body.appendChild(enterInitials);
    body.appendChild(initials);
    initials.setAttribute("style", "border-radius: 5px; border-width: 1px;");
    body.appendChild(submitButton);

}

function wrongAnswer() {
    timeLeft = timeLeft - 5;
    questionCount++;
}

function rightAnswer() {
    score = score + 10;
    questionCount++;
}

function question2 () {
    answers.remove();
    question.textContent = "What command do you use to add a value to an array?";
    body.appendChild(answers);
    answers.appendChild(answer2btn);
    answers.appendChild(answer3btn);
    answers.appendChild(answer1btn);
    answers.appendChild(answer4btn);
    answer1btn.textContent = "push";
    answer2btn.textContent = "remove";
    answer3btn.textContent = "append";
    answer4btn.textContent = "setAttribute";
}

function question3 () {
    answers.remove();
    body.appendChild(answers);
    question.textContent = "What language do you use to style a website?";
    answers.appendChild(answer2btn);
    answers.appendChild(answer3btn);
    answers.appendChild(answer4btn);
    answers.appendChild(answer1btn);
    answer1btn.textContent = "CSS";
    answer2btn.textContent = "HTML";
    answer3btn.textContent = "Javascript";
    answer4btn.textContent = "Python";
}

function question4 () {
    answers.remove();
    body.appendChild(answers);
    question.textContent = "What is used to increase a variable by 1?";
    answers.appendChild(answer2btn);
    answers.appendChild(answer1btn);
    answers.appendChild(answer3btn);
    answers.appendChild(answer4btn);
    answer1btn.textContent = "++";
    answer2btn.textContent = "--";
    answer3btn.textContent = "==";
    answer4btn.textContent = "===";
}

startBtn.addEventListener("click", function() {
    scoreButton.remove();
    highscoretext.remove();
    printScore.remove();
    startBtn.remove();
    countdown();
    body.appendChild(question);
    body.appendChild(answers);
    answers.appendChild(answer1btn);
    answers.appendChild(answer2btn);
    answers.appendChild(answer3btn);
    answers.appendChild(answer4btn);
    answers.setAttribute("style", "margin:auto; width:25%; text-align:center; display: flex; flex-direction: column;");
  
  }
  );

  answer1btn.addEventListener("click", function(){
    rightAnswer();
    if (questionCount == 2) {
        question2();
    } else if (questionCount == 3) {
        question3();
    } else if (questionCount ==  4){
        question4();
    } else if (questionCount == 5) {
        score = score + timeLeft; 
        endGame();
    }
}
);

answer2btn.addEventListener("click", function(){
    wrongAnswer();
    if (questionCount == 2) {
        question2();
    } else if (questionCount == 3) {
        question3();
    } else if (questionCount ==  4){
        question4();
    } else if (questionCount == 5) {
        score = score + timeLeft; 
        endGame();
    }
}
);

answer3btn.addEventListener("click", function(){
    wrongAnswer();
    if (questionCount == 2) {
        question2();
    } else if (questionCount == 3) {
        question3();
    } else if (questionCount ==  4){
        question4();
    } else if (questionCount == 5) {
        score = score + timeLeft; 
        endGame();
    }
}
);

answer4btn.addEventListener("click", function(){
    wrongAnswer();
    if (questionCount == 2) {
        question2();
    } else if (questionCount == 3) {
        question3();
    } else if (questionCount ==  4){
        question4();
    } else if (questionCount == 5) {
        score = score + timeLeft; 
        endGame();
    }
}
);

submitButton.addEventListener("click", function() {
    // set new submission to local storage
    
    submitButton.remove();
    var initialInput = document.querySelector("#inputs");
    var highScoreObject = {
        score: "",
        input: initialInput.value.trim()
    };
    highScoreObject.score = score;
    scoreReading.remove();
    enterInitials.remove();
    initials.remove();
    localStorage.setItem("highScoreObject", JSON.stringify(highScoreObject));
    var data = JSON.parse(localStorage.getItem("highScoreObject"));
    var highscoretext = document.createElement("h1");
    highscoretext.textContent = "Last Score";
    body.appendChild(highscoretext);
    var printScore = document.createElement("h2");
    printScore.textContent = data.input + " " + data.score + " points";
    body.appendChild(printScore);
    

  
  }
  );

  scoreButton.addEventListener("click", function() {
    var data = JSON.parse(localStorage.getItem("highScoreObject"));
    highscoretext.textContent = "Last Score";
    body.appendChild(highscoretext);
    printScore.textContent = data.input + " " + data.score + " points";
    body.appendChild(printScore);
  
  }
  );
