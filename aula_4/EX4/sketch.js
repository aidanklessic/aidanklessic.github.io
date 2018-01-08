var frase;

function setup()
{
    createCanvas(windowWidth, windowHeight);

    frase = "Olá mundo!!!";

}

function draw()
{
    background(255);
    textStyle(ITALIC);
    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    textFont("Nosifer");
    textLeading(700);
    textSize(50);
    text(frase, width/2, height/2, 50);
}

function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}