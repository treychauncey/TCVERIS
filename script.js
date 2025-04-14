function showTab(id) {
    const categories = document.querySelectorAll('.category');
    categories.forEach(cat => cat.style.display = 'none');
    document.getElementById(id).style.display = 'block';
    calculate();
}
function calculate() {
    const pax = parseInt(document.getElementById('pax').value || 0);
    const days = parseInt(document.getElementById('days').value || 0);
    const rates = {
        lodging: 55, hygiene: 12, food: 35,
        waste: 8, power: 10, security: 18, medical: 20
    };
    let total = 0;
    for (let key in rates) {
        const cost = pax * days * rates[key];
        document.querySelector(`#${key} span`).textContent = cost.toLocaleString();
        total += cost;
    }
    document.querySelector('.grand-total span').textContent = total.toLocaleString();
}
