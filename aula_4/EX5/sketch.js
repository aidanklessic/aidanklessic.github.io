var cor;
function setup()
{
    createCanvas(windowWidth, windowHeight);
    cor=0;
}

function draw()
{
 if(mouseX > width/2) cor++;
 else cor--;
 if (cor>255) cor = 255;
 if (cor<0) cor = 0;
 background(cor);
 stroke(255, 0, 0);
 line(width/2, 0, width/2, height);
}

function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}