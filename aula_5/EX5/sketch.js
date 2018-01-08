
var x, y, t, factorCrescimento;

function setup()
{
    createCanvas(windowWidth, windowHeight);

    x = width/2;
    y = height/2;
    v = 30;
    t = v;
    factorCrescimento = 2;
}

function draw()
{
    if (frameCount%75) background (255, 10);
    x += random(-v, v);
    y += random(-v, v);

    if (x<=0) x+=t;
    if (x>=width) x-=t;
    if (y<=0) y+=t;
    if (y>=height) y-=t;
    

    if(t>30 || t<0) factorCrescimento*=-1;

    t += factorCrescimento;

    noFill();
    strokeWeight(1);
    stroke(random(255), random(255), random(255,));
    ellipse(x, y, t, t);
}

function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}