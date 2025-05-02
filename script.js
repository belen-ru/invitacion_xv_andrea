
// Cuenta regresiva
const countdown = document.getElementById('countdown');
const eventDate = new Date('2025-05-31T19:00:00').getTime();
const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    if (distance < 0) {
        clearInterval(x);
        countdown.innerHTML = "¡Es Hoy! ¡Ya es el gran día!";
    }
}, 1000);

// Animación de aparición a la derecha para mariposa
const mariposa = document.querySelector('.mariposa');

const observarMariposa = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

if (mariposa) {
  observarMariposa.observe(mariposa);
}
