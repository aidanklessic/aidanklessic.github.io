var circulos = [];
var numCirculos;

function setup()
{
    createCanvas(windowWidth, windowHeight);

    numCirculos = 1000;

    for (var i=0; i<numCirculos; i++)
    {
        circulos[i] = new Circuloembriagado();
    }
}

function draw()
{
    for (var i=0; i<numCirculos; i++)
    {
        circulos[i].anima();
        circulos[i].desenha();
    }

}

function Circuloembriagado ()
{
    this.x = random(width);
    this.y = random(height);
    this.d = random(10, 30);
    this.s = 3;

    this.anima = function()
    {
        this.x += random(-this.s, this.s)
        this.y += random(-this.s, this.s)
    }

    this.desenha = function ()
    {
        fill(255);
        ellipse(this.x, this.y, this.d, this.d);
        
    }
}


function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}