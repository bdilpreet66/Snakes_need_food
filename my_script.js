var snake;
var scl = 20;

var food;

function setup(){
  createCanvas(600,550);
  snake = new Snake();
  frameRate(10);

  pickLocation();
}

function pickLocation(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)),floor(random(rows)));
  food.mult(scl);
}

function draw(){
  background(255);
  snake.death();
  snake.update();
  snake.show();
  if(snake.eat(food)){
    pickLocation();
  }
  fill(floor(random(255)),floor(random(255)),floor(random(255)));
  rect(food.x,food.y,scl,scl);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    snake.dir(0,-20);
  } else if(keyCode === DOWN_ARROW){
    snake.dir(0,20);
  } else if(keyCode === LEFT_ARROW){
    snake.dir(-20,0);
  } else if(keyCode === RIGHT_ARROW){
    snake.dir(20,0);
  }
}
