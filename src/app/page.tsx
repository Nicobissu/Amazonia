import type { Metadata } from 'next';
import housesData from '@/data/houses.json';
import CatalogClient from './CatalogClient';

export const metadata: Metadata = {
  title: 'Catálogo de casas | Amazonia',
  description: 'Casas en seco listas para habitar: rápidas, eficientes y personalizables.'
};

export default function HomePage() {
  return (
    <div className="container space-y-10">
      <section className="grid gap-6 rounded-3xl bg-gradient-to-r from-emerald-50 to-white p-6 md:grid-cols-2 md:p-10">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Casas industriales</p>
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Casas en seco: rápidas, eficientes y a medida</h1>
          <p className="text-lg text-slate-700">
            Elegí tu próxima vivienda con sistemas de construcción en seco, previsibles y listos en meses. Diseñamos y
            fabricamos en planta para luego montar en obra con mínimo impacto.
          </p>
          <a className="btn-primary" href="#catalogo">
            Ver catálogo
          </a>
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-emerald-900/90 px-6 py-8 text-white shadow-lg">
          <p className="text-sm uppercase tracking-wide text-emerald-200">Steel frame</p>
          <h2 className="mt-2 text-2xl font-semibold">Obras limpias y predecibles</h2>
          <p className="mt-3 text-emerald-50">
            Montamos en seco, con paneles aislados y carpinterías DVH que garantizan confort térmico. Menos desperdicio, más
            rapidez.
          </p>
          <ul className="mt-4 space-y-2 text-emerald-50">
            <li>• Tiempos de obra entre 4 y 7 meses</li>
            <li>• Equipos especializados</li>
            <li>• Proceso controlado en fábrica</li>
          </ul>
        </div>
      </section>

      <section id="catalogo" className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Portafolio</p>
            <h2 className="text-2xl font-semibold text-slate-900">Casas disponibles</h2>
          </div>
        </div>
        <CatalogClient houses={housesData} />
      </section>
    </div>
  );
}
