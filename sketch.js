var canva;

var gameState = 0;
var contestantCount;
var database;
var question;
var contestant;
var object;


function setup(){
  database = firebase.database();
  canvas = createCanvas(800,600);
  
  object = new Quiz(200,200,20,20)
  object.getState();
  object.start();
}


function draw(){
  background("pink");

  object.display();

}
