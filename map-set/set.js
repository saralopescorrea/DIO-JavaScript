//Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.

const primeiroArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valorUnico (array){
    const segundoArray = new Set(array);
    //return segundoArray; retorna um Set apenas com valores únicos.
    //return [segundoArray]; insere o Set dentro de um Array.
    return [...segundoArray]; //técnica spread, cria um novo array com os elementos do primeiro e sem repetição por conta do Set.
}

console.log(valorUnico(primeiroArray));