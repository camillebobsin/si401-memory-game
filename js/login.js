const usernameBox = document.getElementById("username");
const passwordBox = document.getElementById("password");

const userMessage = document.getElementById("userMessage");
const passMessage = document.getElementById("passMessage");

function getFormData() {
    return {
        username: document.forms["login"]["username"].value,
        password: document.forms["login"]["password"].value,
    }
}

function validateLogin() {
    var username = document.forms["login"]["username"].value;
    var password = document.forms["login"]["password"].value;
    if ((username.match(/^\s*$/) || []).length > 0 || (password.match(/^\s*$/) || []).length > 0) {
        if ((username.match(/^\s*$/) || []).length > 0) {
            usernameBox.style.border = "2px solid red";
            userMessage.innerHTML = "Insira um username válido";
        }
        if ((password.match(/^\s*$/) || []).length > 0) {
            passwordBox.style.border = "2px solid red";
            passMessage.innerHTML = "Insira uma senha válida";
        }
        return false;
    }
    const data = getFormData();
    let url = "http://localhost:8080/validade-login";
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(url, options);
}