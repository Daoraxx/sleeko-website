document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", function(event) {
    event.preventDefault();
    const product = this.querySelector("h2").innerText;
    const phone = "1234567890"; // your number
    const message = encodeURIComponent(`Hi, I'm interested in the ${product}`);
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  });
});
document.querySelectorAll(".card img").forEach(img => {
  const original = img.src;
  const hoverImage = img.dataset.hover; // set in HTML
  img.addEventListener("mouseenter", () => img.src = hoverImage);
  img.addEventListener("mouseleave", () => img.src = original);
});
document.querySelectorAll('.product-card').forEach(card => {
  const tape = document.createElement('div');
  tape.classList.add('back-taping');
  card.prepend(tape);
});
