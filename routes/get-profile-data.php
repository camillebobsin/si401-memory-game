<?php
$servername = "127.0.0.1";
$db_user = "user";
$db_pass = "password";
$dbname = "memorygame";
$request = $_SERVER['REQUEST_URI'];
$conn = new PDO("mysql:host=$servername;dbname=$dbname", $db_user, $db_pass);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$user_id = $_COOKIE["user_id"];
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "select codigo,foto,nome,data_nasc,cpf,telefone,email,username,senha from usuario where codigo = '$user_id';";
    foreach ($conn->query($sql) as $row) {
        $json = json_encode(array('codigo' => $row['codigo'], 'foto' => $row['foto'], 'nome' => $row['nome'], 'data_nasc' => $row['data_nasc'], 'cpf' => $row['cpf'], 'telefone' => $row['telefone'], 'email' => $row['email'], 'username' => $row['username'], 'senha' => $row['senha']));
    }
    echo $json;
} else {
    echo "Não há dados";
}
