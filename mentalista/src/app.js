let randomNum = parseInt(Math.random() * 10);
console.log(randomNum);
let triedNumber;
const maxAttempts = 3;
let attempt = 0;

while (triedNumber != randomNum){
    triedNumber = prompt("Digite um número de 0 a 10:");
    if (triedNumber > randomNum) alert("O número aleatório é menor");
    else if (triedNumber < randomNum) alert("O número aleatório é maior");
    else alert("Acertou!");

    if (attempt >= maxAttempts){
        alert("Acabaram as tentativas");
        break;
    }
    attempt++;

}