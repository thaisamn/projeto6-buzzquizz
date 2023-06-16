let quantidadeNiveis = 0;
let quantidadePerguntas = 0;

let objetoFinal = {
	title: "",
	image: "",
	questions: [],
	levels: []
}

let pergunta = {
    title: "",
    color: "",
    answers: []
}

let resposta = {
    text: "",
    image: "",
    isCorrectAnswer: ""
}

let nivel = {
    title: "",
    image: "",
    text: "",
    minValue: 0
}


function iniciarCriacaoQuizz() {

    //apenas mostrar a primeira tela de criação

}

function prosseguirParaCriarPerguntas() {

    //salvar no objetoFinal Titulo e URL
    objetoFinal.title = document.querySelector('.input-titulo-quizz').value
    objetoFinal.image = document.querySelector('.input-imagem-quizz').value

    //salvar em variáveis quantidade de perguntas e níveis
    quantidadeNiveis = document.querySelector('input-qtdade-niveis').value
    quantidadePerguntas = document.querySelector('input-qtdade-perguntas').value

    //mostrar a segunda tela de criação
    
    //renderizar div perguntas
    let divPerguntas = document.querySelector('.div-perguntas')

    for(i = 1; i < quantidadePerguntas; i++) {
        divPerguntas.innerHTML = `
        
        <div class="botao-pergunta">
            <button>Pergunta ${i+1}</button>
            <img>
        </div>

        <div class="pergunta-a-ser-criada colapsado">

            <p>Pergunta ${i+1}</p>
            <input placeholder="Texto da pergunta"></input>
            <input placeholder="Cor de fundo da pergunta"></input>

            <p>Resposta Correta</p>
            <input placeholder="Resposta correta"></input>
            <input placeholder="URL da imagem"></input>

            <p>Respostas Incorretas</p>
            <input placeholder="Resposta incorreta 1">
            <input placeholder=>"URL da imagem 1"

            <input placeholder="Resposta incorreta 2">
            <input placeholder=>"URL da imagem 2"

            <input placeholder="Resposta incorreta 3">
            <input placeholder=>"URL da imagem 3"

        </div>

        `
    }
    
}

function prosseguirParaCriarNiveis() {

    //salvar no objetoFinal as perguntas << desafiante

    //mostrar a terceira tela de criação

    //renderizar div niveis
    let divNiveis = document.querySelector('.div-niveis')
    
    for(i = 1; i < quantidadeNiveis; i++) {        
        divNiveis.innerHTML = `
        
        <div class="botao-nivel">
            <button>Nível ${i+1}</button>
            <img>
        </div>

        <div class="nivel-a-ser-criado colapsado">

            <p>Nível ${i+1}</p>
            <input placeholder="Título do nível"></input>
            <input placeholder="% de acerto mínima"></input>            
            <input placeholder="URL da imagem do nível"></input>
            <input placeholder="Descrição do nível"></input>

        </div>

        `
    }

}


function finalizarQuizz() {
    
    //salvar no objetoFinal os níveis << desafiante

    //enviar o objetoFinal pelo axios
    let promessaCriar = axios.post('https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes', objetoFinal)
    promessaCriar.then(deuCertoCriarQuizz)
    promessaCriar.catch(deuErradoCriarQuizz)

    //then
    function deuCertoCriarQuizz(resposta) {

        let idQuizzCriado = [
            {
                id: resposta.data.id
            },
        ]

        let idQuizzCriadoSerializado = JSON.stringify(idQuizzCriado)

        localStorage.setItem("ids", idQuizzCriadoSerializado)
    
    }

    //mostrar a quarta tela de criação

}