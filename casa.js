async function fetchHouses() {
  const response = await fetch('data/houses.json');
  return response.json();
}

function getSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get('slug');
}

function renderGallery(images) {
  const main = document.createElement('img');
  main.src = images[0];
  main.alt = 'Imagen principal';
  main.className = 'main-img';

  const wrapper = document.createElement('div');
  wrapper.className = 'gallery';

  const thumbs = document.createElement('div');
  thumbs.className = 'thumbs';

  images.forEach((img, index) => {
    const thumb = document.createElement('img');
    thumb.src = img;
    thumb.alt = `Vista ${index + 1}`;
    thumb.addEventListener('click', () => {
      main.src = img;
    });
    thumbs.appendChild(thumb);
  });

  wrapper.appendChild(main);
  wrapper.appendChild(thumbs);
  return wrapper;
}

function quickFacts(house) {
  const list = [
    { label: 'Superficie', value: `${house.area} m²` },
    { label: 'Dormitorios', value: house.bedrooms },
    { label: 'Ambientes', value: house.rooms },
    { label: 'Baños', value: house.bathrooms },
    { label: 'Cochera', value: house.garage ? 'Sí' : 'No' },
    { label: 'Estado', value: house.status },
    { label: 'Ubicación', value: house.location }
  ];

  const grid = document.createElement('div');
  grid.className = 'quick-grid';
  list.forEach((item) => {
    const box = document.createElement('div');
    box.className = 'quick-item';
    box.innerHTML = `<small>${item.label}</small><div><strong>${item.value}</strong></div>`;
    grid.appendChild(box);
  });
  return grid;
}

function renderOtherHouses(houses, currentSlug) {
  const other = houses.filter((h) => h.slug !== currentSlug).slice(0, 3);
  if (!other.length) return '';

  const section = document.createElement('section');
  section.className = 'panel';
  section.innerHTML = '<h3>Otras casas</h3>';

  const grid = document.createElement('div');
  grid.className = 'other-grid';

  other.forEach((house) => {
    const card = document.createElement('a');
    card.className = 'card';
    card.href = `casa.html?slug=${encodeURIComponent(house.slug)}`;
    card.innerHTML = `
      <img src="${house.images[0]}" alt="${house.name}">
      <div class="card-body">
        <span class="tag">${house.status}</span>
        <h3>${house.name}</h3>
        <div class="meta"><span>📏 ${house.area} m²</span> <span>🛏️ ${house.bedrooms} dorm</span></div>
        <div class="badges"><span>${house.location}</span></div>
      </div>
    `;
    grid.appendChild(card);
  });

  section.appendChild(grid);
  return section;
}

function renderNotFound() {
  const container = document.getElementById('content');
  container.innerHTML = `
    <p class="breadcrumb"><a href="index.html">Volver al catálogo</a></p>
    <div class="panel">
      <h1>Casa no encontrada</h1>
      <p>No pudimos encontrar la vivienda solicitada. Probá volver al catálogo para explorar otras opciones.</p>
    </div>
  `;
}

async function init() {
  const slug = getSlug();
  const content = document.getElementById('content');
  const houses = await fetchHouses();
  const house = houses.find((h) => h.slug === slug);

  if (!house) {
    renderNotFound();
    return;
  }

  const whatsappText = encodeURIComponent(`Hola, me interesa la casa ${house.name} (${house.area} m²). ¿Podemos coordinar una visita?`);
  const otherSection = renderOtherHouses(houses, house.slug);

  content.innerHTML = '';
  content.appendChild(renderGallery(house.images));

  const detailHeader = document.createElement('div');
  detailHeader.className = 'detail-header';
  detailHeader.innerHTML = `
    <p class="breadcrumb"><a href="index.html">Catálogo</a> / ${house.name}</p>
    <h1>${house.name}</h1>
    <div class="meta"><span>📍 ${house.location}</span><span class="status-chip">${house.status}</span></div>
  `;
  content.insertBefore(detailHeader, content.firstChild);

  const infoGrid = document.createElement('div');
  infoGrid.className = 'info-grid';

  const left = document.createElement('section');
  left.className = 'panel';
  left.innerHTML = `
    <h3>Descripción</h3>
    <p>${house.description}</p>
    <div class="highlight quick-item">${house.highlight}</div>
    <h3>Características</h3>
  `;
  const featureList = document.createElement('ul');
  house.features.forEach((feat) => {
    const li = document.createElement('li');
    li.textContent = feat;
    featureList.appendChild(li);
  });
  left.appendChild(featureList);
  left.appendChild(document.createElement('hr'));
  const construction = document.createElement('p');
  construction.innerHTML = `<strong>Sistema constructivo:</strong> ${house.construction}`;
  left.appendChild(construction);

  const right = document.createElement('section');
  right.className = 'panel cta';
  right.innerHTML = '<h3>Ficha rápida</h3>';
  right.appendChild(quickFacts(house));
  const whatsapp = document.createElement('a');
  whatsapp.href = `https://wa.me/5491122334455?text=${whatsappText}`;
  whatsapp.target = '_blank';
  whatsapp.rel = 'noopener noreferrer';
  whatsapp.textContent = 'Consultar por WhatsApp';
  right.appendChild(whatsapp);

  infoGrid.appendChild(left);
  infoGrid.appendChild(right);

  content.appendChild(infoGrid);

  if (otherSection) {
    content.appendChild(otherSection);
  }
}

document.addEventListener('DOMContentLoaded', init);
