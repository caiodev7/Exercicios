    let lado1, lado2, lado3

        lado1 = parseFloat(prompt('digite o valor do primeiro lado!'))
        lado2 = parseFloat(prompt('digite o valor do segundo lado!'))
        lado3 = parseFloat(prompt('digite o valor do terceiro lado!'))
        if ((lado1 + lado2 > lado3) && (lado2 + lado3 > lado1) && (lado1 + lado3 > lado2)) {
            if (lado1 === lado2 && lado2 === lado3) {
                alert(`equilátero, todos os lados iguais ${lado1}; ${lado2} ${lado3}`);
            } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
                alert(`isósceles, dois lados iguais: ${lado1}; ${lado2}; ${lado3}`);
            } else {
                alert(`Escaleno, lados diferentes: ${lado1}; ${lado2}; ${lado3};`);
            }
        } else {
            alert('Não pode se formar um triângulo!');
        }