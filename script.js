
// definindo botões

const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")

// definindo resposta rival

const yourChoice = document.querySelector(".your-choice")

// definindo resposta do jogador

const myChoice = document.querySelector(".my-choice")

// evento de alterar imagem

rock.addEventListener("click", changeRock)
paper.addEventListener("click", changePaper)
scissors.addEventListener("click", changeScissors)

// captando a escolha do usuário ao mesmo tempo fazendo o cpu jogar

const userChoice = (option) => {
    comparision(option, play())
}

// definindo texto do resultado

const result = document.querySelector(".result")

// definindo numerais do placar

let myPoints = document.querySelector(".my-points")
let yourPoints = document.querySelector(".your-points")

let win = 0
let lose = 0

// função para alterar imagem

function changeRock() {
    myChoice.src = "assets/pedra.png";
}

function changePaper() {
    myChoice.src = "assets/papel.png"
}

function changeScissors() {
    myChoice.src = "assets/tesoura.png"
}

// função escolha do rival e comparação

function play() {

    const rival = ['pedra', 'papel', 'tesoura']
    const random = rival[Math.floor(Math.random() * rival.length)];

    if (random == 'pedra') {
        yourChoice.src = "assets/pedra.png";
    }

    if (random == 'papel') {
        yourChoice.src = "assets/papel.png";
    }

    if (random == 'tesoura') {
        yourChoice.src = "assets/tesoura.png";
    }

    return random

}

function comparision(user, cpu) {

    console.log('Usuário: ' + user + ' CPU: ' + cpu)

    if (user == 'pedra' && cpu == 'pedra' || user == "papel" && cpu == "papel" || user == "tesoura" && cpu == "tesoura") {

        result.innerHTML = "Empatou!"
    }

    if (user == 'pedra' && cpu == 'tesoura' || user == "papel" && cpu == "pedra" || user == "tesoura" && cpu == "papel") {

        result.innerHTML = "Você venceu!";
        win++
        myPoints.innerHTML = win
    }

    if (user == 'pedra' && cpu == 'papel' || user == "papel" && cpu == "tesoura" || user == "tesoura" && cpu == "pedra") {

        result.innerHTML = "Você perdeu!";
        lose++
        yourPoints.innerHTML = lose
    }

}




















