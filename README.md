# si401-memory-game

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