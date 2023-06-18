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

// Função mudarDePagina -- INICIO PARA FORMULARIO DE CRIAR QUIZZ;
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

async function SelecionarQuiz(quizSelecionado) {
	const quiz = await pegarQuizPorId(quizSelecionado)
	console.log('quiz clicado',  quiz)
	mudarDePagina('pagina-2')
	renderizarTela2(quiz);
}




async function renderizarTodosQuizzes(){
	const elementoTodosOsQuizzes = document.querySelector('.todos-quizzes');
	const elementoSeusQuizzes = document.querySelector('.seus-quizzes');

	const quizzes = await obterQuizzes();
	const {seusQuizzes, todosOsQuizzes} = separandoQuiz(quizzes)
	todosOsQuizzes.forEach(quiz => {
		elementoTodosOsQuizzes.innerHTML += 
		`<div onclick="SelecionarQuiz('${quiz.id}')" class="caixa-individual-quizz"> 
		<img src="${quiz.image}" alt="">
		<p>${quiz.title}</p>
		</div>`
	})

	seusQuizzes.forEach(quiz => {
		elementoSeusQuizzes.innerHTML += 
		`<div onclick="SelecionarQuiz('${quiz.id}')" class="caixa-individual-quizz"> 
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

async function pegarQuizPorId(quizId){
	const quiz = await axios.get(`https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes/${quizId}`)
	return quiz.data
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





