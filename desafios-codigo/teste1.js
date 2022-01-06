/*
Leia um valor inteiro N. Apresente o quadrado de cada um dos valores pares, de 1 até N, inclusive N, se for o caso.
A entrada contém um valor inteiro N (5 < N < 2000).
Imprima o quadrado de cada um dos valores pares, de 1 até N, conforme o exemplo abaixo.
*/

function quadrado (N){
    for (let i = 1; i <= N; i++){
        if (i % 2 === 0){
            console.log(`${i}^2 = ${i*i}`)
        }
    }
}

quadrado(6);
