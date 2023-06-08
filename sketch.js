function setup() {
  createCanvas(500, 400);
  soundTrack.loop();
}

function draw() {
  background(roadPicture);
  showChicken();
  showChick();
  showCars();
  moveCar();
  moveChicken();
  carStartPosition();
  checkCollision();
  addScore();
  scorePoints();
}
