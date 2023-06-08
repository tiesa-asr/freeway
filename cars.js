//list of car variables
let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [45, 102, 155, 215, 270, 320];
let wCars = 50;
let hCars = 30;
let carSpeed = [2, 2.5, 3.2, 5, 3.3, 2.3];

function showCars(){
  for (let i = 0; i < carPictures.length; i++){
  image(carPictures[i], xCars[i], yCars[i], wCars, hCars);
 }
}

function moveCar(){
  for (let i = 0; i < carPictures.length; i++){
   xCars[i] -= carSpeed[i];
  }
}

function carStartPosition(){
  for (let = i = 0; i < carPictures.length; i++){
      if (passedTheScreen(xCars[i])){
    xCars[i] = 600;
    }
  }
}

function passedTheScreen(xCars){
  return xCars < - 50;
}



