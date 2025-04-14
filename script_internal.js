
function calculate() {
  const pax = parseInt(document.getElementById('pax').value || 0);
  const days = parseInt(document.getElementById('days').value || 0);
  const mode = parseFloat(document.getElementById('mode').value);
  const base = { lodging: 90, hygiene: 25, food: 55, waste: 25, power: 50, security: 25, medical: 30 };
  let total = 0;
  for (let key in base) {
    let cost = pax * days * base[key] * mode;
    document.querySelector(`#${key} span`).textContent = cost.toLocaleString();
    total += cost;
  }
  let pppd = total / (pax * days || 1);
  document.querySelector('.grand-total span').textContent = total.toLocaleString();
  document.querySelector('.pppd span').textContent = pppd.toFixed(2);
}
['pax','days','mode'].forEach(id => document.getElementById(id).addEventListener('input', calculate));
