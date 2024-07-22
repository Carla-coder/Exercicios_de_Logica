document.getElementById('addPerson').addEventListener('click', addPerson);
document.getElementById('generateReport').addEventListener('click', generateReport);

const people = [];

function addPerson() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    
    if (name && !isNaN(age)) {
        people.push({ name, age });
        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        alert(`Pessoa adicionada: ${name}, ${age} anos`);
    } else {
        alert('Por favor, insira um nome e uma idade válidos.');
    }
}

function generateReport() {
    const reportList = document.getElementById('reportList');
    reportList.innerHTML = '';

    people.forEach(person => {
        const phase = classifyLifePhase(person.age);
        const listItem = document.createElement('li');
        listItem.textContent = `${person.name}: ${phase}`;
        reportList.appendChild(listItem);
    });
}

function classifyLifePhase(age) {
    if (age <= 12) {
        return 'Criança';
    } else if (age <= 17) {
        return 'Jovem';
    } else if (age <= 35) {
        return 'Adulto';
    } else if (age <= 60) {
        return 'Meia idade';
    } else {
        return 'Idoso';
    }
}
