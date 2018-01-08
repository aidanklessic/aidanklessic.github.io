

function setup() 
{
  createCanvas (windowWidth, windowHeight);
colorMode(HSB, 360, 100,100,100);
}


function draw() 
{

  background( random(0, 255), random(0, 255), random(0, 255) );
  fill(255);
  stroke (250,0,0);
  strokeWeight (8);
  rectMode(CENTER);
  rect (width/2, height/2, 250, 250);

  fill(0, 250, 0);
  noFill();
  ellipseMode(CORNER);
  ellipse(width/2, height/2, 200, 200); 
  
  stroke(0,0,0);
  line(0, 0, width , height);
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
