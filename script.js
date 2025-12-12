const houses = [
  {
    id: 1,
    nombre: 'Casa Andes',
    descripcionCorta: 'Diseño contemporáneo con gran ventanal al jardín.',
    m2: 120,
    habitaciones: 3,
    ambientes: 5,
    banos: 2,
    cochera: true,
    ubicacionAprox: 'Chacras de Coria, Mendoza',
    estado: 'Disponible',
    sistemaConstructivo: 'Steel Frame / Construcción en seco',
    tiempoEstimadoObra: '5-6 meses',
    features: ['Galería con parrilla', 'Aislación térmica superior', 'Aberturas DVH', 'Listo para paneles solares'],
    imagenes: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616594039964-c2c5b4c8e188?auto=format&fit=crop&w=1200&q=80'
    ],
    ctaWhatsappLink: 'https://wa.me/5491112345678?text=Hola%20quisiera%20saber%20m%C3%A1s%20sobre%20Casa%20Andes',
    pdfFicha: null
  },
  {
    id: 2,
    nombre: 'Casa Pampa',
    descripcionCorta: 'Planta baja integrada pensada para lotes amplios.',
    m2: 98,
    habitaciones: 3,
    ambientes: 4,
    banos: 2,
    cochera: false,
    ubicacionAprox: 'San Antonio de Areco, Buenos Aires',
    estado: 'En obra',
    sistemaConstructivo: 'Steel Frame / Construcción en seco',
    tiempoEstimadoObra: '4-5 meses',
    features: ['Cocina con isla', 'Galería techada', 'Muros con aislación acústica', 'Listo para climatización central'],
    imagenes: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80'
    ],
    ctaWhatsappLink: 'https://wa.me/5491112345678?text=Hola%20quisiera%20saber%20m%C3%A1s%20sobre%20Casa%20Pampa',
    pdfFicha: null
  },
  {
    id: 3,
    nombre: 'Casa Península',
    descripcionCorta: 'Doble altura y terrazas para vistas abiertas.',
    m2: 160,
    habitaciones: 4,
    ambientes: 6,
    banos: 3,
    cochera: true,
    ubicacionAprox: 'Bariloche, Río Negro',
    estado: 'Disponible',
    sistemaConstructivo: 'Steel Frame / Construcción en seco',
    tiempoEstimadoObra: '6-7 meses',
    features: ['Terraza panorámica', 'Sala de estar en doble altura', 'Línea gourmet', 'Terminaciones premium'],
    imagenes: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80'
    ],
    ctaWhatsappLink: 'https://wa.me/5491112345678?text=Hola%20quisiera%20saber%20m%C3%A1s%20sobre%20Casa%20Península',
    pdfFicha: null
  },
  {
    id: 4,
    nombre: 'Casa Litoral',
    descripcionCorta: 'Compacta y funcional para lotes urbanos.',
    m2: 78,
    habitaciones: 2,
    ambientes: 3,
    banos: 2,
    cochera: false,
    ubicacionAprox: 'Rosario, Santa Fe',
    estado: 'En obra',
    sistemaConstructivo: 'Steel Frame / Construcción en seco',
    tiempoEstimadoObra: '4 meses',
    features: ['Ventilación cruzada', 'Patio seco', 'Frentes ventilados', 'Aislacin acústica'],
    imagenes: [
      'https://images.unsplash.com/photo-1464029902023-f42eba355bde?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80'
    ],
    ctaWhatsappLink: 'https://wa.me/5491112345678?text=Hola%20quisiera%20saber%20m%C3%A1s%20sobre%20Casa%20Litoral',
    pdfFicha: null
  },
  {
    id: 5,
    nombre: 'Casa Norte',
    descripcionCorta: 'Línea minimalista con patio central.',
    m2: 140,
    habitaciones: 3,
    ambientes: 5,
    banos: 3,
    cochera: true,
    ubicacionAprox: 'Yerba Buena, Tucumán',
    estado: 'Disponible',
    sistemaConstructivo: 'Steel Frame / Construcción en seco',
    tiempoEstimadoObra: '5-6 meses',
    features: ['Patio central verde', 'Aberturas de piso a techo', 'Pre-instalación solar', 'Climatización eficiente'],
    imagenes: [
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=1200&q=80'
    ],
    ctaWhatsappLink: 'https://wa.me/5491112345678?text=Hola%20quisiera%20saber%20m%C3%A1s%20sobre%20Casa%20Norte',
    pdfFicha: null
  },
  {
    id: 6,
    nombre: 'Casa Patagonia',
    descripcionCorta: 'Volúmenes escalonados y revestimientos nobles.',
    m2: 132,
    habitaciones: 3,
    ambientes: 5,
    banos: 3,
    cochera: true,
    ubicacionAprox: 'San Martín de los Andes, Neuquén',
    estado: 'En obra',
    sistemaConstructivo: 'Steel Frame / Construcción en seco',
    tiempoEstimadoObra: '5 meses',
    features: ['Revestimientos símil madera', 'Hogar a leña', 'Grandes aleros', 'Doble vidriado hermético'],
    imagenes: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80'
    ],
    ctaWhatsappLink: 'https://wa.me/5491112345678?text=Hola%20quisiera%20saber%20m%C3%A1s%20sobre%20Casa%20Patagonia',
    pdfFicha: null
  },
  {
    id: 7,
    nombre: 'Casa Río',
    descripcionCorta: 'Tipología en L con galería corrida.',
    m2: 110,
    habitaciones: 3,
    ambientes: 4,
    banos: 2,
    cochera: true,
    ubicacionAprox: 'Colonia Caroya, Córdoba',
    estado: 'Disponible',
    sistemaConstructivo: 'Steel Frame / Construcción en seco',
    tiempoEstimadoObra: '4-5 meses',
    features: ['Galería corrida', 'Suite principal con vestidor', 'Lavadero independiente', 'Preinstalación para domótica'],
    imagenes: [
      'https://images.unsplash.com/photo-1484156818044-c040038b0710?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80'
    ],
    ctaWhatsappLink: 'https://wa.me/5491112345678?text=Hola%20quisiera%20saber%20m%C3%A1s%20sobre%20Casa%20R%C3%ADo',
    pdfFicha: null
  },
  {
    id: 8,
    nombre: 'Casa Sur',
    descripcionCorta: 'Dúplex compacto para primeras viviendas.',
    m2: 86,
    habitaciones: 2,
    ambientes: 3,
    banos: 2,
    cochera: false,
    ubicacionAprox: 'Mar del Plata, Buenos Aires',
    estado: 'Vendido',
    sistemaConstructivo: 'Steel Frame / Construcción en seco',
    tiempoEstimadoObra: '3-4 meses',
    features: ['Doble altura en estar', 'Instalaciones listas para aire central', 'Terminaciones rápidas', 'Bajos costos de mantenimiento'],
    imagenes: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484156818044-c040038b0710?auto=format&fit=crop&w=1200&q=80'
    ],
    ctaWhatsappLink: 'https://wa.me/5491112345678?text=Hola%20quisiera%20saber%20m%C3%A1s%20sobre%20Casa%20Sur',
    pdfFicha: null
  }
];

