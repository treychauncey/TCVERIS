function calculate() {
    const personnel = parseInt(document.getElementById('personnel').value);
    const days = parseInt(document.getElementById('days').value);
    const costPerPerson = parseFloat(document.getElementById('costPerPerson').value);

    const total = personnel * days * costPerPerson;
    document.getElementById('result').innerText = `Total Cost: $${total.toLocaleString()}`;
}
