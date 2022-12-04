<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "memorygame";

// Create connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
  die("Conexão Falhou" . $conn->connect_error);
}
$conn->query("CREATE DATABASE IF NOT EXISTS memorygame");

$conn = new mysqli($servername, $username, $password,$dbname);

$conn->query("Create table if not exists usuario(
  codigo int not null auto_increment,
  username varchar(15) NOT NULL,
  nome char(15) NOT NULL,
  data_nasc date NOT NULL,
  cpf varchar(15) NOT NULL,
  telefone varchar(30) NOT NULL,
  email varchar(30) NOT NULL,
  senha varchar(15) NOT NULL,
  primary key(codigo))")
?>