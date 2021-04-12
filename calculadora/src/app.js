
function operacao(){
    
    let info = pegaInfo();
    operaEImprime(info);
}

function pegaInfo(){
    let info = {
        num1: 0,
        num2: 0,
        operacao: ""
    }
    info.num1 = parseFloat(prompt("Digite o primeiro número"));
    while(isNaN(info.num1)) {
        info.num1 = parseFloat(prompt("Inválido. Digite o primeiro número"));
    }
    info.num2 = parseFloat(prompt("Digite o segundo número"));
    while(isNaN(info.num2)) {
        info.num2 = parseFloat(prompt("Inválido. Digite o segundo número"));
    }
    while(info.operacao != "+" && info.operacao != "-" && info.operacao != "*" && info.operacao != "/") {
        info.operacao = prompt("Inválido. Qual operação? (+, -, *, /)");
    }
    return info;}

function operaEImprime(info){
    switch (info.operacao) {
        case "+":
            resultado = info.num1+info.num2;
            break;
        case "-":
            resultado = info.num1-info.num2;
            break;
        case "*":
            resultado = info.num1*info.num2;
            break;
        case "/":
            resultado = info.num1/info.num2;
            break;
    }
    document.getElementById("resultado").innerHTML = info.num1 + " " + info.operacao + " " + info.num2 +" = "+ resultado;
    //document.write("<h2>"+ info.num1 + " " + info.operacao + " " + info.num2 +" = "+ resultado +"</h2>");
}