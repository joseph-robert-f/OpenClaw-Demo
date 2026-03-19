(function(){
  const cart = new Map();

  function formatUSD(n){
    return '$' + n.toFixed(0);
  }

  function render(){
    const ul = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    ul.innerHTML = '';

    let total = 0;
    for (const [name, item] of cart.entries()){
      total += item.price * item.qty;
      const li = document.createElement('li');
      li.innerHTML = `<span>${name} <span style="opacity:.7">× ${item.qty}</span></span><span>${formatUSD(item.price * item.qty)}</span>`;
      ul.appendChild(li);
    }

    if (cart.size === 0){
      const li = document.createElement('li');
      li.innerHTML = '<span>No items yet.</span><span></span>';
      ul.appendChild(li);
    }

    totalEl.textContent = formatUSD(total);
  }

  document.querySelectorAll('[data-add-to-cart]').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-add-to-cart');
      const price = Number(btn.getAttribute('data-price') || 0);
      const existing = cart.get(name);
      cart.set(name, { price, qty: existing ? existing.qty + 1 : 1 });
      render();
    });
  });

  document.getElementById('cartClear').addEventListener('click', () => {
    cart.clear();
    render();
  });

  render();
})();
