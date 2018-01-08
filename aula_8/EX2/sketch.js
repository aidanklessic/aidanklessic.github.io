var c1, c2;

function setup()
{
    createCanvas(windowWidth, windowHeight);
    colorMode(RGB, 255, 255, 255, 100); 
}

function draw()
{
    var c1 = color (255, 255, 0, 100);
    var c2 = corAleatoria();

    background(c2);

    alvo (random(width/2), random(height/2), 500, 400, c1, c2);
    stroke (c2);
    noFill ();
    ellipse (width/2, height/2, 500, 500);
   

}

function alvo(x, y, diametroMaior, numCirculos, c1, c2)
{
    if (numCirculos > diametroMaior)
    {
        print ("Erro: numero de circulos nao pode ser maior do que o diametro Maior");
        noLoop();
    }

    else
    {
        var t = diametroMaior/numCirculos;
        
            for (var i=numCirculos; i>0; i--)
            {
                //stroke( map(i, numCirculos, 0, 255, 0) );
                var c = lerpColor (c1, c2, (1/numCirculos)*i );
                stroke(c);
                ellipse(x, y, t*i, t*i);
            }
    }
    
}

function corAleatoria()
{
    var c= color (random(255), random(255), random(255), 0);
    return c;
}

function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}