const amzFeatures = [
  {
    title: 'Estructura AMZ',
    tag: 'Steel Frame',
    description: 'Perfiles galvanizados calibrados, paneles modulares y control de torsión para ajustes rápidos en sitio.'
  },
  {
    title: 'Capa térmica',
    tag: 'Aislación',
    description: 'Muros con espuma + lana mineral, placas cementicias y DVH para confort en climas variados.'
  },
  {
    title: 'Prefabricación',
    tag: 'Velocidad',
    description: 'Kit industrializado listo para montar: reduces desperdicio, tiempos y ruido en obra.'
  },
  {
    title: 'Terminaciones en seco',
    tag: 'Detalles',
    description: 'Placas interiores listas para pintar, cielorrasos técnicos y zócalos que aceleran entrega.'
  }
];

const models = [
  {
    nombre: 'Casa Andes',
    descripcion: 'Diseño contemporáneo con gran ventanal al jardín.',
    m2: 120,
    ambientes: '3 dormitorios · 5 ambientes',
    banos: 2,
    cochera: 'Cochera cubierta',
    renders: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616594039964-c2c5b4c8e188?auto=format&fit=crop&w=1200&q=80'
    ],
    planos: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    video: 'Recorrido virtual próximo a publicar'
  },
  {
    nombre: 'Casa Pampa',
    descripcion: 'Planta baja integrada pensada para lotes amplios.',
    m2: 98,
    ambientes: '3 dormitorios · 4 ambientes',
    banos: 2,
    cochera: 'Espacio para dos autos',
    renders: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80'
    ],
    planos: 'https://images.unsplash.com/photo-1484156818044-c040038b0710?auto=format&fit=crop&w=1200&q=80',
    video: 'Video de obra en edición'
  },
  {
    nombre: 'Casa Península',
    descripcion: 'Doble altura y terrazas para vistas abiertas.',
    m2: 160,
    ambientes: '4 dormitorios · 6 ambientes',
    banos: 3,
    cochera: 'Garage lateral',
    renders: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80'
    ],
    planos: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
    video: 'Tour en 3D programado'
  },
  {
    nombre: 'Casa Litoral',
    descripcion: 'Compacta y funcional para lotes urbanos.',
    m2: 78,
    ambientes: '2 dormitorios · 3 ambientes',
    banos: 2,
    cochera: 'Espacio descubierto',
    renders: [
      'https://images.unsplash.com/photo-1464029902023-f42eba355bde?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80'
    ],
    planos: 'https://images.unsplash.com/photo-1484156818044-c040038b0710?auto=format&fit=crop&w=1200&q=80',
    video: 'Video compacto en revisión'
  },
  {
    nombre: 'Casa Norte',
    descripcion: 'Línea minimalista con patio central.',
    m2: 140,
    ambientes: '3 dormitorios · 5 ambientes',
    banos: 3,
    cochera: 'Cochera doble',
    renders: [
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=1200&q=80'
    ],
    planos: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    video: 'Recorrido con cliente en producción'
  },
  {
    nombre: 'Casa Patagonia',
    descripcion: 'Volúmenes escalonados y revestimientos nobles.',
    m2: 132,
    ambientes: '3 dormitorios · 5 ambientes',
    banos: 3,
    cochera: 'Cochera semi-cubierta',
    renders: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80'
    ],
    planos: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80',
    video: 'Render animado listo para subir'
  },
  {
    nombre: 'Casa Río',
    descripcion: 'Tipología en L con galería corrida.',
    m2: 110,
    ambientes: '3 dormitorios · 4 ambientes',
    banos: 2,
    cochera: 'Cochera abierta',
    renders: [
      'https://images.unsplash.com/photo-1484156818044-c040038b0710?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80'
    ],
    planos: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
    video: 'Video de montaje próximo'
  },
  {
    nombre: 'Casa Sur',
    descripcion: 'Dúplex compacto para primeras viviendas.',
    m2: 86,
    ambientes: '2 dormitorios · 3 ambientes',
    banos: 2,
    cochera: 'Sin cochera',
    renders: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484156818044-c040038b0710?auto=format&fit=crop&w=1200&q=80'
    ],
    planos: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
    video: 'Video de entrega final en agenda'
  }
];

function renderFeatures() {
  const container = document.getElementById('amz-features');
  container.innerHTML = amzFeatures
    .map(
      (feature) => `
        <article class="feature-card">
          <span class="feature-card__tag">${feature.tag}</span>
          <h3>${feature.title}</h3>
          <p>${feature.description}</p>
        </article>
      `
    )
    .join('');
}

function renderModels() {
  const grid = document.getElementById('models-grid');
  grid.innerHTML = models
    .map(
      (model) => `
        <article class="model-card">
          <header class="model-card__header">
            <div>
              <p class="badge">${model.m2} m²</p>
              <h3 class="model-card__title">${model.nombre}</h3>
              <p class="model-card__meta">${model.ambientes} · ${model.banos} baños</p>
            </div>
            <p class="model-card__meta">${model.cochera}</p>
          </header>
          <div class="model-card__body">
            <div class="model-card__section">
              <h4>Descripción</h4>
              <p>${model.descripcion}</p>
              <dl class="data-list">
                <div><dt>Superficie</dt><dd>${model.m2} m²</dd></div>
                <div><dt>Ambientes</dt><dd>${model.ambientes}</dd></div>
                <div><dt>Baños</dt><dd>${model.banos}</dd></div>
                <div><dt>Cocheras</dt><dd>${model.cochera}</dd></div>
              </dl>
            </div>
            <div class="model-card__section">
              <h4>Renders</h4>
              <div class="render-grid">
                ${model.renders.map((img) => `<img src="${img}" alt="Render de ${model.nombre}" loading="lazy" />`).join('')}
              </div>
            </div>
            <div class="model-card__section">
              <h4>Planos y video</h4>
              <div class="assets">
                <div class="asset-card">
                  <strong>Planos</strong>
                  <img src="${model.planos}" alt="Plano de ${model.nombre}" loading="lazy" />
                </div>
                <div class="asset-card">
                  <strong>Video</strong>
                  <div class="video-chip">${model.video}</div>
                </div>
              </div>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

renderFeatures();
renderModels();
