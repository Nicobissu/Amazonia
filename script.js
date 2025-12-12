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
    descripcion:
      'Luz protagonista, ventanal corrido hacia el jardín y galería lista para asados. Ideal para quienes quieren sentir la naturaleza sin salir del living.',
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
    descripcion:
      'Espacios sociales amplios en planta baja y cocina integrada para recibir. Perfecta para familias que buscan convivir y disfrutar de un lote generoso.',
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
    descripcion:
      'Doble altura, terrazas y visuales abiertas para lotes con vistas. Para quienes quieren que cada espacio conecte con el paisaje.',
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
    descripcion:
      'Compacta, eficiente y con circulación clara. Ideal para lotes urbanos o primeras viviendas que priorizan practicidad y confort.',
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
    descripcion:
      'Línea minimalista y patio central que actúa como pulmón de luz. Para quienes buscan un refugio contemporáneo con circulación perimetral.',
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
    descripcion:
      'Volúmenes escalonados, decks y revestimientos nobles. Pensada para climas fríos y para quienes priorizan abrigo y texturas cálidas.',
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
    descripcion:
      'Tipología en L, galería corrida y visual hacia el patio interno. Perfecta si querés separar el ala social del área privada.',
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
    descripcion:
      'Dúplex compacto y luminoso, con planta baja libre y dormitorios arriba. Ideal para primeras viviendas que buscan crecer sin perder confort.',
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
      (model, index) => `
        <article class="model-card" data-model-index="${index}">
          <header class="model-card__header">
            <div>
              <h3 class="model-card__title">${model.nombre}</h3>
              <p class="model-card__meta">${model.ambientes} · ${model.banos} baños</p>
            </div>
            <p class="badge">${model.m2} m² · ${model.cochera}</p>
          </header>
          <div class="model-card__body">
            <div class="model-card__media">
              <div class="media-gallery" data-gallery="${index}">
                <div class="media-gallery__slider">
                  ${model.renders
                    .map(
                      (img, imgIndex) => `
                        <div class="media-gallery__slide" data-slide="${imgIndex}">
                          <img src="${img}" alt="Render de ${model.nombre}" loading="lazy" />
                        </div>
                      `
                    )
                    .join('')}
                </div>
                <div class="media-gallery__controls">
                  <button class="gallery-btn" data-direction="prev" aria-label="Imagen anterior">‹</button>
                  <span class="gallery-counter">1/${model.renders.length}</span>
                  <button class="gallery-btn" data-direction="next" aria-label="Imagen siguiente">›</button>
                </div>
              </div>
            </div>
            <div class="model-card__summary">
              <p class="model-description">${model.descripcion}</p>
              <dl class="data-list">
                <div><dt>Superficie</dt><dd>${model.m2} m²</dd></div>
                <div><dt>Ambientes</dt><dd>${model.ambientes}</dd></div>
                <div><dt>Baños</dt><dd>${model.banos}</dd></div>
                <div><dt>Cocheras</dt><dd>${model.cochera}</dd></div>
              </dl>
            </div>
            <div class="asset-rail">
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

function bindGalleries() {
  document.querySelectorAll('.media-gallery').forEach((gallery) => {
    const slider = gallery.querySelector('.media-gallery__slider');
    const slides = slider.children.length;
    const counter = gallery.querySelector('.gallery-counter');
    let current = 0;

    function updateSlider() {
      slider.style.transform = `translateX(-${current * 100}%)`;
      counter.textContent = `${current + 1}/${slides}`;
    }

    gallery.querySelectorAll('.gallery-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const direction = btn.dataset.direction;
        if (direction === 'next') {
          current = (current + 1) % slides;
        } else {
          current = (current - 1 + slides) % slides;
        }
        updateSlider();
      });
    });
  });
}

renderFeatures();
renderModels();
bindGalleries();
