const nameBox = document.getElementById("name");
const dateBox = document.getElementById("date");
const cpfBox = document.getElementById("cpf");
const phoneBox = document.getElementById("phone");
const emailBox = document.getElementById("email");
const usernameBox = document.getElementById("username");
const pass1Box = document.getElementById("pass1");
const pass2Box = document.getElementById("pass2");

const nameMessage = document.getElementById("nameMessage");
const dateMessage = document.getElementById("dateMessage");
const cpfMessage = document.getElementById("cpfMessage");
const phoneMessage = document.getElementById("phoneMessage");
const emailMessage = document.getElementById("emailMessage");
const userMessage = document.getElementById("userMessage");
const pass1Message = document.getElementById("pass1Message");
const pass2Message = document.getElementById("pass2Message");

const notEmpty = /^\s*$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const signInMessage = document.getElementById("sign-in");

function getFormData() {
    return {
        name: document.forms["sign-in"]["name"].value,
        date: document.forms["sign-in"]["date"].value,
        cpf: document.forms["sign-in"]["cpf"].value,
        phone: document.forms["sign-in"]["phone"].value,
        email: document.forms["sign-in"]["email"].value,
        username: document.forms["sign-in"]["username"].value,
        password: document.forms["sign-in"]["pass1"].value
    }
}

function validateSignIn() {
    var name = document.forms["sign-in"]["name"].value;
    var date = document.forms["sign-in"]["date"].value;
    var cpf = document.forms["sign-in"]["cpf"].value;
    var phone = document.forms["sign-in"]["phone"].value;
    var email = document.forms["sign-in"]["email"].value;
    var username = document.forms["sign-in"]["username"].value;
    var pass1 = document.forms["sign-in"]["pass1"].value;
    var pass2 = document.forms["sign-in"]["pass2"].value;;

    if (notEmpty.test(name) || date.match(notEmpty) || notEmpty.test(cpf) || notEmpty.test(phone) || !emailRegex.test(email) || notEmpty.test(username) || pass1 != pass2 || pass1.match(notEmpty)) {
        if (!notEmpty.test(name) || notEmpty.test(name)) {
            if (!notEmpty.test(name)) {
                nameBox.style.border = "2px solid #077364";
                nameMessage.innerHTML = "";
            }
            else {
                nameBox.style.border = "2px solid red";
                nameMessage.innerHTML = "Insira um nome";
            }
        }
        if (date.match(notEmpty) || !date.match(notEmpty)) {
            if (!date.match(notEmpty)) {
                dateBox.style.border = "2px solid #077364";
                dateMessage.innerHTML = "";
            }
            else {
                dateBox.style.border = "2px solid red";
                dateMessage.innerHTML = "Insira uma data";
            }
        }
        if (notEmpty.test(cpf) || !notEmpty.test(cpf)) {
            if (!notEmpty.test(cpf)) {
                cpfBox.style.border = "2px solid #077364";
                cpfMessage.innerHTML = "";
            }
            else {
                cpfBox.style.border = "2px solid red";
                cpfMessage.innerHTML = "Insira um CPF";
            }
        }
        if (!notEmpty.test(phone) || notEmpty.test(phone)) {
            if (!notEmpty.test(phone)) {
                phoneBox.style.border = "2px solid #077364";
                phoneMessage.innerHTML = "";
            }
            else {
                phoneBox.style.border = "2px solid red";
                phoneMessage.innerHTML = "Insira um telefone";
            }
        }
        if (!emailRegex.test(email) || emailRegex.test(email)) {
            if (emailRegex.test(email)) {
                emailBox.style.border = "2px solid #077364";
                emailMessage.innerHTML = "";
            }
            else {
                emailBox.style.border = "2px solid red";
                emailMessage.innerHTML = "Insira um email válido";
            }
        }
        if (!notEmpty.test(username) || notEmpty.test(username)) {
            if (!notEmpty.test(username)) {
                usernameBox.style.border = "2px solid #077364";
                userMessage.innerHTML = "";
            }
            else {
                usernameBox.style.border = "2px solid red";
                userMessage.innerHTML = "Insira um username válido";
            }
        }
        if (pass1 != pass2 || pass1 == pass2) {
            if (pass1 == pass2) {
                pass1Box.style.border = "2px solid #077364";
                pass2Box.style.border = "2px solid #077364";
                passMessage.innerHTML = "";
            }
            else {
                pass1Box.style.border = "2px solid red";
                pass2Box.style.border = "2px solid red";
                passMessage.innerHTML = "As senhas não são iguais";
            }
        }
        if (pass1.match(notEmpty)) {
            pass1Box.style.border = "2px solid red";
            pass2Box.style.border = "2px solid red";
            passMessage.innerHTML = "Insira uma senha";
        }
        signInMessage.style.marginTop = "3vh"
        signInMessage.style.marginBottom = "3vh"
        return false
    }

    const data = getFormData();
    let url = "http://localhost:8080/sign-in-get-data";
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(url, options);
}