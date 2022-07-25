let primeiraLetra = "a";
let segundaLetra = "v";
let palavras = [
    "ave",
    "aveia",
    "brasil"
];

function solucao(primeiraLetra, segundaLetra, palavras) {
    let check = 0;
    for (let item of palavras) {

        if (item[0] === primeiraLetra && item[1] === segundaLetra) {
            check += 1;
            console.log(item);
        };
    }
    if (check === 0) {
        console.log("NENHUMA");
    }
    //console.log(primeiraLetra, segundaLetra, palavras);
}

solucao(primeiraLetra, segundaLetra, palavras);