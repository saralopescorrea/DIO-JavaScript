function calculadora (){ //Mostra um prompt para selecionar a operação desejada.
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Adição (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6- Potenciação (**)'))

    if (!operacao || operacao >= 7){ //Impede que a operação siga ao se inserir um número diferente de 1 a 6.
        alert('Erro: Operação inválida.');
        calculadora();
    } else { //Caso o valor inserido seja um número entre 1 a 6, a função é executada.
        
        let n1 = Number(prompt('Insira o primeiro valor'));
        let n2 = Number(prompt('Insira o segundo valor'));
        let resultado;

        if (!n1 || !n2){ //Impede que a operação siga com parâmetros incorretos, ou seja, valores diferentes de números.
            alert('Erro: Parâmetros inválidos.'); 
            calculadora();
        } else { //Caso o valor inserido seja um número, as funções são executadas.
            function soma(){
                resultado = n1 + n2;
                alert(`O resultado de ${n1} mais ${n2} é ${resultado}.`)
                novaOperacao();
            }
    
            function substracao(){
                resultado = n1 - n2;
                alert(`O resultado de ${n1} menos ${n2} é ${resultado}.`)
                novaOperacao();
            }
    
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`O resultado de ${n1} multiplicado por ${n2} é ${resultado}.`)
                novaOperacao();
            }
    
            function divisaoReal(){
                resultado = n1 / n2;
                alert(`O resultado de ${n1} dividido por ${n2} é ${resultado}.`)
                novaOperacao();
            }
    
            function divisaoInteira(){
                resultado = n1 % n2;
                alert(`O resto da divisão de ${n1} por ${n2} é ${resultado}.`)
                novaOperacao();
            }
    
            function potenciacao(){
                resultado = n1 ** n2;
                alert(`O resultado de ${n1} elevado a ${n2} é ${resultado}.`)
                novaOperacao();
            }
    
            function novaOperacao (){ //Ao final da operação, questiona se o usuário gostaria de fazer mais uma operação.
                let opcao = prompt('Deseja fazer mais uma operação?\n 1 - Sim\n 2 - Não');
                if (opcao == 1){ //Inicia a calculadora novamente.
                    calculadora();
                } else if (opcao == 2){ // Encerra.
                    alert('Até a próxima!'); 
                } else { //Impede que a operação siga se forem inseridos valores diferentes de 1 e 2.
                    alert('Opção inválida.') 
                    novaOperacao();
                }
            }
        }

        if (operacao == 1){ //Executa as operações de acordo com o número atribuído a elas.
            soma ();
        } else if (operacao == 2) {
            substracao ();
        } else if (operacao == 3) {
            multiplicacao ();
        } else if (operacao == 4) {
            divisaoReal ();
        } else if (operacao == 5) {
            divisaoInteira ();
        } else if (operacao == 6) {
            potenciacao ();
        } 
    }
        
}

calculadora();