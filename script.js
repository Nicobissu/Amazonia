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
    ctaWhatsappLink: 'https://wa.me/5491112345678?text=Hola%20quisiera%20saber%20m%C3%A1s%20sobre%20Casa%20Sur',
    pdfFicha: null
  }
];

const statusOrder = { Disponible: 0, 'En obra': 1, Vendido: 2 };
const sortedHouses = [...houses].sort((a, b) => statusOrder[a.estado] - statusOrder[b.estado]);

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

renderFacts();
renderAccordion();
