/*
Você deve escrever um programa que, dados o número e o comprimento dos lados de um polígono regular, mostre seu perímetro.
A entrada tem dois inteiros positivos: N e L, que são, respectivamente, o número de lados e o comprimento de cada lado de um polígono regular (3 ≤ N ≤ 1000000 and 1 ≤ L ≤ 4000).
A saída é o perímetro P do polígono regular em uma única linha.
*/

function calculaPerimetro (N, L){
    let P = N*L;
    if (3 <= N <= 1000000 && 1 <= L <= 4000){
        console.log(`P = ${P}`);
    }
}

calculaPerimetro(3, 1);
calculaPerimetro(9, 8);
calculaPerimetro(1000000, 1000);


