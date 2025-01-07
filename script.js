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

// Funcție pentru search bar
function searchJante() {
  const query = document.getElementById("search-bar").value;
  if (query) {
    window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
  } else {
    alert("Introduceti un termen de cautare!");
  }
}

// Schimbăm fundalul la fiecare 5 secunde
setInterval(changeBackground, 5000);

// Apelăm funcția pentru a seta fundalul inițial
changeBackground();
