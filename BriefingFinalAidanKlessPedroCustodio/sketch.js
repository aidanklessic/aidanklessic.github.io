//Trabalho desenvolvido por Pedro Custódio (3150546) e Aidan Kless (3150493)
//Ano Lectivo 2017/2018 || 1ºSemestre || Laboratório de Projecto || Design Gráfico e Multimédia || ESAD.CR || Docente - Marco Heleno || 08-01-2018

var anos=[]; //Criação do array com o nome de Anos
var dados; //Criação da variável com o nome dados
var numeroCirculos;
var x,y,r,tecla,texto;
function preload(){ //Função para carregar ficheiros antes de começar a correr o script
  dados = loadTable("assets/input_keyboard.csv", "csv","header"); //É atribuida à variável dados a tabela préviamente criada com os dados para análise
}


function setup() 
{
  createCanvas (windowWidth, windowHeight); //Cria o ambiente onde vai correr o script com o tamanho do browser
  numeroCirculos = 63; //Número de elementos que vão ser lidos da tabela
  var limiteMaximo = 0;
  while (anos.length < numeroCirculos) //Ciclo de repetição que acaba quando o array chegar ao número total da variavel com o valor acima atribuido
  {
    for (var linha=0; linha<63; linha++){ //Ciclo de repetição para correr todas as linhas da tabela CSV
    for (var coluna=0; coluna<dados.getColumnCount();coluna++){ //Ciclo de repetição para correr todas as colunas da tabela CSV
      var ano= dados.getString(linha,0); //Criação e atribuição do valor que se encontra na coluna 0 mas que muda a linha, este valor é a data, é necessário a utilização do getString pois são palavras e não números
      var key=dados.getString(linha, 1);
      var novoX = random (width); //Criação de uma variável com um valor aleatório da largura do ecrã
      var novoY = random (height); //Criação de uma variável com um valor aleatório da altura do ecrã
      var novoR = dados.getNum(linha,3);
      var SobrePosicao = false; //Criação de uma variável para controlar a sobreposição das bolas
      var tamanhoMin=0; //Criação de uma variável para alojar o valor mais baixo da tabela
      var tamanhoMax=0; //Criação de uma variável para alojar o valor mais elevado da tabela

      x=novoX;
      y=novoY;
      r=novoR;
      tecla=key;
      

    for (var i=0; i<anos.length; i++) //Ciclo de repetição em que se cria uma variável i e que esta mesma é incrementada, e este ciclo termina quando o valor de i atinge o numero de posições do array
    {
      if (tamanhoMin<anos[i].r) tamanhoMin=r; //Condição para comparar os valores da tabela e atribuilos a uma variável
      if (tamanhoMax>anos[i].r) tamanhoMax=r;
      
      var distanciaEntrePontosXY = dist (novoX, novoY, anos[i].posX(), anos[i].posY()); //Função para calcular a distância entre cada cada bola para não existir sobreposição entre elas
    
      if (distanciaEntrePontosXY <= novoR+anos[i].raio()) SobrePosicao = true; //Condição para confirmar se existe ou nao sobreposição, caso exista a variavél SobrePosição fica com o valor de true

    }

    if (novoX+novoR>width) { //Condição para cálcular quando as bolas saem do ecrã e colocalas com novas coordenadas de modo a que não fiquem com partes fora do ecrã
      novoX=novoX-novoR; //Subtracção do valor de x com o raio da circunferência quando este passa o comprimento total do ecrã
      break;
    }

    if (novoX-novoR<0) {
      novoX=novoX+novoR;
      break;
    }

    if (novoY-novoR<0) {
      novoY=novoY+novoR;
      break;
    }

    if (novoY+novoR>height) {
      novoY=novoY-novoR; //Subtracção do valor de y com o raio da circunferência quando este passa a altura total do ecrã
      break;
    }
    if (SobrePosicao === false) anos[anos.length] = new Circulo(novoX, novoY, novoR); //Condição para criar um circulo quando não existe sobreposição, esta é feita a partir de uma class "Circulos"
    
    textSize(10); //Definição do tamanho de letra
    textAlign(CENTER); //Alinhamento do texto ao centro
    text('"'+key+'"'+" - "+novoR, x, y); //Texto que será a tecla seguido de um hifen com o valor do raio da circunferência que será o tamanho das bolas que tem a haver com a quantidade de vezes que esta tecla foi pressionada

    print(ano+" - "+key+" - "+novoR); //Esta linha de código faz com que na consola apareçam todos os valores apresentados no ecrã
    limiteMaximo++; //Contador que delimita a quantidade de vezes que o ciclo é repetido quando está a tentar colocar as bolas no sitio sem sobreposição, nesta linha o contador é incrementado

    if (limiteMaximo > 100000) //Condição para verificar se o contador chega a 100000 tentativas
    {
      break; //Paragem do script 
      print ("Não há espaço livre"); //Mensagem de erro a avisar o utilizador que as bolas não cabem no ecrã
    }
    }
    }
  }
}

function draw(){
  for (var i=0; i<anos.length; i++)
  {
    anos[i].desenha(); //O array anos é chamado para desenhar todas as bolas nos sitios correctos para o ecrã, isto é conseguido a partir da class em baixo
  }
}

class Circulo //Criação da class com o nome de Circulo
{
  constructor(x_,y_,r_,ano_,key_){ //Nesta linha de código a class recebe valores enviados quando esta é chamada na função Setup
    this.x = x_; //atribuição de uma variável externa para dentro das variáveis locais da class
    this.y = y_;
    this.ano = ano_;
    this.key = key_;
    this.r=r_;
    this.c = color(255,0,0,50); //Atribuição de um valor de cor a uma variável
  }

  desenha() //Função para desenhar os circulos
  {
    noStroke(); //Remoção da outline
    fill (this.c); //O interior das bolas será preenchido pelo valor atribuido á variável this.c
    ellipseMode (RADIUS); //Em vez de alinha os circulos com o seu diâmetro, alinha com o seu raio
    ellipse (this.x, this.y, this.r, this.r); //Atribuição de coordenadas e de um raio com base nos valores calculados em cima
    noLoop(); //Para o loop para poder manter o alpha nas bolas
  }
  posX () 
  {
    return this.x; //Devolve para o script o valor de X
  }

  posY () 
  {
    return this.y;
  }

  raio ()
  {
    return this.r;
  }
}



function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight); //Função para ser um website responsive
}