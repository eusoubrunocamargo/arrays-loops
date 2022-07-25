const carrossel = [0, 1, 2, 3, 4, 5, 6];

function solucao(sequencia) {
    //seu codigo aqui
    let contador = 0;
    for (let item of sequencia) {
        if (item === ">" && contador < 6) {
            contador += 1;
        } else if (item === ">" && contador === 6) {
            contador = 0;
        } else if (item === "<" && contador === 0) {
            contador = 6;
        } else if (item === "<" && contador > 0) {
            contador -= 1;
        }
    }
    console.log(contador);

}

solucao(">>>>>>><<<>>><>>>");