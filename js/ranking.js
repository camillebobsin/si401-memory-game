function getData() {
    let url = "http://localhost:8080/get-ranking";
    let options = {
        method: 'GET'
    }
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            let fp = document.getElementById("first-player");
            let username = document.createElement("p");
            username.innerHTML = data[0]["username"];
            fp.appendChild(username);
            let tabuleiro = document.createElement("p");
            tabuleiro.innerHTML = data[0]["tabuleiro"];
            fp.appendChild(tabuleiro);
            let jogo = document.createElement("p");
            jogo.innerHTML = data[0]["jogo"];
            fp.appendChild(jogo);
            let duracao = document.createElement("p");
            duracao.innerHTML = data[0]["duracao"];
            fp.appendChild(duracao);
            let resultado = document.createElement("p");
            resultado.innerHTML = data[0]["resultado"];
            fp.appendChild(resultado);
            let pontos = document.createElement("p");
            pontos.innerHTML = data[0]["pontos"];
            fp.appendChild(pontos);

            let sp = document.getElementById("second-player");
            username = document.createElement("p");
            username.innerHTML = data[1]["username"];
            sp.appendChild(username);
            tabuleiro = document.createElement("p");
            tabuleiro.innerHTML = data[1]["tabuleiro"];
            sp.appendChild(tabuleiro);
            jogo = document.createElement("p");
            jogo.innerHTML = data[1]["jogo"];
            sp.appendChild(jogo);
            duracao = document.createElement("p");
            duracao.innerHTML = data[1]["duracao"];
            sp.appendChild(duracao);
            resultado = document.createElement("p");
            resultado.innerHTML = data[1]["resultado"];
            sp.appendChild(resultado);
            pontos = document.createElement("p");
            pontos.innerHTML = data[1]["pontos"];
            sp.appendChild(pontos);

            let tp = document.getElementById("third-player");
            username = document.createElement("p");
            username.innerHTML = data[2]["username"];
            tp.appendChild(username);
            tabuleiro = document.createElement("p");
            tabuleiro.innerHTML = data[2]["tabuleiro"];
            tp.appendChild(tabuleiro);
            jogo = document.createElement("p");
            jogo.innerHTML = data[2]["jogo"];
            tp.appendChild(jogo);
            duracao = document.createElement("p");
            duracao.innerHTML = data[2]["duracao"];
            tp.appendChild(duracao);
            resultado = document.createElement("p");
            resultado.innerHTML = data[2]["resultado"];
            tp.appendChild(resultado);
            pontos = document.createElement("p");
            pontos.innerHTML = data[2]["pontos"];
            tp.appendChild(pontos);

            let table = document.getElementById("ranking-table");
            for (let i = 3; i < 10; i++) {
                let json = data[i];
                let tr = document.createElement("tr");
                let td = document.createElement("td");
                    td.innerHTML = `#${i+1}`;
                    tr.appendChild(td);
                for (let key in json) {
                    let td = document.createElement("td");
                    td.innerHTML = json[key];
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }
        })
}

getData();