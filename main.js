// # Operação de Adição
let somar = function(a, b){
    return a + b
}

// # Operação de Subtração
let subtrair = (a, b) => a - b

// # Operação de Multiplicação
let multiplicar = function(a, b){
    return a * b
}

// # Operação de Divisão
const dividir = (a, b) => a / b

// *Calculadora(função) que usa outras operações(funções)*
const calculadora = (operacao, y, w) => operacao(y, w)

let calcular = () => {
    let entrada = document.getElementById("entrada").value
    let entrada2 = document.getElementById("entrada2").value
    let valor = parseInt(entrada)
    let valor2 = parseInt(entrada2)
    let operador = String(document.getElementById("operador").value).toLowerCase().trim()
    let resultado

    // Caso um ou todos os inputs esteja vazio(s)
    if(entrada == "" || entrada2 == "") {
        // Mensagem de aviso 
        resultado = document.getElementById("resultado").innerHTML = '<p class="bg-dark text-white p-3 mt-3">Uns dos valores não foi preencido! </p>'
        removerParagrafo()
        return
    } else { // Senão é analisado o operador para execuçaõ da operação
        if(operador == "+") {
            resultado = calculadora(somar, valor, valor2)
        } else if(operador == "-") {
            resultado = calculadora(subtrair, valor, valor2)
        } else if(operador == "x") {
            resultado = calculadora(multiplicar, valor, valor2)
        } else if(operador == "/") {
            if(valor2 == 0) { // Evita a divisão por zero
                // Mensagem de erro
                resultado = document.getElementById("resultado").innerHTML = '<p class="bg-warning text-dark p-3 mt-3">Não possível fazer divisão por zero!</p>'
                removerParagrafo()
                return
            }
            resultado = calculadora(dividir, valor, valor2)
        } else { // Caso nenhum operador for selecioando ou escrito errado
            // Mensagem de aviso
            resultado = document.getElementById("resultado").innerHTML = '<p class="bg-danger text-white p-3 mt-3">Escolha um operador válido! </p>'
            removerParagrafo()
            return
        }
    }
    
    // Mensagem de operação bem sucedida
    resultado = document.getElementById("resultado").innerHTML = '<p class="bg-success text-white p-3 mt-3">Resultado: ' + resultado + '</p>'

    // Função para limpar inputs e remover o parágrafo
    removerParagrafo()
}

/* Acionar a função calcular pela tecla Enter */
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      calcular()
    }
})

/* Função para remover o paragrafo de resposta quando apagar os dados dos inputs */
const removerParagrafo = () => {
    const valor = document.getElementById("entrada")
    const valor2 = document.getElementById("entrada2")
    const operador = document.getElementById("operador")

    const verificarInputs = () => {
        if (valor.value == "" && valor2.value == "" && operador.value == "") {
            const paragrafo = document.getElementById("resultado").innerHTML = '' // Remove o conteúdo do parágrafo
        }
    };

    // Adiciona eventos individuais para cada input, permitindo apagar em qualquer ordem
    valor.addEventListener('input', verificarInputs);
    valor2.addEventListener('input', verificarInputs);
    operador.addEventListener('input', verificarInputs);
}

/* Implemata a locomoção entre os inputs atraves das setas(cima e baixo) do teclado */
document.addEventListener('keydown', function(event) {
    let inputs = document.querySelectorAll('input'); // Seleciona todos os inputs
    let inputFocado = document.activeElement; // Obtém o input atualmente focado

    // Verifica se o elemento atualmente focado é um input
    if (inputFocado.tagName === 'INPUT') {

        // Indice do input atualmente focado
        let indexInput = Array.from(inputs).indexOf(inputFocado)

        // Verifica se a seta para cima foi pressionada
        if (event.key === 'ArrowUp') {
            event.preventDefault()
            if (indexInput > 0) {
                inputs[indexInput - 1].focus() // Move o foco do input selecionado para anterior
            }
        }

        // Verifica se a seta para baixo foi pressionada
        if (event.key === 'ArrowDown') {
            event.preventDefault()
            if (indexInput < inputs.length - 1) {
                inputs[indexInput + 1].focus() // Move o foco do input selecionado para próximo
            }
        }
    }
});

