let quantidadeNiveis = 0;
let quantidadePerguntas = 0;
let tituloTela3 = document.querySelector('.titulo-tela3')
let divPrimeirasPerguntas = document.querySelector('.div-primeiras-perg')
let primeiroBotaoTela3 = document.querySelector('.primeiro-botao-tela3')
let divPerguntas = document.querySelector('.div-perguntas')
let segundoBotaoTela3 = document.querySelector('.segundo-botao-tela3')
let divNiveis = document.querySelector('.div-niveis')
let terceiroBotaoTela3 = document.querySelector('.terceiro-botao-tela3')
let quartoBotaoTela3 = document.querySelector('.quarto-botao-tela3')
let linkVoltarHome = document.querySelector('.link-voltar-home')
let divImagemQuizzCriado = document.querySelector('.imagem-quizz-criado')

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


function prosseguirParaCriarPerguntas() {

    //salvar no objetoFinal Titulo e URL

    let inputTituloQuizz = document.querySelector('.input-titulo-quizz')
    let inputImagemQuizz = document.querySelector('.input-imagem-quizz')

    objetoFinal.title = inputTituloQuizz.value
    objetoFinal.image = inputImagemQuizz.value

    //salvar em variáveis quantidade de perguntas e níveis

    let inputQtdadeNiveis = document.querySelector('.input-qtdade-niveis')
    quantidadeNiveis = inputQtdadeNiveis.value

    let inputQtdadePerguntas = document.querySelector('.input-qtdade-perguntas')
    quantidadePerguntas = inputQtdadePerguntas.value

    
    //esconder e modificar o que é velho
    tituloTela3.innerHTML = 'Crie suas perguntas'
    divPrimeirasPerguntas.classList.add('escondido')
    primeiroBotaoTela3.classList.add('escondido')
    
    //renderizar div perguntas    
    divPerguntas.classList.remove('escondido')

    //renderizar botao da tela seguinte
    segundoBotaoTela3.classList.remove('escondido')

    for(i = 1; i < quantidadePerguntas; i++) {
        divPerguntas.innerHTML += `
        
        <div class="botao-pergunta escondido">
            <button>Pergunta ${i+1}</button>
            <img>
        </div>

        <div class="div-perguntas colapsado">

            <p>Pergunta ${i+1}</p>
            <input class="pergunta-title input-tela3" placeholder="Texto da pergunta"></input>
            <input class="pergunta-cor input-tela3" placeholder="Cor de fundo da pergunta"></input>

            <p>Resposta Correta</p>
            <input class="resposta-certa input-tela3" placeholder="Resposta correta"></input>
            <input class="url-resposta-certa input-tela3" placeholder="URL da imagem"></input>

            <p>Respostas Incorretas</p>
            <input class="resposta-incorreta1 input-tela3" placeholder="Resposta incorreta 1">
            <input class="url-incorreta1 input-tela3" placeholder="URL da imagem 1">

            <input class="resposta-incorreta2 input-tela3" placeholder="Resposta incorreta 2">
            <input class="url-incorreta2 input-tela3" placeholder="URL da imagem 2">

            <input class="resposta-incorreta3 input-tela3" placeholder="Resposta incorreta 3">
            <input class="url-incorreta3 input-tela3" placeholder="URL da imagem 3">

        </div>

        `
    }
    
}

function prosseguirParaCriarNiveis() {

    let inputsTitles = document.querySelectorAll('.pergunta-title')
    let arrayTitles = [].map.call(inputsTitles, function (input) {
        return input.value;
      });

    let inputsCores = document.querySelectorAll('.pergunta-cor')
    let arrayCores = [].map.call(inputsCores, function (input) {
        return input.value;
      });

    let inputsCorretas = document.querySelectorAll('.resposta-certa')
    let arrayCorretas = [].map.call(inputsCorretas, function (input) {
        return input.value;
      });

    let inputsURLCorretas = document.querySelectorAll('.url-resposta-certa')
    let arrayURLCorretas = [].map.call(inputsURLCorretas, function (input) {
        return input.value;
      });

    let inputsIncorretas1 = document.querySelectorAll('.resposta-incorreta1')
    let arrayIncorretas1 = [].map.call(inputsIncorretas1, function (input) {
        return input.value;
      });

    let inputsURLIncorretas1 = document.querySelectorAll('.url-incorreta1')
    let arrayURLIncorretas1 = [].map.call(inputsURLIncorretas1, function (input) {
        return input.value;
      });

    let inputsIncorretas2 = document.querySelectorAll('.resposta-incorreta2')
    let arrayIncorretas2 = [].map.call(inputsIncorretas2, function (input) {
        return input.value;
      });

    let inputsURLIncorretas2 = document.querySelectorAll('.url-incorreta2')
    let arrayURLIncorretas2 = [].map.call(inputsURLIncorretas2, function (input) {
        return input.value;
      });

    let inputsIncorretas3 = document.querySelectorAll('.resposta-incorreta3')
    let arrayIncorretas3 = [].map.call(inputsIncorretas3, function (input) {
        return input.value;
      });

    let inputsURLIncorretas3 = document.querySelectorAll('.url-incorreta3')
    let arrayURLIncorretas3 = [].map.call(inputsURLIncorretas3, function (input) {
        return input.value;
      });


    //salvar no objetoFinal as perguntas << desafiante
    for (i = 0; i < quantidadePerguntas; i++){

        objetoFinal.questions.push (`
        {
            title: "${arrayTitles[i]}",
            color: "${arrayCores[i]}",
            answers: [
				{
					text: "${arrayCorretas[i]}",
					image: "${arrayURLCorretas[i]}",
					isCorrectAnswer: true
				},
				{
					text: "${arrayIncorretas1[i]}",
					image: "${arrayURLIncorretas1[i]}",
					isCorrectAnswer: false
				},
                {
					text: "${arrayIncorretas2[i]},
					image: "${arrayURLIncorretas2[i]}",
					isCorrectAnswer: false
				},
                {
					text: "${arrayIncorretas3[i]}",
					image: "${arrayURLIncorretas3[i]}",
					isCorrectAnswer: false
				}
			]
        }
        `)
    }

    console.log(objetoFinal)




    //esconder e modificar o que é velho
    tituloTela3.innerHTML = 'Agora, decida os níveis!'
    divPerguntas.classList.add('escondido')
    segundoBotaoTela3.classList.add('escondido')
    
    //renderizar div niveis    
    divNiveis.classList.remove('escondido')

    //renderizar botao da tela seguinte
    terceiroBotaoTela3.classList.remove('escondido')


    for(i = 1; i < quantidadeNiveis; i++) {        
        divNiveis.innerHTML += `
        
        <div class="botao-nivel escondido">
            <button>Nível ${i+1}</button>
            <img>
        </div>

        <div class="div-niveis colapsado">

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

    console.log(objetoFinal)

    //esconder e modificar o que é velho
    tituloTela3.innerHTML = 'Seu quizz está pronto!'
    divNiveis.classList.add('escondido')
    terceiroBotaoTela3.classList.add('escondido')
    
    //renderizar div imagem-quizz-criado
    divImagemQuizzCriado.innerHTML = `
        <img clas='imagem-quizz'>
        <p class='titulo-quizz'></p>    
    `    

    //renderizar botao da tela seguinte
    quartoBotaoTela3.classList.remove('escondido')

    //renderizar link de voltar pra home
    linkVoltarHome.classList.remove('escondido')
    
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

}