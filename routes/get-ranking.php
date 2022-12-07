<?php
$servername = "127.0.0.1";
$db_user = "root";
$db_pass = "";
$dbname = "memorygame";
$request = $_SERVER['REQUEST_URI'];
$conn = new PDO("mysql:host=$servername;dbname=$dbname", $db_user, $db_pass);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            $sql = "select username, tabuleiro, jogo, duracao, resultado, pontos, foto from resultado inner join usuario on cod_usuario = codigo and resultado = 'Vitoria' order by tabuleiro desc, pontos, duracao limit 10";
            $outter_json = "[\n";
            foreach($conn->query($sql) as $row) {
                $inner_json = json_encode(array('username' => $row['username'], 'tabuleiro' => $row['tabuleiro'], 'jogo' => $row['jogo'], 'duracao' => $row['duracao'], 'resultado' => $row['resultado'], 'pontos' => $row['pontos'], 'foto' => $row['foto']));
                $outter_json = $outter_json . $inner_json . ",\n";
            }
            $outter_json = substr($outter_json, 0, -2) . "\n]";
            echo $outter_json;
        } else {
            echo 'Não há dados';
        }