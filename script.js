
function calculate(category) {
    const pax = parseInt(document.getElementById('pax').value);
    const days = parseInt(document.getElementById('days').value);
    if (!pax || !days) return;

    const rates = {
        lodging: 40 * 1.25,
        hygiene: 15 * 1.25,
        food: 30 * 1.25
    };

    const total = pax * days * rates[category];
    document.getElementById('output').innerHTML = 
        category.toUpperCase() + " Cost: $" + total.toLocaleString();
}
