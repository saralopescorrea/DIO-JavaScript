//Primeira solução

function verificaPalindromo(string) {
    if (!string) return "string inexistente"; //Para não rodar com inputs diferentes de string.
    return string.split("").reverse().join("") === string;
    //split separa as letras da string e forma um array com elas.
    //reverse coloca as letras de trás pra frente.
    //join une o array do reverse em uma string só.
}

console.log(verificaPalindromo("ovo")); //retorna true
console.log(verificaPalindromo("cachorro")); //retorna false
console.log(verificaPalindromo("")); //retorna string inexistente

//Segunda solução com 'for'

function verificaPalindromo2 (string){
    if (!string) return "string inexistente"; //Para não rodar com inputs diferentes de string.

    for (let i = 0; i < string.length /2; i++){ //Precisa percorrer apenas a metade da string.
        if(string[i] !== string[string.length -1 - i]) { 
        //i começa no 0, enquanto lenght começa no 1, por isso length-1. string para coletar a string do índice. -i para comparar os índices correspondentes.
            return false //se a 0 do índice é diferente do -1 do lenght, não é um palíndromo.
        }
    }
    return true //caso passe por todas as condições, é palíndromo.
}

console.log(verificaPalindromo2("ama"));
console.log(verificaPalindromo2("teste"));
console.log(verificaPalindromo2(""));