const statusOrder = { Disponible: 0, 'En obra': 1, Vendido: 2 };
const sortedHouses = [...houses].sort((a, b) => statusOrder[a.estado] - statusOrder[b.estado]);

const showcaseElements = {
  image: document.getElementById('showcase-image'),
  title: document.getElementById('showcase-title'),
  subtitle: document.getElementById('showcase-subtitle'),
  description: document.getElementById('showcase-description'),
  data: document.getElementById('showcase-data'),
  status: document.getElementById('showcase-status'),
  selector: document.getElementById('showcase-selector'),
  progress: document.getElementById('showcase-progress'),
  prev: document.getElementById('showcase-prev'),
  next: document.getElementById('showcase-next')
};

const showcaseState = { index: 0, intervalId: null };

function renderShowcaseData(house) {
  const stats = [
    { label: 'Superficie', value: `${house.m2} m²` },
    { label: 'Dormitorios', value: `${house.habitaciones}` },
    { label: 'Baños', value: `${house.banos}` },
    { label: 'Ubicación', value: house.ubicacionAprox },
    { label: 'Sistema', value: house.sistemaConstructivo },
    { label: 'Tiempo estimado', value: house.tiempoEstimadoObra }
  ];

  showcaseElements.data.innerHTML = stats
    .map(
      (stat) => `
        <div>
          <dt>${stat.label}</dt>
          <dd>${stat.value}</dd>
        </div>
      `
    )
    .join('');
}

function renderShowcaseCard(index) {
  showcaseState.index = (index + sortedHouses.length) % sortedHouses.length;
  const house = sortedHouses[showcaseState.index];
  const badgeClass = `badge badge--${house.estado.replace(' ', '').toLowerCase()}`;

  showcaseElements.image.src = house.imagenes[0];
  showcaseElements.image.alt = `Vista principal de ${house.nombre}`;
  showcaseElements.title.textContent = house.nombre;
  showcaseElements.subtitle.textContent = `${house.m2} m² · ${house.habitaciones} dorm · ${house.estado}`;
  showcaseElements.description.textContent = house.descripcionCorta;
  showcaseElements.status.className = `showcase__badge ${badgeClass}`;
  showcaseElements.status.textContent = house.estado;
  showcaseElements.progress.textContent = `${showcaseState.index + 1}/${sortedHouses.length}`;

  renderShowcaseData(house);

  document.querySelectorAll('.showcase__chip').forEach((chip, chipIndex) => {
    chip.classList.toggle('showcase__chip--active', chipIndex === showcaseState.index);
  });
}

