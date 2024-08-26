const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
  {
    enunciado:"Lucas, Sara, Miguel e Ana encontraram um pendrive com informações sobre a infecção, mas também descobriram que a cura ainda não está completa. No caminho de volta, Miguel se sacrifica para salvar o grupo, e agora eles precisam encontrar um especialista para decifrar as informações e criar a cura.",
    alternativas: [
      {
        texto:"Enquanto estão no laboratório, o grupo é surpreendido por uma descoberta chocante: Miguel, o ex-militar, revela que ele já sabia sobre o pendrive e a infecção desde o início. Ele estava envolvido em um projeto secreto para controlar a epidemia e se aproximou do grupo apenas para garantir que o pendrive não caísse em mãos erradas. Agora, ele exige que o grupo entregue o pendrive a ele, ameaçando deixá-los à mercê dos zumbis se não o fizerem. Lucas e os outros devem decidir: confiar em Miguel e entregá-lo, ou lutar para manter o pendrive e tentar salvar o mundo por conta própria.",
        afirmacao: "afirmacao",
      },
      {
        texto:"Enquanto exploram o laboratório, Ana, a adolescente, encontra um compartimento secreto escondido atrás de uma parede falsa. Lá dentro, há um pequeno frasco contendo um líquido misterioso e um documento revelando que a cura experimental já foi desenvolvida, mas nunca testada em humanos. O grupo agora enfrenta uma escolha difícil: devem arriscar usar o antídoto imediatamente em alguém infectado, correndo o risco de que ele não funcione e possa até piorar a situação? Ou devem continuar procurando um especialista que possa confirmar sua eficácia, mesmo que isso custe tempo valioso e vidas?",
        afirmacao: "afirmacao"
      }
    ],
  },
  {
    enunciado:"No laboratório, o clima ficou tenso. Miguel, com um olhar determinado e sombrio, revelou seu segredo ao grupo. Ele já sabia sobre o pendrive e a infecção muito antes de se juntar a eles. Durante anos, ele havia trabalhado em um projeto secreto do governo para desenvolver uma arma biológica capaz de controlar grandes populações, mas algo havia dado terrivelmente errado. Agora, Miguel estava ali para garantir que o pendrive não caísse nas mãos erradas.“Entreguem o pendrive, e ninguém mais precisa morrer,” disse Miguel, levantando sua arma.Lucas, Sara e Ana ficaram paralisados por um momento. A revelação foi um choque para todos, especialmente para Sara, que acreditava estar lutando pelo bem da humanidade ao lado de Miguel. Agora, eles precisavam decidir em quem confiar e como agir",
    alternativas: [ // Corrigido para "alternativas" em vez de "Alternativas"
      {
        texto:"Lucas, percebendo que Miguel estava distraído e confiava em sua superioridade, decide jogar com a astúcia. Ele sugere que entreguem o pendrive, mas com um plano em mente: ele entrega uma cópia falsa, enquanto Ana secretamente esconde o verdadeiro pendrive. Eles pretendem atrair Miguel para fora do laboratório, onde planejam emboscá-lo. No entanto, se o plano falhar, Miguel pode descobrir a farsa e agir com ainda mais brutalidade.",
        afirmacao: "afirmacao",
      },
      {
        texto:"Sara, ainda incrédula com a traição de Miguel, toma uma decisão rápida. Ela joga uma garrafa de reagente químico no chão, criando uma cortina de fumaça espessa que desorienta Miguel. Aproveitando a confusão, Lucas, Ana e Sara tentam fugir do laboratório, levando o pendrive com eles. No entanto, ao escapar, eles se deparam com uma horda de zumbis que estava sendo atraída pelo barulho. Agora, eles precisam lutar para sobreviver enquanto tentam manter distância de Miguel, que está em seu encalço.",
        afirmacao: "afirmacao",
      }
    ],
  },
  {
    enunciado:"Lucas, mantendo a calma, acenou para Miguel e disse: “Tudo bem, Miguel, você pode levar o pendrive.” Ele então se aproximou, entregando um dispositivo que parecia ser o pendrive verdadeiro. Enquanto isso, Ana, com movimentos rápidos e discretos, escondeu o verdadeiro pendrive em um bolso interno de sua jaqueta. Miguel pegou o pendrive falso, sem suspeitar de nada.Miguel, confiante de que havia conseguido o que queria, começou a guiar o grupo para fora do laboratório. Lucas sinalizou para Sara e Ana, que entenderam que o plano estava em andamento. Quando chegaram ao exterior, em um local afastado e rodeado por destroços e carros abandonados, Lucas fez o sinal.Naquele momento, eles se prepararam para emboscar Miguel, mas sabiam que a situação poderia sair do controle a qualquer momento.",
    alternativas: [
      {
        texto:"Quando Lucas dá o sinal, Sara tenta desarmar Miguel, enquanto Lucas e Ana tentam dominá-lo. No entanto, Miguel percebe o que está acontecendo e reage rapidamente. Uma luta feroz se inicia, com golpes e tiros disparados. No calor do momento, Miguel descobre que o pendrive que ele possui é falso, o que o enfurece ainda mais. A batalha se torna uma questão de vida ou morte para todos os envolvidos.",
        afirmacao: "afirmacao",
      },
      {
        texto:"Antes que o grupo possa colocar seu plano em ação, um novo personagem aparece: um sobrevivente misterioso, que estava seguindo o grupo desde o laboratório. Ele é um cientista que trabalhou no mesmo projeto que Miguel e revela que também busca o pendrive para destruí-lo e acabar com a infecção. Ele se oferece para ajudar o grupo a capturar Miguel, mas Lucas e os outros precisam decidir se podem confiar nele, ou se ele tem suas próprias intenções ocultas.",
        afirmacao: "afirmacao",
      }
    ],
  },
  {
    enunciado:"No momento em que Lucas deu o sinal, Sara agiu rapidamente, tentando desarmar Miguel. Ela se lançou em direção a ele, tentando tirar sua arma, enquanto Lucas e Ana se moviam para imobilizá-lo. Miguel, no entanto, era um ex-militar experiente e percebeu a traição em um instante. Ele se esquivou de Sara, conseguindo manter o controle da arma, e um confronto intenso se iniciou.O som de tiros ecoou pelo local, enquanto o grupo lutava para sobreviver. Durante a luta, Miguel finalmente percebeu que o pendrive que ele havia recebido era falso. Sua raiva aumentou, e ele começou a lutar com ainda mais intensidade, determinado a fazer o grupo pagar pela traição. A batalha se tornou brutal, com cada lado lutando por suas vidas e pelo futuro da humanidade.",
    alternativas: [
      {
        texto:"Em um momento crítico da luta, Sara percebe que a única maneira de garantir a sobrevivência de Lucas e Ana é se sacrificar. Ela decide usar todas as suas forças para distrair Miguel, dando tempo para que os outros escapem. Enquanto Sara enfrenta Miguel sozinha, Lucas e Ana correm em direção a um veículo abandonado, na esperança de fugir e levar o verdadeiro pendrive a um local seguro.",
        afirmacao: "afirmacao",
      },
      {
        texto:"Durante a batalha, Ana encontra uma abertura e, com a ajuda de Lucas, consegue tirar a arma das mãos de Miguel. Ao perceber que Miguel ainda representa uma grande ameaça, eles decidem não continuar a luta, mas sim fugir para a cidade próxima. O plano é se esconder entre as ruínas, onde Miguel terá mais dificuldade em encontrá-los. No entanto, a cidade está repleta de zumbis, e o grupo terá que enfrentar novos perigos enquanto tenta se esconder e sobreviver.",
        afirmacao: "afirmacao",
      }
    ],
  },
  {
    enunciado:"Sara enfrentou Miguel com bravura, sabendo que sua decisão de se sacrificar era a única chance para Lucas e Ana escaparem. A luta foi feroz e implacável, com Sara atacando e distraindo Miguel, enquanto Lucas e Ana, com o verdadeiro pendrive em mãos, correram para um veículo abandonado próximo.",
    alternativas: [
      {
        texto:"Lucas e Ana conseguiram escapar e encontraram um antigo armazém nas periferias da cidade, onde se esconderam para se proteger dos zumbis que vagavam pela área. Dentro do armazém, encontraram suprimentos e se prepararam para decifrar as informações no pendrive. No entanto, a segurança do local não era garantida, e eles logo perceberam que o armazém estava repleto de pistas sobre outros sobreviventes, o que poderia indicar que a área estava mais segura ou mais perigosa do que imaginavam. Agora, eles precisam decidir se devem explorar o armazém para encontrar outros sobreviventes ou se concentram em desvendar o conteúdo do pendrive.",
        afirmacao: "afirmacao",
      },
      {
        texto:"Enquanto Lucas e Ana fugiam para a cidade, eles encontraram um grupo de sobreviventes que havia estabelecido um pequeno refúgio em um prédio fortificado. O grupo estava liderado por um ex-cientista que tinha conhecimentos sobre a infecção e estava disposto a ajudar a encontrar uma cura. Eles aceitaram a ajuda do novo grupo e trabalharam juntos para decifrar as informações no pendrive. No entanto, a chegada de Miguel e sua horda de zumbis tornou a situação crítica, e Lucas e Ana devem decidir se confiam completamente nos novos aliados ou se precisam agir rapidamente para proteger o pendrive e sua missão.",
        afirmacao: "afirmacao",
      }
    ],
  }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = ""

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa))
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}
function respostaSelecionada(opcaoSelecionada){
  const afirmacoes = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacoes + " "
  atual++;
 mostraPergunta();
}

function mostraResultado(){
  caixaPerguntas.textContent = "Em 2049..."
  textoResultado.textContent = historiaFinal
  caixaAlternativas.textContent = "";

}  



mostraPergunta()
