let board = localStorage.getItem("board");
let game = localStorage.getItem("game");
let animals = [];
let cardBlock = [];
let click = 0;
let mouse = true;
let act = -1;
let lastCtx = null;
const sleep = ms => new Promise(r => setTimeout(r, ms));

window.onload = () => {
    createBoard(board);
    fillBoard(board);
    clickableCards();
};

function createBoard(board) {
    let numberOfColumns = board[0];
    let gameBoard = document.getElementsByClassName("game-board")[0];
    if (numberOfColumns == 6 || numberOfColumns == 8)
        gameBoard.classList.add("too-big-board");
    let gap = numberOfColumns == 6 || numberOfColumns == 8 ? 5 : 10;
    let cardHeight = (gameBoard.offsetHeight - (2 * gap) - ((numberOfColumns - 1) * gap)) / numberOfColumns;
    let column = cardHeight * (4 / 3) + "px";
    let columns = ""
    for (let i = 0; i < numberOfColumns; i++) {
        columns += " " + column;
    }
    gameBoard.style.gridTemplateColumns = columns;
    for (let i = 0; i < numberOfColumns ** 2; i++) {
        let child = document.createElement("canvas");
        child.height = cardHeight
        child.width = cardHeight * (4 / 3);
        ctx = child.getContext("2d");
        drawBackground(ctx, child.width, child.height);
        child.style.borderRadius = 12 - numberOfColumns + "px";
        child.id = i;
        gameBoard.appendChild(child);
    }
    gameBoard.style.justifyContent = "space-evenly";
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function fillBoard() {
    let cards = document.getElementsByTagName("canvas");
    while (animals.length != cards.length) {
        newNumber = parseInt(Math.random() * 36);
        if (!animals.includes(newNumber)) {
            animals.push(newNumber);
            animals.push(newNumber);
            cardBlock.push(false);
            cardBlock.push(false);
        }
    }
    shuffleArray(animals);
}

function clickableCards() {
    let cards = document.getElementsByTagName("canvas");
    for (let i = 0; i < cards.length ** 2; i++) {
        cards[i].addEventListener("click", turnCard, false);
    }
}

async function turnCard() {
    if (mouse && !cardBlock[this.id]) {
        let ctx = this.getContext("2d");
        drawCard(ctx, this.width, this.height, this.id);
        click++;
        if (click % 2 == 0) {
            if (animals[this.id] != animals[act]) {
                mouse = false;
                await sleep(920);
                drawBackground(ctx, this.width, this.height);
                drawBackground(lastCtx, this.width, this.height);
            }
            else {
                cardBlock[this.id] = true;
                cardBlock[act] = true;
            }
        }
        else {
            act = this.id;
            lastCtx = ctx;
        }
        mouse = true;
    }
}

function drawBackground(ctx, width, height) {
    let img = new Image();
    img.onload = () => {
        ctx.drawImage(img, 0, 0, width, height);
    }
    img.src = "assets/cards/card_background_logo.jpg";
}

function drawCard(ctx, width, height, id) {
    let img = new Image();
    img.onload = () => {
        ctx.drawImage(img, 0, 0, width, height);
    }
    img.src = "assets/cards/card_" + animals[id] + ".jpg";
}