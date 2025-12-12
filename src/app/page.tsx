import type { Metadata } from 'next';
import type { House } from '@/types/house';
import houses from '@/data/houses.json';

const typedHouses = houses as House[];

const statusOrder: Record<House['estado'], number> = {
  Disponible: 0,
  'En obra': 1,
  Vendido: 2
};

const sortedHouses = [...typedHouses].sort((a, b) => statusOrder[a.estado] - statusOrder[b.estado]);

const portfolioStats = sortedHouses.reduce(
  (acc, house) => {
    acc.totalArea += house.m2;
    acc.states[house.estado] = (acc.states[house.estado] ?? 0) + 1;
    return acc;
  },
  { totalArea: 0, states: {} as Record<House['estado'], number> }
);

export const metadata: Metadata = {
  title: 'Documento interactivo | Amazonia',
  description: 'Resumen legible y accionable sobre el portafolio de viviendas en seco.'
};

export default function HomePage() {
  const averageArea = Math.round(portfolioStats.totalArea / sortedHouses.length);

  return (
    <article className="document">
      <header className="document__header">
        <p className="document__eyebrow">Amazonia · Viviendas industrializadas</p>
        <h1>Documento interactivo del portafolio</h1>
        <p className="document__lead">
          Esta versión está pensada como un documento navegable: es liviano, prioriza la lectura y mantiene a mano los datos clave
          para decidir la próxima obra en seco.
        </p>
      </header>

      <section className="panel">
        <h2>Resumen rápido</h2>
        <div className="facts">
          <div className="fact">
            <p className="fact__label">Casas activas</p>
            <p className="fact__value">{sortedHouses.length}</p>
            <p className="fact__hint">Portafolio compacto y curado.</p>
          </div>
          <div className="fact">
            <p className="fact__label">Disponibles</p>
            <p className="fact__value">{portfolioStats.states['Disponible'] ?? 0}</p>
            <p className="fact__hint">Listas para coordinar visita.</p>
          </div>
          <div className="fact">
            <p className="fact__label">Promedio m²</p>
            <p className="fact__value">{averageArea} m²</p>
            <p className="fact__hint">Escala habitual del catálogo.</p>
          </div>
          <div className="fact">
            <p className="fact__label">En obra</p>
            <p className="fact__value">{portfolioStats.states['En obra'] ?? 0}</p>
            <p className="fact__hint">Casos de referencia recientes.</p>
          </div>
        </div>
      </section>

      <section className="panel">
        <h2>Viviendas (expandí cada ficha)</h2>
        <p className="document__hint">
          Cada bloque resume lo esencial. Abrí la ficha que necesites: incluye descripción corta, métrica rápida y links para
          pedir más información.
        </p>

        <div className="accordion">
          {sortedHouses.map((house, index) => (
            <details key={house.id} className="accordion__item" open={index === 0}>
              <summary className="accordion__summary">
                <div>
                  <p className="accordion__title">{house.nombre}</p>
                  <p className="accordion__subtitle">
                    {house.m2} m² · {house.habitaciones} dorm · {house.estado}
                  </p>
                </div>
                <span className={`badge badge--${house.estado.replace(' ', '').toLowerCase()}`}>{house.estado}</span>
              </summary>

              <div className="accordion__body">
                <p className="accordion__text">{house.descripcionCorta}</p>

                <div className="accordion__grid">
                  <div className="list-block">
                    <p className="list-block__title">Ficha corta</p>
                    <dl className="data-list">
                      <div>
                        <dt>Superficie</dt>
                        <dd>{house.m2} m²</dd>
                      </div>
                      <div>
                        <dt>Dormitorios</dt>
                        <dd>{house.habitaciones}</dd>
                      </div>
                      <div>
                        <dt>Ambientes</dt>
                        <dd>{house.ambientes}</dd>
                      </div>
                      <div>
                        <dt>Baños</dt>
                        <dd>{house.banos}</dd>
                      </div>
                      <div>
                        <dt>Ubicación aprox.</dt>
                        <dd>{house.ubicacionAprox}</dd>
                      </div>
                      <div>
                        <dt>Sistema</dt>
                        <dd>{house.sistemaConstructivo}</dd>
                      </div>
                      <div>
                        <dt>Tiempo estimado</dt>
                        <dd>{house.tiempoEstimadoObra}</dd>
                      </div>
                      <div>
                        <dt>Cochera</dt>
                        <dd>{house.cochera ? 'Sí' : 'No'}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="list-block">
                    <p className="list-block__title">Lo que destaca</p>
                    <ul className="bullet-list">
                      {house.features.slice(0, 4).map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <div className="link-stack">
                      <a className="link" href={house.ctaWhatsappLink} target="_blank" rel="noreferrer">
                        Coordinar por WhatsApp
                      </a>
                      {house.pdfFicha && (
                        <a className="link" href={house.pdfFicha} download>
                          Descargar ficha PDF
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2>Notas de proceso</h2>
        <ul className="bullet-list">
          <li>Diseño y documentación completa antes de arrancar obra para evitar desvíos en cronograma.</li>
          <li>Steel frame, panelería aislada y carpinterías DVH como base de confort térmico.</li>
          <li>Montaje limpio en sitio: equipos propios y visitas programadas para seguimiento.</li>
          <li>Entrega con terminaciones en seco y supervisión final junto al cliente.</li>
        </ul>
      </section>
    </article>
  );
}
