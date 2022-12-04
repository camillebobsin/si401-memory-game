<?php

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

    // POST routes
    case '/sign-in-get-data':
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $data = json_decode(file_get_contents('php://input'), true);
            echo $data["name"];
            echo $data["date"];
            echo $data["cpf"];
            echo $data["phone"];
            echo $data["email"];
            echo $data["username"];
            echo $data["password"];
        } else {
            echo 'Campos vazios';
        }
        break;
}
