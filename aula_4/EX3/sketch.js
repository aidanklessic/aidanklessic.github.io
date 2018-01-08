function setup()
{
    createCanvas(windowWidth, windowHeight);

}

function draw()
{
    stroke(255, 0, 0, 100);
    line(width/2, 0, width/2, height);
}

function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}