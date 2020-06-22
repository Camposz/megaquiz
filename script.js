const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionsElement = document.getElementById('question')
const nextButton = document.getElementById('next-btn')
const perguntas =  ["Quanto é 2 + 2?", "Qual a capital do Brasil?", "Quantas cores tem o arco-íris?", "Quem descobriu o Brasil?", "Quem criou este quiz?"];    
const respostasCertas = ["4", "Brasília", "7", "Pedro Álvares Cabral", "Matheus Campos :)"];
const respotasErradas = ["1", "2", "3", "Vitória", "Salvador", "Rio de Janeiro","8","6","9", "Cleópatra", "Pedro II ", "Thomas Edison", "Ninguém", "Um E.T", "Um cachorro"];
var sorte = 0;
var certas = 0;
var tentativas = 0;

function random() {
    sorte = Math.floor((Math.random() * 5));
}

let btn_1 = document.getElementById('b1'); 
let btn_2 = document.getElementById('b2');
let btn_3 = document.getElementById('b3'); 
let btn_4 = document.getElementById('b4'); 

startButton.addEventListener('click', startGame)

function startGame(){
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    random();
    baseQuestoes(perguntas, respostasCertas, respotasErradas, sorte);
}

function baseQuestoes(perguntas,respostasCertas, respotasErradas, sorte) {
    var sorteResposta = Math.floor((Math.random() * 4) + 1);
    console.log(sorteResposta);

    document.getElementById('question').innerText = perguntas[sorte];
    document.getElementById(`b${sorteResposta}`).innerText = respostasCertas[sorte];
    
    if(sorteResposta == 1){
        document.getElementById("b2").innerText = respotasErradas[sorte*3];
        document.getElementById("b3").innerText = respotasErradas[(sorte*3)+ 1];
        document.getElementById("b4").innerText = respotasErradas[(sorte*3)+ 2];
    }

    if(sorteResposta == 2){
        document.getElementById("b3").innerText = respotasErradas[sorte*3];
        document.getElementById("b4").innerText = respotasErradas[(sorte*3)+ 1];
        document.getElementById("b1").innerText = respotasErradas[(sorte*3)+ 2];
    }
    if(sorteResposta == 3){
        document.getElementById("b4").innerText = respotasErradas[sorte*3];
        document.getElementById("b1").innerText = respotasErradas[(sorte*3)+ 1];
        document.getElementById("b2").innerText = respotasErradas[(sorte*3)+ 2];
    }
    if(sorteResposta == 4){
        document.getElementById("b1").innerText = respotasErradas[sorte*3];
        document.getElementById("b2").innerText = respotasErradas[(sorte*3)+ 1];
        document.getElementById("b3").innerText = respotasErradas[(sorte*3)+ 2];
    }
    console.log("sorte ="+sorte);
}

function ableButtons(){
    var x = document.getElementById('answer-buttons');
        var y = x.getElementsByClassName('btn-ans');
        var i;
        for(i = 0; i < y.length; i++){
            y[i].disabled = false
        }

}

function disableButtons(){
    var x = document.getElementById('answer-buttons');
        var y = x.getElementsByClassName('btn-ans');
        var i;
        for(i = 0; i < y.length; i++){
            y[i].disabled = true
        }

}

function verificador(event, respostasCertas, sorte) {
    if(event.target.innerText == respostasCertas[sorte]){
        event.target.style.backgroundColor='#4cae4c';
        disableButtons()
        document.getElementById('next-btn').classList.remove('hide')
        tentativas++;
        certas++;
    }
    else{
        event.target.style.backgroundColor='#c9302c';
        document.getElementById('next-btn').classList.remove('hide')
        disableButtons();
        tentativas++;
    }
    console.log("certas = "+certas);

    if(tentativas >= 5){
        questionContainerElement.classList.add('hide')
        document.getElementById('next-btn').classList.add('hide')
        document.getElementById('result').innerText = `Resultado : ${certas}/5`
        document.getElementById('result-container').classList.remove('hide')
    }
}

function clearCollor() {
    var x = document.getElementById('answer-buttons');
    var y = x.getElementsByClassName('btn-ans');
    var i;
    for(i = 0; i < y.length; i++){
        y[i].style.backgroundColor = "#fbf8cb";
    }
    document.getElementById('next-btn').classList.add('hide')
} 

