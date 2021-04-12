function converter() {
    let input = document.getElementById("input");
    output = input.value/5.6;
    document.getElementById("output").innerHTML = "U$ " + output.toFixed(2);
}