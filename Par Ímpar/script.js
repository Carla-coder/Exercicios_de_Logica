document.getElementById('classifyNumbers').addEventListener('click', classifyNumbers);

function classifyNumbers() {
    const input = document.getElementById('numbers').value;
    const numbers = input.split(/\s+/).map(Number); // Converte a string de entrada em um array de números
    
    if (numbers.some(isNaN)) {
        document.getElementById('result').textContent = 'Por favor, insira apenas números inteiros separados por espaço.';
        return;
    }

    const { evenCount, oddCount } = countEvenOdd(numbers);
    document.getElementById('result').textContent = `${oddCount} ímpar${oddCount !== 1 ? 'es' : ''} ${evenCount} par${evenCount !== 1 ? 'es' : ''}`;
}

function countEvenOdd(numbers) {
    let evenCount = 0;
    let oddCount = 0;

    numbers.forEach(num => {
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    });

    return { evenCount, oddCount };
}
