document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('mousedown', () => {
    card.style.transform = 'scale(0.9)';
    card.style.transition = 'transform 0.1s ease';
  });

  card.addEventListener('mouseup', () => {
    card.style.transform = 'scale(1.08)';
    card.style.transition = 'transform 0.2s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.transition = 'transform 0.2s ease';
  });

  // For touch devices
  card.addEventListener('touchstart', () => {
    card.style.transform = 'scale(0.9)';
    card.style.transition = 'transform 0.1s ease';
  });

  card.addEventListener('touchend', () => {
    card.style.transform = 'scale(1.08)';
    card.style.transition = 'transform 0.2s ease';
  });
});
const modal = document.getElementById('product-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('mousedown', () => {
    card.style.transform = 'scale(0.9)';
    card.style.transition = 'transform 0.1s ease';
  });

  card.addEventListener('mouseup', () => {
    card.style.transform = 'scale(1.08)';
    card.style.transition = 'transform 0.2s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.transition = 'transform 0.2s ease';
  });

  // For touch devices
  card.addEventListener('touchstart', () => {
    card.style.transform = 'scale(0.9)';
    card.style.transition = 'transform 0.1s ease';
  });

  card.addEventListener('touchend', () => {
    card.style.transform = 'scale(1.08)';
    card.style.transition = 'transform 0.2s ease';
  });

  // Click to open modal with details
  card.addEventListener('click', () => {
    const imgSrc = card.querySelector('img').src;
    const title = card.querySelector('h3').innerText;
    const price = card.querySelector('p').innerText;

    modalBody.innerHTML = `
      <img src="${imgSrc}" alt="${title}" style="width:100%; border-radius:15px; margin-bottom:15px;" />
      <h2>${title}</h2>
      <p style="font-size:1.2rem; margin-top:10px;">Price: ${price}</p>
      <p>Here you can add more product details, description, and a purchase button.</p>
      <button onclick="alert('Add to cart clicked!')" style="margin-top:20px; padding:10px 20px; border:none; background:#ff6600; color:#fff; border-radius:10px; cursor:pointer;">Add to Cart</button>
    `;

    modal.style.display = 'block';
  });
});

modalClose.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if(event.target === modal) {
    modal.style.display = 'none';
  }
}
