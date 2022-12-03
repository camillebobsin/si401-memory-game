const usernameBox = document.getElementById("username");
const passwordBox = document.getElementById("password");

const userMessage = document.getElementById("userMessage");
const passMessage = document.getElementById("passMessage");

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
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
}