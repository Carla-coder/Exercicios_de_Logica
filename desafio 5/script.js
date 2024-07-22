document.getElementById('adjustAge').addEventListener('click', adjustAge);

function adjustAge() {
    const input = document.getElementById('people').value;
    const entries = input.split(';').map(entry => entry.trim()).filter(entry => entry.length > 0);
    
    if (entries.length === 0) {
        document.getElementById('result').textContent = 'Por favor, insira dados válidos.';
        return;
    }

    const results = entries.map(entry => {
        const [name, ageStr] = entry.split(' ');
        const age = parseInt(ageStr, 10);
        
        if (isNaN(age)) {
            return `${name} - idade inválida`;
        }
        
        return `${name} ${age + 1}`;
    });

    document.getElementById('result').textContent = results.join('\n');
}
