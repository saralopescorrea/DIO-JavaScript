//Filtre e retorne todos os números pares de um array.

const numeros = [3, 6, 9, 12, 15, 18];

function numerosPares (numeros){
    if(numeros % 2 === 0){
        return numeros
    }
}

let arrayFilter = numeros.filter(numerosPares);

console.log(arrayFilter);// retorna [6, 12, 18]

/*
Opção

function numerosPares (numeros){
    return numeros.filter(function(item){
        return item % 2 === 0;
    });
}

*/