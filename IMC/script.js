let people = [];

document.getElementById('addPerson').addEventListener('click', addPerson);
document.getElementById('generateReport').addEventListener('click', generateReport);

function addPerson() {
    const name = document.getElementById('name').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (name && !isNaN(weight) && !isNaN(height)) {
        people.push({ name, weight, height });
        document.getElementById('name').value = '';
        document.getElementById('weight').value = '';
        document.getElementById('height').value = '';
        alert(`Pessoa adicionada: ${name}, ${weight} kg, ${height} m`);
    } else {
        alert('Por favor, insira um nome, peso e altura válidos.');
    }
}

function generateReport() {
    const reportList = document.getElementById('reportList');
    reportList.innerHTML = ''; // Limpa a lista antes de adicionar novos itens

    people.forEach(person => {
        const classification = classifyIMC(person.weight, person.height);
        const listItem = document.createElement('li');
        listItem.textContent = `${person.name}: ${classification}`;
        reportList.appendChild(listItem);
    });
}

function classifyIMC(weight, height) {
    const imc = weight / (height * height);
    
    if (imc < 20) {
        return 'Fitness';
    } else if (imc >= 20 && imc < 30) {
        return 'Sarado';
    } else {
        return 'Fofinho';
    }
}
