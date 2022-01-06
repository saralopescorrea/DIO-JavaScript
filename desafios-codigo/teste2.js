/*
Leia um valor inteiro N. Apresente todos os números entre 1 e 10000 que divididos por N dão resto igual a 2.
A entrada contém um valor inteiro N (N < 10000).
Imprima todos valores que quando divididos por N dão resto = 2, um por linha.
*/

function numerosPares (N) {
    for (let i = 1; i < 1000; i++){
        if (i % N === 2){
            console.log(i);
        }
    }
}

console.log(numerosPares(13));