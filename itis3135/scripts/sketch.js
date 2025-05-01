function setup() {
    createCanvas(600, 400);
    background(240, 220, 240);
  }
  
  function draw() {
    fill(255, 204, 0);
    stroke(100);
    strokeWeight(2);
    ellipse(mouseX, mouseY, 50, 50);
  }
  