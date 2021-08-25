var readlinesync=require("readline-sync");
var chalk=require('chalk');


var questions= [{
  question:"What is the real name of Captain America in MCU ? : ",
  answer:"Steve Rogers",
},

{
  question:"What is device which powers iron man suit called ? : ",
  answer:"Arc Reactor",
},

{
  question:"What is the name of Tony Stark's father? : ",
  answer:"Howard Stark",
},

{
  question:"What is the name of material that Iron man's suit is made up of? : ",answer:"Vibranium",
},

{
  question:"What is the name of personality that changes into Hulk? : ",
  answer:"Bruce Banner",
}];


var score = 0;

function welcome() {
  var welcomeMsg=chalk.white.bgBlue.bold("-: Welcome to this Marvel Cinematic Universe Quiz Game :-") + chalk.grey.bgWhite.italic("\n\nAre you the biggest MCU fan? Well you can check out yourself by playing this amazing quiz game where you have to answer " +questions.length+" questions based on marvel superheroes.")
  console.log(welcomeMsg);

var userName=readlinesync.question(chalk.blue.bgGreen.bold("\nPlease enter your name:\t"))

console.log("\nHey "+userName+" , Let's start the game\n");
}


function checkAnswer(question,answer) {
  var answered = readlinesync.question(question);

  if( answered.toUpperCase() === answer.toUpperCase() ) {
    score += 1;
    console.log("Yay! correct answer");
  } else {
    console.log("Oops! wrong answer");
  }

  console.log("Current score: ", score);
  console.log("--------------------------------------------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    checkAnswer(currentQuestion.question, currentQuestion.answer)
  }
}

function showFinalScore() {
  console.log("\nYay this game is completed now.\nYour final score is: ", score);

  if (score == questions.length) {
    console.log("\nCongratulations you have scoreed Highest score. Thank you for playing. Have a nice day...");
  } else {
    var difference = questions.length-score;
    console.log("\nOh sorry! you missed the highscore by ", difference);
    console.log("But you had fun right? and that's what is more important. Thank you for playing. Have a nice day...");
  }
}

welcome()
game()
showFinalScore()