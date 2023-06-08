//chicken variables
let xChicken = 100;
let yChicken = 366; 
let wChicken = 28;
let hChicken = 28;

//chick variables
let xChick = 83; 
let yChick = 15;
let wChick = 15;
let hChick = 15;

let collision = false;

//game score
let myPoints = 0;

function showChicken(){
  image(chickenPicture, xChicken, yChicken, wChicken, hChicken);
}

function showChick(){
  image(chickPicture, xChick, yChick, wChick, hChick);
}

function moveChicken(){
  if (keyIsDown(UP_ARROW)){
    yChicken -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(canMove()){
          yChicken += 3;
    }
  }
}

function checkCollision(){
  for (let i = 0; i < carPictures.length; i++){
    collision = collideRectCircle(xCars[i], yCars[i], wCars, hCars, xChicken, yChicken, 16)
    if (collision){
      backToStartingPosition();
      crash.play();
      if (pointsGreaterThanZero()){
        myPoints -= 1;  
      }
    }
  }
}

function backToStartingPosition(){
  yChicken = 366;
}

function addScore(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(65, 105, 225));
  rect(10, 7, 40, 20, 20);
  fill(255);
  text(myPoints, 30, 23);
}

function scorePoints(){
  if (yChicken < 12){
   myPoints += 1;
    scoreSound.play();
     backToStartingPosition();
  }
}

function pointsGreaterThanZero(){
  return myPoints > 0;
}

function canMove(){
  return yChicken < 366;
}















