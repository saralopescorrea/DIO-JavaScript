function comparaNumero (num1, num2) {
    if (!num1 || !num2) return 'Números inválidos.'
    const primeiraFrase = criaPrimeiraFrase (num1, num2);
    const segundaFrase = criaSegundaFrase (num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase (num1, num2) {
    if (num1 === num2) {
        return `Os números ${num1} e ${num2} são iguais.`;
    } else {
        return `Os números ${num1} e ${num2} não são iguais.`;
    }
}

function criaSegundaFrase (num1, num2) {
    const soma = num1 + num2; 
    if (soma <= 10) {
        return (`Sua soma é ${soma}, que é menor que 10 e menor que 20.`);
    } else if (soma >= 10 && soma <= 20) {
        return (`Suma soma é ${soma}, que é maior que 10 e menor que 20.`);
    } else if (soma > 20){
        return (`Sua soma é ${soma}, que é maior que 10 e maior que 20.`)
    }
}

console.log(comparaNumero(1,2))

/* 
Opção diferente para a função criaPrimeiraFrase

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = ' '; 
    /String vazia que vai mudar o valor./

    /Serem diferentes é o padrão/
    if (num1 !== num2){ 
      saoIguais = 'não';
    }
  
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
  } 
  
Opção diferente para a função criaSegundaFrase

  function criaSegundaFrase (num1, num2){
  const soma = num1+num2;

  let resultado10 = 'menor';
  let resultado20 = 'menor';

  const compara10 = soma > 10;
  const compara20 = soma > 20;

  if (compara10){
    resultado10 = 'maior';
  }

  if (compara20){
    resultado20 = 'maior';
  }

  return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}
*/