<?php
$servername = "127.0.0.1";
$username = "user";
$password = "password";
$dbname = "memorygame";
$request = $_SERVER['REQUEST_URI'];

switch ($request) {
        // GET routes return html
    case '/':
        require __DIR__ . '/login.html';
        break;
    case '':
        require __DIR__ . '/login.html';
        break;
    case '/game.html':
        require __DIR__ . '/game.html';
        break;
    case '/login.html':
        require __DIR__ . '/login.html';
        break;
    case '/menu.html':
        require __DIR__ . '/menu.html';
        break;
    case '/profile.html':
        require __DIR__ . '/profile.html';
        break;
    case '/ranking.html':
        require __DIR__ . '/ranking.html';
        break;
    case '/sign-in.html':
        require __DIR__ . '/sign-in.html';
        break;
    case '/ping':
        echo 'pong';
        break;
    case '/db':


        try {
            $conn = new PDO("mysql:host=$servername;dbname=memorygame", $username, $password);
            // set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $conn->exec("Create table if not exists usuario(
                codigo int not null auto_increment,
                username varchar(15) NOT NULL,
                nome char(15) NOT NULL,
                data_nasc date NOT NULL,
                cpf varchar(15) NOT NULL,
                telefone varchar(30) NOT NULL,
                email varchar(30) NOT NULL,
                senha varchar(15) NOT NULL,
                primary key(codigo))");
        } catch (PDOException $e) {
            echo $sql . "<br>" . $e->getMessage();
        }

        break;

        // POST routes
    case '/sign-in-get-data':
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $data = json_decode(file_get_contents('php://input'), true);
            $name = $data["name"];
            $date = $data["date"];
            $cpf = $data["cpf"];
            $phone = $data["phone"];
            $email = $data["email"];
            $usernamee = $data["username"];
            $passwordd=  $data["password"];
            try {
                $conn = new PDO("mysql:host=$servername;dbname=memorygame", $username, $password);
                // set the PDO error mode to exception
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $conn->exec("Create table if not exists usuario(
                    codigo int not null auto_increment,
                    username varchar(15) NOT NULL,
                    nome char(15) NOT NULL,
                    data_nasc date NOT NULL,
                    cpf varchar(15) NOT NULL,
                    telefone varchar(30) NOT NULL,
                    email varchar(30) NOT NULL,
                    senha varchar(15) NOT NULL,
                    primary key(codigo))");

                $conn->exec("insert into usuario values(NULL,'$usernamee','$name','2001-01-01','$cpf','$phone','$email','$passwordd')");
                //TODO date format from js
            } catch (PDOException $e) {
                echo $sql . "<br>" . $e->getMessage();
            }
        } else {
            echo 'Campos vazios';
        }
        break;
}
