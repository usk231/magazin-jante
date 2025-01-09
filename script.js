// Lista de imagini de fundal directe
const backgrounds = [
  "https://rare-gallery.com/uploads/posts/988047-car-BMW-F10-BMW-5-Series.jpg",
  "https://www.evolveautomotive.co.uk/cdn/shop/files/Evolve_BMW_F90_M5_1.jpg?v=1690980778&width=3840"
];

// Funcție pentru schimbarea fundalului la intervale
let currentIndex = 0;

function changeBackground() {
  document.body.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  
  currentIndex = (currentIndex + 1) % backgrounds.length;
}

// Funcție pentru a șterge un produs din coș
function removeItemFromCart(button) {
  const cartItem = button.closest('.cart-item'); // Găsim elementul care conține produsul
  cartItem.style.transition = "transform 0.2s ease-in-out";
  cartItem.style.transform = "scale(0)"; // Aplica efect de dispariție
  setTimeout(() => {
    cartItem.remove(); // Elimină elementul după efect
    updateTotal(); // Actualizează totalul după eliminare
  }, 200); // Așteaptă durata animației pentru a șterge efectiv
}

// Funcție pentru a actualiza totalul coșului (opțional)
function updateTotal() {
  let total = 0;
  const prices = document.querySelectorAll('.cart-item .price');
  prices.forEach(price => {
    total += parseFloat(price.textContent.replace('lei', '').trim());
  });
  document.getElementById('total-price').textContent = total.toFixed(2) + ' lei';
}

// Schimbăm fundalul la fiecare 5 secunde
setInterval(changeBackground, 5000);

// Apelăm funcția pentru a seta fundalul inițial
changeBackground();
