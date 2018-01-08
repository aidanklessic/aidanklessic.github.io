var circulos = [];
var numCirculos;

function setup()
{
    createCanvas(windowWidth, windowHeight);

    numCirculos = 10;

    for (var i=0; i<numCirculos; i++)
    {
        circulos[i] = new Circuloembriagado(random(width), random(height), random(10, 30), 3);
    }
}

function draw()
{
    for (var i=0; i<circulos.length; i++)
    {
        var distancia = dist(mouseX, mouseY, circulos[i].posX(), circulos[i].posY());

        if (distancia <= circulos[i].diametro()/2)
        {
            circulos[i].mudaCor(true);
        }
        else
        {
            circulos[i].mudaCor(false);
        }
        circulos[i].anima();
        circulos[i].desenha();
    }

}

function mousePressed()
{
    append(circulos,  new Circuloembriagado(mouseX, mouseY, random(10, 30), 3) );
}

class Circuloembriagado
{
    constructor (x_, y_, d_, s_)
    {
    this.x = x_;
    this.y = y_;
    this.d = d_;
    this.s = s_;
    this.c = color (255);
    }

    anima()
    {
        this.x += random(-this.s, this.s)
        this.y += random(-this.s, this.s)
    }

    mudaCor(preenche_)
    {
        if (preenche_ === true)
        {
            this.c = color(255, 0, 0);
        }
        else
        {
            this.c = color (255);
        }
    }

    desenha()
    {
        fill(this.c);
        ellipse(this.x, this.y, this.d, this.d);   
    }

    posX()
    {
        return this.x;
    }

    posY()
    {
        return this.y;
    }

    diametro()
    {
        return this.d;
    }
}



function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}