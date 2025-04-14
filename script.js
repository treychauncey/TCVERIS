function calculate(category) {
    const pax = parseInt(document.getElementById('pax').value) || 0;
    const days = parseInt(document.getElementById('days').value) || 0;
    let total = 0;

    if (category === 'lodging') {
        const units = Math.ceil(pax / 10);
        const cost = units * 100 * days;
        document.getElementById('lodging-result').innerText = `Lodging: ${units} units × $100 × ${days} days = $${cost}`;
    }

    if (category === 'hygiene') {
        const toilets = Math.ceil(pax / 20);
        const cost = toilets * 50 * days;
        document.getElementById('hygiene-result').innerText = `Hygiene: ${toilets} toilets × $50 × ${days} days = $${cost}`;
    }

    if (category === 'food') {
        const meals = pax * 3 * days;
        const cost = meals * 8;
        document.getElementById('food-result').innerText = `Food & Water: ${meals} meals × $8 = $${cost}`;
    }

    const lodgingCost = parseFloat((document.getElementById('lodging-result').innerText.split('$')[1]) || 0);
    const hygieneCost = parseFloat((document.getElementById('hygiene-result').innerText.split('$')[1]) || 0);
    const foodCost = parseFloat((document.getElementById('food-result').innerText.split('$')[1]) || 0);

    total = (lodgingCost || 0) + (hygieneCost || 0) + (foodCost || 0);
    if (total > 0) {
        document.getElementById('total-result').innerText = `Grand Total: $${total.toLocaleString()}`;
    }
}