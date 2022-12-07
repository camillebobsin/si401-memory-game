<?php
$servername = "127.0.0.1";
$db_user = "user";
$db_pass = "password";
$dbname = "memorygame";
$request = $_SERVER['REQUEST_URI'];
$conn = new PDO("mysql:host=$servername;dbname=$dbname", $db_user, $db_pass);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $data = json_decode(file_get_contents('php://input'), true);
            $board = $data['board'];
            $game = $data['game'];
            $duration = $data['durationTime'];
            $result = $data['result'];
            $points = $data['points'];
            $date = $data['date'];
            $hour = $data['hour'];
            $user_id = $_COOKIE["user_id"];

            try {
                $conn->exec("Create table if not exists resultado(
                    cod_resultado int not null auto_increment,
                    tabuleiro varchar(10) not null,
                    duracao varchar(15) not null,
                    jogo char(20) not null,
                    data date not null,
                    hora varchar(10) not null,
                    pontos int not null,
                    resultado char(15) not null,
                    cod_usuario int not null,
                    primary key(cod_resultado),
                    foreign key(cod_usuario) references usuario(codigo));");

                $conn->exec("insert into resultado values(NULL,'$board','$duration','$game','$date','$hour','$points','$result','$user_id')");
            } catch (PDOException $e) {
                echo $e->getMessage();
            }
        } else {
            echo 'Campos vazios';
        }