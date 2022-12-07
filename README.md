# SI401 Memory Game

## Instruções no Windows
1. Ligar o apache e o mysql pelo Xampp

2. No navegador, acesse: [localhost/phpmyadmin](localhost/phpmyadmin)

3. Clique na aba SQL, e digite a query: `CREATE database memorygame`

4. Clique em continuar no canto inferior direito da página

5. Feche o phpmyadmin e dê segmento para usar o site no endereço: [http://localhost/si401-memory-game/login.html](http://localhost/si401-memory-game/login.html)

## Instruções no Linux

### Requisitos:

- Extensão MySQL para php:

```bash
sudo apt-get install php-mysql
```

- Docker:

```bash
sudo-apt install docker-compose
sudo gpasswd -a $USER docker
newgrp docker
```

### No terminal:
Rode em terminais separados os comandos:

```bash
docker-compose up
```

```bash
php -S localhost:8080
```

