let jogadores = [];
jogadores[0] = {
    nome: "Estêvão",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
}
jogadores[1] = {
    nome: "Comum",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
}

function adicionarDerrota(i){
    jogadores[i].derrotas++;
    atualizaTabela();
}

function adicionarVitoria(i){
    jogadores[i].vitorias++;
    jogadores[i].pontos += 3;
    atualizaTabela();
}

function adicionarEmpate(i){
    jogadores[i].empates++;
    jogadores[i].pontos += 1;
    atualizaTabela();
}

function atualizaTabela(){
    let tabelaJogadores = document.getElementById('tabelaJogadores');
    tabelaJogadores.innerHTML = "";
    for (i in jogadores){
        let acoesLinha = "<td><button onClick='adicionarVitoria("+i+")'>Vitória</button></td> <td><button onClick='adicionarEmpate("+i+")'>Empate</button></td> <td><button onClick='adicionarDerrota("+i+")'>Derrota</button></td>";
        let jogadorHTML = "<td>"+ jogadores[i].nome +"</td>";
        let vitoriaHTML = "<td>"+ jogadores[i].vitorias +"</td>";
        let empateHTML = "<td>"+ jogadores[i].empates +"</td>";
        let derrotaHTML = "<td>"+ jogadores[i].derrotas +"</td>";
        let pontoHTML = "<td>"+ jogadores[i].pontos +"</td>";
        tabelaJogadores.innerHTML +=  "<tr>" + jogadorHTML + vitoriaHTML + empateHTML + derrotaHTML + pontoHTML + acoesLinha + "<tr>";
    }
}

atualizaTabela();