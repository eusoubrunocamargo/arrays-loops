const precos = [30, 10, 54, 76, 1, 4, 35];

function solucao(precos) {
    // seu codigo aqui
    let prejuizos = [];
    for (let i = 0; i < precos.length; i++) {
        for (let j = i + 1; j < precos.length; j++) {
            if (precos[i] - precos[j] > 0)
                prejuizos.push(precos[i] - precos[j]);
        }
    }
    prejuizos.sort((a, b) => a - b);
    console.log(prejuizos[0]);
}

solucao(precos);