var anos = [];
var dados;

function preload()
{
  dados = loadTable("assets/dados.csv", "csv", "header");
}

function setup() 
{
  createCanvas (windowWidth, windowHeight);

  //print ( dados.getRowCount() );
  //print(dados.getColumnCount());
  //print(dados.getColumn("Homens"));
  
  for (var linha=0; linha<dados.getRowCount(); linha++) 
  {
    for (var coluna=0; coluna<dados.getColumnCount(); coluna++) 
    {
      var ano = dados.getString(linha, 0);
      var homens = dados.getNum(linha, 1);
      var mulheres = dados.getNum(linha, 2);

      anos [linha] = new Ano (ano, homens, mulheres);
    }
  }

}

function draw() 
{
  for (var i=0; i<dados.getRowCount(); i++)
  {
    anos[i].desenha();
  }
  noLoop();
}

class Ano
{
  constructor (ano_, homens_, mulheres_)
  {
    this.x = random(width);
    this.y = random(height);
    this.ano = ano_;
    this.homens = homens_;
    this.mulheres = mulheres_;
  }

  desenha ()
  {
    //print(this.ano+" - "+this.homens+" - "+this.mulheres);

    noFill();

    stroke(0, 0, 255);
    ellipse (this.x, this.y, this.homens);

    stroke(255, 0, 0);
    ellipse (this.x, this.y, this.mulheres);

    text(this.ano, this.x, this.y);
  }
}

function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}