var brushColour; // declaring the brush colour globally

let img; // inputting the img

function preload(){ // loading the img into the program
  img = loadImage ('assets/smiley.png');
}



function setup() {
  createCanvas(800, 400); // canvas size
  strokeWeight(5); // stroke of the brush
  background (255); // background canvas colour
  brushColor = color(50); // default stroke colour
}

function draw() {
  if (mouseIsPressed) {
    if (mouseX <= 50) {
      if (mouseY <= 50) {
        brushColor = color(224, 187, 228); // changes to colour to light purple if it hits the colour paint
      } else if (mouseY <= 100) {
        brushColor = color(149, 125, 173);
      } else if (mouseY <= 150) {
        brushColor = color(255, 0, 199);
      } else if (mouseY <= 200) {
        brushColor = color(210, 145, 188);
      } else if (mouseY <= 250) {
        brushColor = color(254, 200, 216);
      } else if (mouseY <= 300) {
        brushColor = color(255, 223, 211);
      } else if (mouseY <= 350) {
        brushColor = color(255, 255, 0);
      }
    }
    
    push();
    stroke(brushColor)
    line(mouseX, mouseY, pmouseX, pmouseY); // allows to create lines
    pop();
  }

  //noStroke();
  //start coding for your color squares here!
  stroke(color(255)); // the colour of the grid of the color palette
  fill(224, 187, 228);
  rect(0, 0, 50, 50);
  fill(149, 125, 173);
  rect(0, 50, 50, 50);
  fill(255, 0, 199);
  rect(0, 100, 50, 50);
  fill(210, 145, 188);
  rect(0, 150, 50, 50)
  fill(254, 200, 216);
  rect(0, 200, 50, 50);
  fill(255, 223, 211);
  rect(0, 250, 50, 50);
  fill(255, 255, 0);
  rect(0, 300, 50, 50);

  
  if(mouseIsPressed) {
    image(img, mouseX,mouseY, random(10, 50), random(10,50) ); // causes the png the spur different sizes back and forth
  }
 
  if (mouseButton === mouseIsPressed)  
  
  if (mouseIsPressed === true){
    if (mouseButton === CENTER) {
      image( img, mouseX, mouseY, 50, 50); // inputs the png in the canvas
    }
  }

  
function keyPressed(){
  background(255, 255, 255); // turns the canvas into white, clearing the canvas
}
}