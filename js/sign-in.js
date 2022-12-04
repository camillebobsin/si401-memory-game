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

const nameRegex = /^([a-zA-Zà-úÀ-Ú]{2,})+\s+([a-zA-Zà-úÀ-Ú\s]{2,})+$/;
const cpfRegex = /^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/;
const phoneRegex = /^[\(]([0-9]){2}[\)]([0-9]){4,5}-([0-9]){4}$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const userRegex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g;

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
    var pass2 = document.forms["sign-in"]["pass2"].value;

    if (!nameRegex.test(name) || (date.match(/^\s*$/) || []).length > 0 || !cpfRegex.test(cpf) || !phoneRegex.test(phone) || !emailRegex.test(email) || !userRegex.test(username) || pass1 != pass2 || (pass1.match(/^\s*$/) || []).length > 0) {
        if (!nameRegex.test(name) || nameRegex.test(name)) {
            if (nameRegex.test(name)) {
                nameBox.style.border = "2px solid #077364";
                nameMessage.innerHTML = "";
            }
            else {
                nameBox.style.border = "2px solid red";
                nameMessage.innerHTML = "Insira o nome completo";
            }
        }
        if ((date.match(/^\s*$/) || []).length > 0 || (date.match(/^\s*$/) || []).length <= 0) {
            if ((date.match(/^\s*$/) || []).length <= 0) {
                dateBox.style.border = "2px solid #077364";
                dateMessage.innerHTML = "";
            }
            else {
                dateBox.style.border = "2px solid red";
                dateMessage.innerHTML = "Insira uma data";
            }
        }
        if (!cpfRegex.test(cpf) || cpfRegex.test(cpf)) {
            if (cpfRegex.test(cpf)) {
                cpfBox.style.border = "2px solid #077364";
                cpfMessage.innerHTML = "";
            }
            else {
                cpfBox.style.border = "2px solid red";
                cpfMessage.innerHTML = "Não está no padrão xxx.xxx.xxx-xx";
            }
        }
        if (!phoneRegex.test(phone) || phoneRegex.test(phone)) {
            if (phoneRegex.test(phone)) {
                phoneBox.style.border = "2px solid #077364";
                phoneMessage.innerHTML = "";
            }
            else {
                phoneBox.style.border = "2px solid red";
                phoneMessage.innerHTML = "Não está no padrão (xx)xxxxx-xxxx";
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
        if (!userRegex.test(username) || userRegex.test(username)) {
            if (userRegex.test(username)) {
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
        if ((pass1.match(/^\s*$/) || []).length > 0) {
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
        // body: JSON.stringify({
        //     'name': name,
        //     'date': date,
        //     'cpf': cpf,
        //     'phone': phone,
        //     'email': email,
        //     'username': username,
        //     'password': pass1
        // })
    }
    fetch(url, options);

}