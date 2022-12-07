<?php
$servername = "127.0.0.1";
$db_user = "root";
$db_pass = "";
$dbname = "memorygame";
$request = $_SERVER['REQUEST_URI'];
$conn = new PDO("mysql:host=$servername;dbname=$dbname", $db_user, $db_pass);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$user_id = $_COOKIE["user_id"];
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $foto = $data['foto'];
    $nome = $data['nome'];
    $telefone = $data['telefone'];
    $email = $data['email'];
    $senha = $data['senha'];

    try {
        $conn->exec("update usuario
                set nome = '$nome',foto = '$foto', telefone = '$telefone', email = '$email', senha = '$senha' 
                where codigo = '$user_id';");
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
} else {
    echo 'Não há dados';
}
