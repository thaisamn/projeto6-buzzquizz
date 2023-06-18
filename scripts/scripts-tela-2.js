let quizClicado;
let opcaoCorreta;

function renderizarTela2(quiz){
quizClicado = quiz;
// pegar a capa do quiz ex: document.querySelector
const capa = document.querySelector('.capa-quizz');

// inserir o innerHTML usando interpolação do quiz clicado

capa.innerHTML = 
`
<img src="${quiz.image}" alt="">
<p>${quiz.title}</p>
`;

const pergunta = quiz.questions[0];
renderizarPergunta(pergunta);


}

function renderizarPergunta(pergunta){
const elementoTitulo = document.querySelector(`.pergunta-individual`);
elementoTitulo.innerHTML=`
    <p>${pergunta.title}</p>
`

pergunta.answers.forEach(element => {
    renderizarOpcoesDePerguntasIndividual(element);
});
}


function renderizarOpcoesDePerguntasIndividual(opcoes){
    const elementoTitulo = document.querySelector(`.imagens-para-selecionar`);
    const opcao = `<div onclick="clickOpcao(this, ${opcoes.isCorrectAnswer})" class="opcoes-unidades">
        <img src="${opcoes.image}" alt="">
        <p>${opcoes.text}</p>
    </div>
    `
    elementoTitulo.innerHTML += opcao
   
}

function clickOpcao(itemClicado, isCorrectAnswer){
  selecionarOpcoes(itemClicado);
  verificarResposta(itemClicado, isCorrectAnswer);
}
    
function selecionarOpcoes(itemClicado){
  const listaOpcoes = document.querySelectorAll('.opcoes-unidades');
  listaOpcoes.forEach(element => {
      if( element != itemClicado){
          element.classList.add('naoSelecionado');
      }
  });
}

function verificarResposta(itemClicado, isCorrectAnswer){
  if(isCorrectAnswer){
    itemClicado.classList.add('respostaCerta');
  }else{
    itemClicado.classList.add('respostaErrada');
  }
}

// {
// 	title: "QUIZZ TESTE",
// 	image: "https://http.cat/411.jpg",
// 	questions: [
// 		{
// 			title: "Título da pergunta 1",
// 			color: "#123456",
// 			answers: [
// 				{
// 					text: "Texto da resposta 1",
// 					image: "https://http.cat/411.jpg",
// 					isCorrectAnswer: true
// 				},
// 				{
// 					text: "Texto da resposta 2",
// 					image: "https://http.cat/412.jpg",
// 					isCorrectAnswer: false
// 				}
// 			]
// 		},
// 		{
// 			title: "Título da pergunta 2",
// 			color: "#123456",
// 			answers: [
// 				{
// 					text: "Texto da resposta 1",
// 					image: "https://http.cat/411.jpg",
// 					isCorrectAnswer: true
// 				},
// 				{
// 					text: "Texto da resposta 2",
// 					image: "https://http.cat/412.jpg",
// 					isCorrectAnswer: false
// 				}
// 			]
// 		},
// 		{
// 			title: "Título da pergunta 3",
// 			color: "#123456",
// 			answers: [
// 				{
// 					text: "Texto da resposta 1",
// 					image: "https://http.cat/411.jpg",
// 					isCorrectAnswer: true
// 				},
// 				{
// 					text: "Texto da resposta 2",
// 					image: "https://http.cat/412.jpg",
// 					isCorrectAnswer: false
// 				}
// 			]
// 		}
// 	],
// 	levels: [
// 		{
// 			title: "Título do nível 1",
// 			image: "https://http.cat/411.jpg",
// 			text: "Descrição do nível 1",
// 			minValue: 0
// 		},
// 		{
// 			title: "Título do nível 2",
// 			image: "https://http.cat/412.jpg",
// 			text: "Descrição do nível 2",
// 			minValue: 50
// 		}
// 	]
// }


{/* <div class= "respostaCerta respostaErrada naoSelecionado opcoes-unidades"> <!-- clas resposta certa, errada e nao selecionado colocado apenas para fazer teste e adiantar-->
                        <img  src="./imgs/bichopreguica.png" alt="">
                        <p>Animal</p> 
                    </div> */}