// teste guilherme 

axios.defaults.headers.common["Authorization"] = "2TjnuBhj7Kpss5QJF2YSHoj0";
const localStorage = window.localStorage

window.addEventListener('load', () => {
  iniciar();
});

function iniciar() {
	renderizarTodosQuizzes();
}

iniciar();

// função mudarDePagina -- INICIO PARA FORMULARIO DE CRIAR QUIZZ;
function mudarDePagina(pagina) {	
	const paginas = document.querySelectorAll('.paginas');
	paginas.forEach(pag => {
		if(!pag.classList.contains(pagina)){
			pag.classList.add('esconder')
		}else{
			pag.classList.remove('esconder')
		}
	})
}

function SelecionandoQuiz(quizSelecionado) {	
	mudarDePagina('pagina-2')
}




async function renderizarTodosQuizzes(){
	const elementoTodosOsQuizzes = document.querySelector('.todos-quizzes');
	const elementoSeusQuizzes = document.querySelector('.seus-quizzes');

	const quizzes = await obterQuizzes();
	const {seusQuizzes, todosOsQuizzes} = separandoQuiz(quizzes)
	todosOsQuizzes.forEach(quiz => {
		elementoTodosOsQuizzes.innerHTML += 
		`<div class="caixa-individual-quizz"> 
		<img src="${quiz.image}" alt="">
		<p>${quiz.title}</p>
		</div>`
	})

	seusQuizzes.forEach(quiz => {
		elementoSeusQuizzes.innerHTML += 
		`<div class="caixa-individual-quizz"> 
		<img src="${quiz.image}" alt="">
		<p>${quiz.title}</p>
		</div>`
	})

}

function separandoQuiz(quizzes){

	const todosOsQuizzes = [], quizzesDoUsuario = [];
	let seusQuizzes = pegarSeusQuizes();
	console.log('seusQuizzes', seusQuizzes)
	
	quizzes.forEach(quiz => {
		let quizSalvo = seusQuizzes.find(q => q.id == quiz.id)
		if(quizSalvo){
			quizzesDoUsuario.push(quiz)
		}else{
			todosOsQuizzes.push(quiz)
		}
	})


	return {
		todosOsQuizzes,
		seusQuizzes: quizzesDoUsuario
	}

}


// Obter quizzes:
// get - https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes
async function obterQuizzes() {
  const resposta = await axios.get(
    "https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes"
  );

	return resposta.data;
}

// criar quizzes:
// post - https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes
async function criarQuizz(dadosQuizz) {
  const promise = await axios.post(
    "https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes",
    dadosQuizz
  );

   return promise.data
}

function pegarSeusQuizes( ) {
	const data = localStorage.getItem('meus-quizzes')
	console.log('data pegar seus quizes', data)
	if(data){
		return JSON.parse(data)
	}else {
		return [];
	}
}

function salvarQuizes(quiz){
	const quizzes = pegarSeusQuizes();
	quizzes.push(quiz)
	const data = JSON.stringify(quizzes);
	localStorage.setItem('meus-quizzes', data)
}





// objeto array:

// [
// 	{
// 		id: 1,
// 		title: "Título do quizz",
// 		image: "https://http.cat/411.jpg",
// 		questions: [
// 			{
// 				title: "Título da pergunta 1",
// 				color: "#123456",
// 				answers: [
// 					{
// 						text: "Texto da resposta 1",
// 						image: "https://http.cat/411.jpg",
// 						isCorrectAnswer: true
// 					},
// 					{
// 						text: "Texto da resposta 2",
// 						image: "https://http.cat/412.jpg",
// 						isCorrectAnswer: false
// 					}
// 				]
// 			},
// 			{
// 				title: "Título da pergunta 2",
// 				color: "#123456",
// 				answers: [
// 					{
// 						text: "Texto da resposta 1",
// 						image: "https://http.cat/411.jpg",
// 						isCorrectAnswer: true
// 					},
// 					{
// 						text: "Texto da resposta 2",
// 						image: "https://http.cat/412.jpg",
// 						isCorrectAnswer: false
// 					}
// 				]
// 			},
// 			{
// 				title: "Título da pergunta 3",
// 				color: "#123456",
// 				answers: [
// 					{
// 						text: "Texto da resposta 1",
// 						image: "https://http.cat/411.jpg",
// 						isCorrectAnswer: true
// 					},
// 					{
// 						text: "Texto da resposta 2",
// 						image: "https://http.cat/412.jpg",
// 						isCorrectAnswer: false
// 					}
// 				]
// 			}
// 		],
// 		levels: [
// 			{
// 				title: "Título do nível 1",
// 				image: "https://http.cat/411.jpg",
// 				text: "Descrição do nível 1",
// 				minValue: 0
// 			},
// 			{
// 				title: "Título do nível 2",
// 				image: "https://http.cat/412.jpg",
// 				text: "Descrição do nível 2",
// 				minValue: 50
// 			}
// 		]
// 	}
// ]

// Obter um único quizz: https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes/ID_DO_QUIZZ

/**
 * TELA 1
 *
 * [ ] Listar Quizes
 * [ ] Diferenciar Quizes do usuário dos geral
 * [ ]
 */

// Criar a primeira função para executar o projeto

// apenas mostrar 'seus quizzes e a lista de baixo mostrar todos quizzes

// função ao clicar no 'criar quizz' a tela some e aparece a tela 3(dentro da div container3)

//  pagina do quizz deve ter um banner com a imagem escurecida e com titulo

// as respostas das perguntas tem que ser exibida aleatoriamente

//ao clicar em uma respostas as outras opçoes tem que receber um filtro esbranquiçado

// n deve ser possivel alterar a resposta apos a escolha

// apos 2seg de respondida deve scrollar a pagina para proxima pergunta

// no final do quizz depois de 2seg irá dar scroll e abrir uma caixa de resultados, chamado container2

// criar função chamada porcentagem dos resultados e executar dentro da caixa acima - sem nenhuma comunicaçao com o servidor -

//  criar uma função que irá ReiniciarQuizz - a pagina deve ser scroll ate o topo e as respostas zeradas e a caixa de resul escondida novamente.

// criar função voltando para home

//qdisjfiods
