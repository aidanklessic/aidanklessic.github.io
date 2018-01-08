

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  colorMode (HSB,360,100,100, 100);
  background (0, 0, 100);

}


function draw() 
{
//background(0);
  stroke (map (mouseX, 0, width, 0, 360), 100, 100);
  strokeWeight (abs(mouseX-pmouseX) + abs(mouseX-mouseY) );

  line(mouseX, mouseY, pmouseX, pmouseY);
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
function mousePressed()
{
  if (mouseButton === LEFT);
  {
    background (0, 0, 100);
 }

}

function keyPressed()
{
  if (key === 'C'||key === 'c' || keyCode === ENTER);
  {
    background (0, 0, 100);
 }

}
