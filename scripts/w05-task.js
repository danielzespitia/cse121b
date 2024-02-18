// Variables globales
let templeList = [];
let templesElement = document.getElementById('temples');

// Función: getTemples()
async function getTemples() {
  const response = await fetch('https://jsonplaceholder.typicode.com/temples');
  const templeList = await response.json();
  displayTemplates(templeList);
}

// Función: reset()
function reset() {
  templesElement.innerHTML = '';
}

// Función: filterTemples()
function filterTemples(temples) {
  reset();
  const filterValue = document.getElementById('filter').value;
  let filtered;
  switch (filterValue) {
    case 'utah':
      filtered = temples.filter(temple => temple.location.includes('Utah'));
      break;
    case 'notutah':
      filtered = temples.filter(temple => !temple.location.includes('Utah'));
      break;
    case 'ancient':
      filtered = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
      break;
    case 'all':
    default:
      filtered = temples;
      break;
  }
  displayTemplates(filtered);
}

// Función: displayTemplates()
function displayTemplates(temples) {
  temples.forEach(temple => {
    const templeElement = document.createElement('article');
    templeElement.innerHTML = `
      <h3>${temple.name}</h3>
      <img src="${temple.imageUrl}" alt="${temple.name}">
      <p>${temple.location}</p>
      <p>${temple.dedicated}</p>
    `;
    templesElement.appendChild(templeElement);
  });
}

// Detector de eventos: filterTemples Change
document.getElementById('filter').addEventListener('change', () => {
  filterTemples(templeList);
});

// Llamada a la función getTemples()
getTemples();