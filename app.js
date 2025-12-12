async function fetchHouses() {
  const response = await fetch('data/houses.json');
  return response.json();
}

function createCard(house) {
  const card = document.createElement('a');
  card.className = 'card';
  card.href = `casa.html?slug=${encodeURIComponent(house.slug)}`;
  card.innerHTML = `
    <img src="${house.images[0]}" alt="${house.name}">
    <div class="card-body">
      <span class="tag">${house.status}</span>
      <h3>${house.name}</h3>
      <div class="meta">
        <span>📏 ${house.area} m²</span>
        <span>🛏️ ${house.bedrooms} dorm</span>
        <span>🛋️ ${house.rooms} amb</span>
      </div>
      <div class="badges">
        <span>${house.location}</span>
        <span>${house.garage ? '🚗 Cochera' : '🚶‍♀️ Sin cochera'}</span>
      </div>
    </div>
  `;
  return card;
}

function applyFilters(data) {
  const search = document.getElementById('search').value.toLowerCase();
  const status = document.getElementById('status').value;
  const minArea = Number(document.getElementById('minArea').value) || 0;
  const bedrooms = document.getElementById('bedrooms').value;
  const garage = document.getElementById('garage').value;
  const sort = document.getElementById('sort').value;

  let filtered = data.filter((house) => {
    const matchesSearch = house.name.toLowerCase().includes(search) || house.location.toLowerCase().includes(search);
    const matchesStatus = status ? house.status === status : true;
    const matchesArea = house.area >= minArea;
    const matchesBedrooms = bedrooms ? house.bedrooms >= Number(bedrooms) : true;
    const matchesGarage = garage ? String(house.garage) === garage : true;
    return matchesSearch && matchesStatus && matchesArea && matchesBedrooms && matchesGarage;
  });

  filtered = filtered.sort((a, b) => {
    if (sort === 'name') return a.name.localeCompare(b.name);
    if (sort === 'area') return b.area - a.area;
    if (sort === 'bedrooms') return b.bedrooms - a.bedrooms;
    return 0;
  });

  return filtered;
}

async function init() {
  const houses = await fetchHouses();
  const grid = document.getElementById('grid');
  const empty = document.getElementById('empty');

  const render = () => {
    const items = applyFilters(houses);
    grid.innerHTML = '';

    if (!items.length) {
      empty.hidden = false;
      return;
    }

    empty.hidden = true;
    items.forEach((house) => grid.appendChild(createCard(house)));
  };

  document.querySelectorAll('#search, #status, #minArea, #bedrooms, #garage, #sort').forEach((el) => {
    el.addEventListener('input', render);
    el.addEventListener('change', render);
  });

  render();
}

document.addEventListener('DOMContentLoaded', init);
