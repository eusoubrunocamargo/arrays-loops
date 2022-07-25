const disparos = [0, 10, 50, 70, 80, 30];

function solucao(disparos) {
    //seu codigo aqui
    let acima70 = 0;
    for (let item of disparos) {
        if (item > 70) {
            acima70 += 1;
        }
    }
    if (acima70 > 2) {
        console.log(acima70);
    } else {
        console.log("ELIMINADO");
    }

}

solucao(disparos);