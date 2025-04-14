function calculate() {
    const pax = parseInt(document.getElementById('pax').value || 0);
    const days = parseInt(document.getElementById('days').value || 0);
    const markup = parseFloat(document.getElementById('markup').value || 1);

    const rates = {
        lodging: 90, hygiene: 25, food: 55,
        waste: 25, power: 50, security: 25, medical: 30
    };

    let total = 0;
    for (let key in rates) {
        const cost = pax * days * rates[key] * markup;
        document.querySelector(`#${key} span`).textContent = cost.toLocaleString(undefined, {maximumFractionDigits: 0});
        total += cost;
    }

    const pppd = total / (pax * days || 1);
    document.querySelector('.grand-total span').textContent = total.toLocaleString(undefined, {maximumFractionDigits: 0});
    document.querySelector('.pppd span').textContent = pppd.toFixed(2);
}

document.getElementById('markup').addEventListener('change', calculate);
document.getElementById('pax').addEventListener('input', calculate);
document.getElementById('days').addEventListener('input', calculate);
