let boardBox = document.forms["menu"]["board"];
let gameBox = document.forms["menu"]["game"];

let boardMessage = document.getElementById("boardMessage");
let gameMessage = document.getElementById("gameMessage");

function getGameAndBoard() {
    let board = document.forms["menu"]["board"].value;
    let game = document.forms["menu"]["game"].value;

    if (board == "" || game == "first") {
        if (board != "" || board == "") {
            if (board != "") {
                boardBox.style.border = "2px solid #077364";
                boardMessage.innerHTML = "";
            }
            else {
                boardBox.style.border = "2px solid red";
                boardMessage.innerHTML = "Escolha o tamanho do jogo";
            }
        }
        if (game != "first" || game == "first") {
            if (game != "first") {
                gameBox.style.border = "2px solid #077364";
                gameMessage.innerHTML = "";
            }
            else {
                gameBox.style.border = "2px solid red";
                gameMessage.innerHTML = "Escolha um tipo de jogo";
            }
        }
        return false;
    }
    else {
        localStorage.setItem("board", board); 
        localStorage.setItem("game", game);
    }
}