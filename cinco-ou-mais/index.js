const precos = [10, 10, 5, 4];

function solucao(precos) {
    //seu codigo aqui
    let precosOrdenados = precos.sort((a, b) => a - b);
    let final = 0;
    let checador = true;
    for (let item of precosOrdenados) {

        if (precosOrdenados.length < 5) {
            checador = false;
            final = final + item;
        } else if (precosOrdenados.length >= 5 && checador === true) {
            final = final + item;
        }
    }
    if (precosOrdenados.length < 5) {
        console.log(final);
    } else {
        console.log(final - precosOrdenados[0]);
    };
}

solucao(precos);