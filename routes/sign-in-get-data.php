<?php
$servername = "127.0.0.1";
$db_user = "root";
$db_pass = "";
$dbname = "memorygame";
$request = $_SERVER['REQUEST_URI'];
$conn = new PDO("mysql:host=$servername;dbname=$dbname", $db_user, $db_pass);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

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
        $conn->exec("insert into usuario values(NULL,0,'$username','$name','$date','$cpf','$phone','$email','$password')");
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
} else {
    echo 'Campos vazios';
}