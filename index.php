<?php
$servername = "127.0.0.1";
$db_user = "user";
$db_pass = "password";
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
            $conn = new PDO("mysql:host=$servername;dbname=memorygame", $db_user, $db_pass);
            // set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // TODO: username unique
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
            $username = $data["username"];
            $password=  $data["password"];
            try {
                $conn = new PDO("mysql:host=$servername;dbname=memorygame", $db_user, $db_pass);
                // set the PDO error mode to exception
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                $conn->exec("insert into usuario values(NULL,'$username','$name','$date','$cpf','$phone','$email','$password')");
                //TODO date format from js
            } catch (PDOException $e) {
                echo $sql . "<br>" . $e->getMessage();
            }
        } else {
            echo 'Campos vazios';
        }
        break;

    case '/validate-login':
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $data = json_decode(file_get_contents('php://input'), true);
            $username = $data['username'];
            $password = $data['password'];

            try {
                $conn = new PDO("mysql:host=$servername;dbname=memorygame", $db_user, $db_pass);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                $sql = "SELECT username, senha FROM usuario WHERE username = '$username' AND senha = '$password'";
                $sth = $conn->prepare($sql);
                $sth->execute([]);
                $fetch = $sth->fetchAll();
                $return = sizeof($fetch);
                if ($return == 1) {
                    echo json_encode(array('login' => 'true'));
                } else {
                    echo json_encode(array('login' => 'false'));
                }
            } catch (PDOException $e) {
                echo $sql . "<br>" . $e->getMessage();
            }
        } else {
            echo 'Campos vazios';
        }
        break;
}
