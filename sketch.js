var canva;
var contestantCount;
var gameState = 0;
var database;
var contestant1;
var question;
var quizObj;

function setup(){
  database = firebase.database();
  canva = createCanvas(850,400);
  contestant1 = new Contestant();

  question = new Question();
  quizObj = new Quiz();
  
  quizObj.getState();
  quizObj.start();
  
  
}


function draw(){
  background("pink");
  
  
}