function createShowcaseSelector() {
  showcaseElements.selector.innerHTML = sortedHouses
    .map(
      (house, index) => `
        <button class="showcase__chip" data-index="${index}">
          <strong>${house.nombre}</strong>
          <span>${house.m2} m² · ${house.estado}</span>
        </button>
      `
    )
    .join('');

  showcaseElements.selector.addEventListener('click', (event) => {
    const chip = event.target.closest('.showcase__chip');
    if (!chip) return;
    const newIndex = Number(chip.dataset.index);
    renderShowcaseCard(newIndex);
    restartShowcaseInterval();
  });
}

function restartShowcaseInterval() {
  if (showcaseState.intervalId) clearInterval(showcaseState.intervalId);
  showcaseState.intervalId = setInterval(() => renderShowcaseCard(showcaseState.index + 1), 6500);
}

function initShowcase() {
  createShowcaseSelector();
  renderShowcaseCard(0);
  restartShowcaseInterval();

  showcaseElements.prev.addEventListener('click', () => {
    renderShowcaseCard(showcaseState.index - 1);
    restartShowcaseInterval();
  });

  showcaseElements.next.addEventListener('click', () => {
    renderShowcaseCard(showcaseState.index + 1);
    restartShowcaseInterval();
  });
}

function renderFacts() {
  const facts = document.getElementById('facts');
  const totals = sortedHouses.reduce(
    (acc, house) => {
      acc.totalArea += house.m2;
      acc.states[house.estado] = (acc.states[house.estado] || 0) + 1;
      return acc;
    },
    { totalArea: 0, states: {} }
  );

  const averageArea = Math.round(totals.totalArea / sortedHouses.length);
  const items = [
    { label: 'Casas activas', value: sortedHouses.length, hint: 'Portafolio compacto y curado.' },
    { label: 'Disponibles', value: totals.states['Disponible'] || 0, hint: 'Listas para coordinar visita.' },
    { label: 'Promedio m²', value: `${averageArea} m²`, hint: 'Escala habitual del catálogo.' },
    { label: 'En obra', value: totals.states['En obra'] || 0, hint: 'Casos de referencia recientes.' }
  ];

  facts.innerHTML = items
    .map(
      (item) => `
        <div class="fact">
          <p class="fact__label">${item.label}</p>
          <p class="fact__value">${item.value}</p>
          <p class="fact__hint">${item.hint}</p>
        </div>
      `
    )
    .join('');
}

function renderAccordion() {
  const accordion = document.getElementById('accordion');
  accordion.innerHTML = sortedHouses
    .map((house, index) => {
      const badgeClass = `badge badge--${house.estado.replace(' ', '').toLowerCase()}`;
      const features = house.features.slice(0, 4).map((feature) => `<li>${feature}</li>`).join('');
      const download = house.pdfFicha
        ? `<a class="link" href="${house.pdfFicha}" download>Descargar ficha PDF</a>`
        : '<span class="link" aria-disabled="true">Ficha PDF no incluida</span>';

      return `
        <details class="accordion__item" ${index === 0 ? 'open' : ''}>
          <summary class="accordion__summary">
            <div>
              <p class="accordion__title">${house.nombre}</p>
              <p class="accordion__subtitle">${house.m2} m² · ${house.habitaciones} dorm · ${house.estado}</p>
            </div>
            <span class="${badgeClass}">${house.estado}</span>
          </summary>
          <div class="accordion__body">
            <p class="accordion__text">${house.descripcionCorta}</p>
            <div class="accordion__grid">
              <div class="list-block">
                <p class="list-block__title">Ficha corta</p>
                <dl class="data-list">
                  <div><dt>Superficie</dt><dd>${house.m2} m²</dd></div>
                  <div><dt>Dormitorios</dt><dd>${house.habitaciones}</dd></div>
                  <div><dt>Ambientes</dt><dd>${house.ambientes}</dd></div>
                  <div><dt>Baños</dt><dd>${house.banos}</dd></div>
                  <div><dt>Ubicación aprox.</dt><dd>${house.ubicacionAprox}</dd></div>
                  <div><dt>Sistema</dt><dd>${house.sistemaConstructivo}</dd></div>
                  <div><dt>Tiempo estimado</dt><dd>${house.tiempoEstimadoObra}</dd></div>
                  <div><dt>Cochera</dt><dd>${house.cochera ? 'Sí' : 'No'}</dd></div>
                </dl>
              </div>
              <div class="list-block">
                <p class="list-block__title">Lo que destaca</p>
                <ul class="bullet-list">${features}</ul>
                <div class="link-stack">
                  <a class="link" href="${house.ctaWhatsappLink}" target="_blank" rel="noreferrer">Coordinar por WhatsApp</a>
                  ${download}
                </div>
              </div>
            </div>
          </div>
        </details>
      `;
    })
    .join('');
}

initShowcase();
renderFacts();
renderAccordion();
