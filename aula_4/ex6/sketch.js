
var x, y, t;

function setup() 
{
  createCanvas (windowWidth, windowHeight);
}


function draw() 
{
  t = width/2;

  //Quadrado1
  if (mouseX<width/2 && mouseY<height/2){
    fill(255);
  }
  else{
    fill(0);
  }

  noStroke();
  rectMode(CORNER);
  rect(0, 0, t, height/2);


  //Quadrado3
  if (mouseX<=width/2 && mouseY>=height/2){
    fill(255);
  }
  else{
    fill(0);
  }

  noStroke();
  rectMode(CORNER);
  rect(0, height/2, t, height/2);
  

  //Quadrado2
  if (mouseX>=width/2 && mouseY<=height/2 ){
    fill(255);
  }
  else{
    fill(0);
  }

  noStroke();
  rectMode(CORNER);
  rect(width/2, 0, t, height/2);


  //Quadrado4
  if (mouseX>width/2 && mouseY>height/2){
    fill(255);
  }
  else{
    fill(0);
  }
  
  noStroke();
  rectMode(CORNER);
  rect(width/2, height/2, t, height/2);

}

function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
