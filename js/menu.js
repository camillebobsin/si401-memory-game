function getGameAndBoard() {
    let board = document.forms["menu"]["board"].value;
    let game = document.forms["menu"]["game"].value;
    if (board != "" && game != "") {
        localStorage.setItem("board", board);
        localStorage.setItem("game", game);
    }
    else {
        return false;
    }
}