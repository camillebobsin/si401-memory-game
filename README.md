# si401-memory-game
# Instructions Windows
Primeiramente ligue o apache e o mysql pelo Xampp
Agora digite no navegador

localhost/phpmyadmin

Clique na aba SQL e digite a seguinte query:
CREATE database memorygame

Clique em continuar no canto inferior direito da página
Feche o phpmyadmin e dê segmento para usar o site no seguinte endereço
http://localhost/si401-memory-game/login.html

# Instructions Linux
Para rodar tem que ter: mysql e docker, abaixo ensina a baixar cada um:

```bash
sudo apt-get install php-mysql
```

```bash
sudo gpasswd -a $USER docker
newgrp docker
```

Uma vez tendo os requisitos, rode em terminais separados:
docker-compose up

php -S localhost:8080


