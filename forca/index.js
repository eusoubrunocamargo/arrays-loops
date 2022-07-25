let palpite = "a";
let palavra = "abelha";

function solucao(palpite, palavra) {
    // seu codigo aqui
    let soma = 0;
    for (let item of palavra) {
        if (item === palpite) {
            soma += 1;
        }
    }
    console.log(soma);
}

solucao("a", "abelha");