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
            $username = $data['username'];
            $password = $data['password'];

            try {
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
                echo $e->getMessage();
            }
        } else {
            echo 'Campos vazios';
        }