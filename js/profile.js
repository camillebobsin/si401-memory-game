document.getElementById("tiger").addEventListener("click", closePopup);
document.getElementById("sheep").addEventListener("click", closePopup);
document.getElementById("whale").addEventListener("click", closePopup);
document.getElementById("panda").addEventListener("click", closePopup);

function openPopup() {
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}

function closePopup() {
    let index = 0;
    let popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
    if(this.id == "tiger") 
        index = 10;
    if(this.id == "sheep") 
        index = 0;
    if(this.id == "whale") 
        index = 7;
    if(this.id == "panda") 
        index = 20;
    document.getElementById("act").style.backgroundImage = "url('assets/cards/card_" + index + ".jpg')"
}
