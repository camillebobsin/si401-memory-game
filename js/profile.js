function getData() {
    let url = "routes/get-profile-data.php";
    let options = {
        method: 'GET'
    }
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            document.getElementsByName('name')[0].placeholder = data['nome'];
            document.getElementsByName('phone')[0].placeholder = data['telefone'];
            document.getElementsByName('email')[0].placeholder = data['email'];
            document.getElementById("user").innerHTML = data['username'];
            document.getElementById("date").innerHTML = data['data_nasc'];
            document.getElementById("cpf").innerHTML = data['cpf'];
            document.getElementById("act").style.backgroundImage = "url('assets/cards/card_" + data['foto'] + ".jpg')";
            index = data['foto'];
        })
}

getData();

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
    if (this.id == "sheep")
        index = 0;
    if (this.id == "bird")
        index = 23;
    if (this.id == "otter")
        index = 14;
    if (this.id == "tiger")
        index = 10;
    if (this.id == "panda")
        index = 20;
    document.getElementById("act").style.backgroundImage = "url('assets/cards/card_" + index + ".jpg')"
}

let act = document.getElementById("act");
act.addEventListener("mouseover", hoverOn);
act.addEventListener('mouseout', hoverOff);

function hoverOn() {
    act.style.backgroundImage = "url('../assets/pencil-icon.png')";
}

function hoverOff() {
    act.style.backgroundImage = "url('assets/cards/card_" + index + ".jpg')";
}

function editProfile() {
    let url = "routes/get-profile-data.php";
    let options = {
        method: 'GET'
    }
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            data['nome'] = document.forms["profile"]["name"].value == '' ? data['nome'] : document.forms["profile"]["name"].value;
            data['telefone'] = document.forms["profile"]["phone"].value == '' ? data['telefone'] : document.forms["profile"]["phone"].value;
            data['email'] = document.forms["profile"]["email"].value == '' ? data['email'] : document.forms["profile"]["email"].value;
            data['senha'] = document.forms["profile"]["pass"].value == '' ? data['senha'] : document.forms["profile"]["pass"].value;
            data['foto'] = index;
        
            url = "routes/edit-profile.php";
            options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
            fetch(url, options);
            document.getElementById("done").innerHTML = "Alterações realizadas com sucesso!";
        })
    return false
}