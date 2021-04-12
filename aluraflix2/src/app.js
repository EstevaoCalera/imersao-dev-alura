function adicionarFilme(){
    let filmeAdc = document.getElementById("filme").value;
    if (filmeAdc.endsWith(".jpg")){
        let listaFilmes = document.querySelector('#listaFilmes');
        listaFilmes.innerHTML = listaFilmes.innerHTML + "<img src=" + filmeAdc + ">";
    } else{
        alert("Imagem inválida");
    }
    document.getElementById("filme").value = "";
}