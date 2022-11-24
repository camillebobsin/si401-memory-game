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

document.getElementById("not-quit").addEventListener("click", closePopup);
document.getElementById("quit").addEventListener("click", quitAccount);

function openPopup() {
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}

function closePopup() {
    let popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
}

function quitAccount() {
    let url = window.location.href;
    url = url.replace('menu', 'login');
    window.location.href = url;
}