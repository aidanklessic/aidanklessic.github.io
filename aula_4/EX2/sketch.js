var x, y, t, vX, vY;
// t = tamanho
// v= velocidade

function setup()
{
    createCanvas(windowWidth, windowHeight);

    x = width/2;
    y = height/2;
    t = 100;
    vX = 3;
    vY = vX;
}

function draw()
{
    background(255, 50);
    velocidade();
    colisoes();
    desenha();
}    

function colisoes()
{
    if (x+t/2 > width || x-t/2 < 0)
    {
        vX*=-1;
        fill(random(255), random(255), random(255));
        background(255, 100);
    }

    if (y+t/2 >height || y-t/2 < 0)
    {
        vY*=-1;
        fill(random(255), random(255), random(255));
        background(255, 100);
    }
}

function velocidade()
{
    x+=vX;
    y+=vY;
}

function desenha()
{
    ellipse(x, y, t, t);
    noStroke();
}

function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}