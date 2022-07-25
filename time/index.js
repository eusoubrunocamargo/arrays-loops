const resultados = [
    "V",
    "V",
    "E",
    "E",
    "D",
    "V"
]

function solucao(resultados) {
    //seu codigo aqui
    let soma = 0;
    for (let item of resultados) {
        if (item === "V") {
            soma += 3;
        } else if (item === "E") {
            soma += 1;
        }
    }
    console.log(soma);
}

solucao(resultados);