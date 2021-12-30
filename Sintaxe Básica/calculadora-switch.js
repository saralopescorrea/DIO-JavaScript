function calculadora (){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Adição (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6- Potenciação (**)'))

    if (!operacao || operacao >= 7){
        alert('Erro: Operação inválida.');
        calculadora();
    } else {
        
        let n1 = Number(prompt('Insira o primeiro valor'));
        let n2 = Number(prompt('Insira o segundo valor'));
        let resultado;

        if (!n1 || !n2){
            alert('Erro: Parâmetros inválidos.');
            calculadora();
        } else {
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
    
            function novaOperacao (){
                let opcao = prompt('Deseja fazer mais uma operação?\n 1 - Sim\n 2 - Não');
                if (opcao == 1){
                    calculadora();
                } else if (opcao == 2){
                    alert('Até a próxima!');
                } else {
                    alert('Opção inválida.')
                    novaOperacao();
                }
            }
        }

        switch (operacao){
            case 1:
                soma();
                break
                case 2:
                    substracao();
                    break
                    case 3:
                        multiplicacao ();
                        break
                        case 4:
                            divisaoReal();
                            break
                            case 5:
                                divisaoInteira();
                                break
                                case 6:
                                    potenciacao();
                                    break
        }
    }
        
}

calculadora();