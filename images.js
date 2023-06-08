//game screenshots
let roadPicture;
let chickenPicture;
let chickPicture;
let car1Picture;
let car2Picture;
let car3Picture;

//game sounds
let soundTrack;
let scoreSound;
let crash;

function preload(){
  roadPicture = loadImage("images/road.png");
  chickenPicture = loadImage("images/chicken.png");
  chickPicture = loadImage("images/chick.png");
  car1Picture = loadImage("images/car1.png");
  car2Picture = loadImage("images/car2.png");
  car3Picture = loadImage("images/car3.png");
  
  carPictures = [car1Picture, car2Picture, car3Picture, car1Picture, car2Picture, car3Picture];
  
  soundTrack = loadSound("sounds/soundtrack.mp3");
  scoreSound = loadSound("sounds/score.wav");
  crash = loadSound("sounds/crash.mp3");
}