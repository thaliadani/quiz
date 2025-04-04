// PARTE 1: Lista de perguntas e respostas
perguntas = [
  {
    pergunta: "Qual é a capital do Brasil?",
    respostas: [
      { opcao: "Brasília", correto: true },
      { opcao: "Rio de Janeiro", correto: false },
      { opcao: "São Paulo", correto: false },
      { opcao: "Salvador", correto: false },
    ],
  },
  {
    pergunta: "Quantos estados tem o Brasil?",
    respostas: [
      { opcao: "26", correto: false },
      { opcao: "27", correto: true },
      { opcao: "25", correto: false },
      { opcao: "28", correto: false },
    ],
  },
    {
        pergunta: "Qual é o maior país do mundo?",
        respostas: [
        { opcao: "Brasil", correto: false },
        { opcao: "Rússia", correto: true },
        { opcao: "Canadá", correto: false },
        { opcao: "China", correto: false },
        ],
    },
    {
        pergunta: "Qual é o continente mais populoso?",
        respostas: [
        { opcao: "África", correto: false },
        { opcao: "América do Norte", correto: false },
        { opcao: "Ásia", correto: true },
        { opcao: "Europa", correto: false },
        ],
    },

];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (const resposta of perguntaAtual.respostas) {
    // Cria um botão para a resposta atual
    const button = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilização
    button.classList.add("botao-resposta");
    // Define o texto do botão com a opção da resposta (resposta.opcao)
    button.innerText = resposta.opcao;
    // Adiciona um evento de clique ao botão
    button.onclick = function () {
      // Se a resposta estiver correta (resposta.correto === true), incrementa o contador de acertos
      if (resposta.correto) {
        acertos++;
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão da resposta na tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(button);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();
