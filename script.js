const traffic = document.querySelector('#traffic');
const variantMeter = document.querySelector('#variantMeter');
const rate = document.querySelector('#rate');
const lift = document.querySelector('#lift');
const revenue = document.querySelector('#revenue');

function updateDashboard() {
  const allocation = Number(traffic.value);
  const conversion = 5.8 + allocation / 125;
  const liftValue = ((conversion - 5.4) / 5.4) * 100;
  const impact = Math.round(liftValue * 570);
  variantMeter.value = conversion.toFixed(1);
  rate.textContent = `${conversion.toFixed(1)}%`;
  lift.textContent = `+${liftValue.toFixed(1)}%`;
  revenue.textContent = `$${impact.toLocaleString()}`;
}

traffic.addEventListener('input', updateDashboard);
updateDashboard();
