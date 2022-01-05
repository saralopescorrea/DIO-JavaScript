//Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.

const numeros = [1, 2, 4, 8, 16, 32];

const num1 = {
    value: 5,
}

const num2 = {
    value: 3,
}

//Map sem this

let multiplicacao = numeros.map((item) => item * 5);

//Map com this

function mapThis (numeros, thisArg){
    return numeros.map(function(item){
        return this.value * item;
    }, thisArg);
}

console.log(multiplicacao); //retorna [5, 10, 20, 40, 80, 160]
console.log(mapThis(numeros, num1)); //retorna [5, 10, 20, 40, 80, 160]
console.log(mapThis(numeros, num2)); //retorna [3, 6, 12, 24, 48, 96]

/*
Opção da aula

function mapSemThis (numeros){
    return numeros.map(function(item){
        return item * 2;
    });
}
*/
