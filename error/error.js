/*
O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.
Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
*/

function minhaFuncao (array, num){
    try {
        if (!array && !num) throw new ReferenceError ('Não foram enviados parâmetros.');

        if (typeof array !== 'object') throw new TypeError ('Objeto inválido!');

        if (typeof num !== 'number') throw new TypeError ('Número inválido!');

        if (array.length !== num) throw new RangeError ('Tamanho inválido.');

        return array;
    }
    catch(e){
        if (e instanceof ReferenceError){
            console.log('Erro do tipo ReferenceError.');
            console.log(e.message);
        } else if (e instanceof TypeError){
            console.log('Erro do tipo TypeError.');
            console.log(e.message);
        } else if (e instanceof RangeError){
            console.log('Erro do tipo RangeError');
            console.log(e.message);
        } else {
            console.log(`Erro de tipo não esperado: ${e}.`)
            console.log(e.message);
        }
    }
}

console.log(minhaFuncao()); //Erro do tipo ReferenceError; Não foram enviados parâmetros.
console.log(minhaFuncao([], 'a')); //Erro do tipo TypeError; Número inválido.
console.log(minhaFuncao(5,4)); //Erro do tipo TypeError; Objeto inválido.
console.log(minhaFuncao([1,2], 3)); //Erro do tipo RangeError; Tamanho inválido.
console.log(minhaFuncao([1, 2, 3], 3)); //(3) [1, 2, 3].