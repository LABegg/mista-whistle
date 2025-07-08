let playerX = 100;
let playerY = 100;
let speed = 4;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(30);
  
  // Player as white circle
  fill(255);
  ellipse(playerX, playerY, 40, 40);
  
  // Example: Mr. Whistle jumpscare zone
  if (playerX > 400 && playerX < 450) {
    fill(255, 0, 0);
    textSize(32);
    text("WHISTLE...", 300, 300);
  }
}

function keyPressed() {
  if (key === 'w') playerY -= speed;
  if (key === 's') playerY += speed;
  if (key === 'a') playerX -= speed;
  if (key === 'd') playerX += speed;
}

