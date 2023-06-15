axios.defaults.headers.common['Authorization'] = '2TjnuBhj7Kpss5QJF2YSHoj0'

window.addEventListener('onLoad', () => {
	iniciar();
})

const totalQuizzes = [];
const meusQuizzes = [];
const outrosQuizzes = [];
let exemploObjeto = {
	title: "QUIZZ TESTE",
	image: "https://http.cat/411.jpg",
	questions: [
		{
			title: "Título da pergunta 1",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 2",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 3",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		}
	],
	levels: [
		{
			title: "Título do nível 1",
			image: "https://http.cat/411.jpg",
			text: "Descrição do nível 1",
			minValue: 0
		},
		{
			title: "Título do nível 2",
			image: "https://http.cat/412.jpg",
			text: "Descrição do nível 2",
			minValue: 50
		}
	]
}



function criarQuizz() {
    let promessaCriar = axios.post('https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes', exemploObjeto)
    promessaCriar.then(deuCertoCriarQuizz)
    promessaCriar.catch()

    function deuCertoCriarQuizz(resposta) {

        let idQuizzCriado = [
            {
                id: resposta.data.id
            },
        ]

        console.log(idQuizzCriado)

        let idQuizzCriadoSerializado = JSON.stringify(idQuizzCriado)

        localStorage.setItem("ids", idQuizzCriadoSerializado)

        let pessoa = localStorage.getItem("ids");
        console.log(pessoa)

    }
}




let promessaReceber = axios.get('https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes')
promessaReceber.then(diferenciarQuizzes)

function diferenciarQuizzes(todosOsQuizzes){
    console.log(todosOsQuizzes)
    
    for ( i = 0; i < todosOsQuizzes.length; i++ ){

        /* if ( todosOsQuizzes[i].data.id NÃO ESTIVER NO localStorage ) {
            outrosQuizzes.push(todosOsQuizzes[i])
        } */
    }


}

function iniciar() {
	criarQuizz();
}



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
