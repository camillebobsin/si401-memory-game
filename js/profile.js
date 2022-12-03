document.getElementById("sheep").addEventListener("click", closePopup);
document.getElementById("bird").addEventListener("click", closePopup);
document.getElementById("otter").addEventListener("click", closePopup);
document.getElementById("tiger").addEventListener("click", closePopup);
document.getElementById("panda").addEventListener("click", closePopup);

function openPopup() {
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}

let index = 0;
function closePopup() {
    let popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
    if(this.id == "sheep") 
        index = 0;
    if(this.id == "bird") 
        index = 23;
    if(this.id == "otter") 
        index = 14;
    if(this.id == "tiger") 
        index = 10;
    if(this.id == "panda") 
        index = 20;
    document.getElementById("act").style.backgroundImage = "url('assets/cards/card_" + index + ".jpg')"
}

let act = document.getElementById("act");
act.addEventListener("mouseover", hoverOn);
act.addEventListener('mouseout', hoverOff);

function hoverOn() {
    console.log(index)
    act.style.backgroundImage = "url('../assets/pencil-icon.png')";
}

function hoverOff() {
    act.style.backgroundImage = "url('assets/cards/card_" + index + ".jpg')";
}
