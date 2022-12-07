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
    $sql = "select username, tabuleiro, jogo, duracao, resultado, data, hora from resultado r inner join usuario u on u.codigo = '$user_id' and u.codigo = r.cod_usuario order by cod_resultado desc";
    $outter_json = "[\n";
    foreach ($conn->query($sql) as $row) {
        $inner_json = json_encode(array('username' => $row['username'], 'tabuleiro' => $row['tabuleiro'], 'jogo' => $row['jogo'], 'duracao' => $row['duracao'], 'resultado' => $row['resultado'], 'horadata' => $row['hora'] . ' ' . $row['data']));
        $outter_json = $outter_json . $inner_json . ",\n";
    }
    $outter_json = substr($outter_json, 0, -2) . "\n]";
    echo $outter_json;
} else {
    echo 'Não há dados';
}
