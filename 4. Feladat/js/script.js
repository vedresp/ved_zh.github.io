const prices = [
  { name: 'chocolate', price: 7 },
  { name: 'banana', price: 8 },
  { name: 'tv', price: 5000 },
  { name: 'microwave', price: 2000 },
  { name: 'chips', price: 5 },
  { name: 'car', price: 100000 },
];

function updateStatistics() {
  const lowestPrice = Math.min(...prices.map(p => p.price));
  document.getElementById('lowestPrice').innerHTML = `Price of the cheapest item: $${lowestPrice}`;

  const totalPrice = prices.reduce((sum, p) => sum + p.price, 0);
  const averagePrice = totalPrice / prices.length;
  document.getElementById('averagePrice').innerHTML = `Average prices of the items in the list: $${averagePrice.toFixed(2)}`;

  const sumOfSquaredDifferences = prices.reduce((sum, p) => sum + (p.price - averagePrice) ** 2, 0);
  const variance = sumOfSquaredDifferences / prices.length;
  const standardDeviation = Math.sqrt(variance);
  document.getElementById('standardDeviation').innerHTML = `Standard deviation of the prices of the items in the list: $${standardDeviation.toFixed(2)}`;
}

function renderPrices() {
  const priceList = document.getElementById('priceList');
  priceList.innerHTML = '';

  for (const price of prices) {
    const li = document.createElement('li');
    li.innerHTML = `${price.name}: $${price.price}`;
    priceList.appendChild(li);
  }
}

renderPrices();
updateStatistics();

const form = document.getElementById('addItemForm');
form.addEventListener('submit', event => {
  event.preventDefault();

  const itemName = document.getElementById('itemName').value;
  const itemPrice = parseFloat(document.getElementById('itemPrice').value);

  prices.push({ name: itemName, price: itemPrice });

  renderPrices();
  updateStatistics();

  form.reset();
});
