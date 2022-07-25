const notas = [100,
    100, 100,
    20, 50, 30,
    14, 100, 100, 100];

function solucao(notas) {
    //seu codigo aqui
    let notasOrdenadas = notas.sort((a, b) => a - b);
    notasOrdenadas.shift();
    notasOrdenadas.pop();
    let soma = 0;
    for (let item of notasOrdenadas) {
        soma += item;
    }
    console.log(soma / notasOrdenadas.length);

}

solucao(notas);