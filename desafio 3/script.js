document.getElementById('classifyTriangle').addEventListener('click', classifyTriangle);

function classifyTriangle() {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);
    
    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
        document.getElementById('result').textContent = 'Por favor, insira valores válidos para todos os lados.';
        return;
    }

    const result = classifyTriangleType(sideA, sideB, sideC);
    document.getElementById('result').textContent = `O triângulo é ${result}.`;
}

function classifyTriangleType(a, b, c) {
    if (a === b && b === c) {
        return 'Equilátero';
    } else if (a === b || b === c || a === c) {
        return 'Isósceles';
    } else {
        return 'Escaleno';
    }
}
