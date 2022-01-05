//Some todos os números de um array

const meuArray = [1, 2, 3, 4, 5, 6, 7];

function reduzArray (arr){
    return arr.reduce(function(previousValue, currentValue){
        return previousValue+currentValue;
    });
}

console.log(reduzArray(meuArray)); //retorna 28

/*
Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. 
Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
*/

const listaPrecos = [
    {
        nome: 'colher',
        preco: 5,
    },
    {
        nome: 'garfo',
        preco: 4,
    },
    {
        nome: 'prato',
        preco: 10,
    },
];

const saldoInicial = 100;

function saldoFinal (saldoInicial, listaPrecos){
    return listaPrecos.reduce(function (previous, current){
        return previous - current.preco;
    }, saldoInicial);
}

console.log(saldoFinal(saldoInicial, listaPrecos));