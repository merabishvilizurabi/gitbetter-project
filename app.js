const coffee = document.getElementById('coffee-link');
if (coffee) {
  const originalText = coffee.textContent || '';
  let revertTimer = null;

  coffee.addEventListener('click', (e) => {
    e.preventDefault();
    coffee.textContent = "I don't drink coffee!";
    if (revertTimer) {
      clearTimeout(revertTimer);
    }
    revertTimer = setTimeout(() => {
      coffee.textContent = originalText;
      revertTimer = null;
    }, 2000);
  });
}