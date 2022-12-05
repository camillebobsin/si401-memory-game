<?php
$servername = "127.0.0.1";
$db_user = "user";
$db_pass = "password";
$dbname = "memorygame";
$request = $_SERVER['REQUEST_URI'];
$conn = new PDO("mysql:host=$servername;dbname=$dbname", $db_user, $db_pass);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

switch ($request) {
        // GET routes return html
    case '/':
        require __DIR__ . '/login.html';
        try {
            $conn->exec("Create table if not exists usuario(
                codigo int not null auto_increment,
                foto int default 0,
                username varchar(30) NOT NULL,
                nome char(60) NOT NULL,
                data_nasc date NOT NULL,
                cpf varchar(15) NOT NULL,
                telefone varchar(30) NOT NULL,
                email varchar(30) NOT NULL,
                senha varchar(30) NOT NULL,
                primary key(codigo),
                unique(username));
                ");
            $conn->exec("Create table if not exists resultado(
                cod_resultado int not null auto_increment,
                tabuleiro varchar(10) not null,
                duracao varchar(15) not null,
                jogo char(20) not null,
                hora time not null,
                pontos int not null,
                resultado char(15) not null,
                cod_usuario int not null,
                primary key(cod_resultado),
                foreign key(cod_usuario) references usuario(codigo));");
        } catch (PDOException $e) {
            echo $sql . "<br>" . $e->getMessage();
        }
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
            $password =  $data["password"];
            try {
                $conn->exec("insert into usuario values(NULL,0,'$username','$name','$date','$cpf','$phone','$email','$password')");
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

                $sql = "SELECT codigo, username, senha FROM usuario WHERE username = '$username' AND senha = '$password'";
                foreach ($conn->query($sql) as $row) {
                    $user_id = $row['codigo'];
                }
                header('Content-Type: application/json; charset=utf-8');
                if ($user_id) {
                    echo json_encode(array('login' => 'true'));
                    setcookie("user_id", $user_id);
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
    default:
        header('HTTP/1.0 404 Not Found');
        echo '';

    case '/get-cookie':
        echo json_encode(array('user_id' => $_COOKIE["user_id"]));
        break;
    case '/signout':
        $_COOKIE["user_id"] = NULL;
}
