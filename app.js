
// função de calcular imposto do valor de um produto
function CalcularImposto(valorProduto) 
{  
    //estrutura de condição para verificar e aplicar o valor do imposto sobre o produto
    if(valorProduto >= 1525)
    {
        //calculo simples de imposto
        var calculo = valorProduto * (12 / 100)
        var reajuste = calculo + valorProduto
        //O innerHTML é uma propriedade de um elemento HTML em JavaScript que permite acessar ou modificar o conteúdo HTML dentro desse elemento.
        document.getElementById('text').innerHTML = 'Imposto de 12% aplicado'; 
    }
    else if(valorProduto >= 100 && valorProduto < 1525)
    {
        var calculo = valorProduto * (6 / 100)
        var reajuste = calculo + valorProduto
        document.getElementById('text').innerHTML = 'Imposto de 6% aplicado'; 
    }
    else if(valorProduto < 100)
    {
        var calculo = valorProduto * (4 / 100)
        var reajuste = calculo + valorProduto
        document.getElementById('text').innerHTML = 'Imposto de 4% aplicado';
    }

    //o toFixed permite definir um valor para a quantidade de casas decimais
    //o método replace substitui todas as ocorrências de um caractere por outro caractere em uma string.
    return document.getElementById('result').innerHTML = 'R$ ' + reajuste.toFixed(2).replace(".", ",");
}

function executarFuncao() 
{
    var valorProduto = parseFloat(document.getElementById('valor').value);
    CalcularImposto(valorProduto);
}


