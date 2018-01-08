var t, numLinhas, numColunas, escolheForma;

function setup()
{
    createCanvas(windowWidth, windowHeight);
    frameRate(10);
    
}

function draw()
{
    background(255);

    t = width/50;
    numLinhas = height/t;
    numColunas = width/t;
    //print(t);

    noStroke();
    fill(0);
    ellipseMode(CORNER);

    for (var x=0; x<numColunas; x++)
    {
        for (var y=0; y<numLinhas; y++)
        {
            escolheForma = int(random(1,3));
            //print(escolheForma);
    
            if (escolheForma === 1)
            {
                ellipse(x*t, y*t, t, t);
            }
    
            if (escolheForma === 2)
            {
                rect(x*t, y*t, t, t);
            }
        }
        
    }
}
function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}