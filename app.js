let total = 0;
document.querySelectorAll('.item').forEach(el => {
  el.addEventListener('click', () => {
    const price = parseFloat(el.getAttribute('data-price'));
    total += price;
    document.getElementById('total').textContent = total.toFixed(2);
  });
});