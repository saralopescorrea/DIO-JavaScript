function substituiPares (array){
    if (!array.length) return -1; //Se o array não tiver length, retorna -1.
    for(let i = 0; i < array.length; i++){
        if (array[i] === 0){ //Caso o i seja 0, não é necessário substituir.
            console.log('Já é zero.');
        } else if (array[i] % 2 === 0){ //Verifica se i é divisível por 2 (par).
            console.log(`Substituindo o valor de ${array[i]} por zero.`);
            array[i] = 0 //substitui por zero.
        }
    }
    return array; //retorna o array após a substituição.
}

let array = [1, 3, 12, 45, 62, 78, 93, 103];
console.log(substituiPares(array)); //retorna [1, 3, 0, 45, 0, 0, 93, 103].
console.log(substituiPares([])); //retorna -1.