axios.defaults.headers.common['Authorization'] = '2TjnuBhj7Kpss5QJF2YSHoj0'

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


criarQuizz();


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