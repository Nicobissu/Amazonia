import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import houses from '@/data/houses.json';
import Breadcrumb from '@/components/Breadcrumb';
import Gallery from '@/components/Gallery';
import HouseCard from '@/components/HouseCard';
import { House } from '@/types/house';

interface Props {
  params: { slug: string };
}

const statusColor: Record<House['estado'], string> = {
  Disponible: 'bg-emerald-100 text-emerald-800',
  'En obra': 'bg-amber-100 text-amber-800',
  Vendido: 'bg-slate-200 text-slate-700'
};

export function generateStaticParams() {
  return houses.map((house) => ({ slug: house.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const house = houses.find((item) => item.slug === params.slug);
  if (!house) {
    return { title: 'Casa no encontrada | Amazonia', description: 'La casa solicitada no está disponible.' };
  }

  return {
    title: `${house.nombre} | Amazonia`,
    description: house.descripcionCorta
  };
}

export default function HouseDetailPage({ params }: Props) {
  const house = houses.find((item) => item.slug === params.slug);
  if (!house) return notFound();

  const suggested = houses.filter((item) => item.slug !== house.slug).slice(0, 3);

  return (
    <div className="container space-y-8">
      <Breadcrumb
        items={[
          { label: 'Inicio', href: '/' },
          { label: 'Casas', href: '/' },
          { label: house.nombre }
        ]}
      />

      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-900">{house.nombre}</h1>
          <p className="text-slate-600">{house.ubicacionAprox}</p>
        </div>
        <span className={`badge ${statusColor[house.estado]}`}>{house.estado}</span>
      </header>

      <Gallery images={house.imagenes} alt={house.nombre} />

      <section className="grid gap-6 md:grid-cols-3">
        <div className="card p-5 md:col-span-2">
          <h2 className="section-title">Descripción</h2>
          <p className="text-slate-700 leading-relaxed">{house.descripcionLarga}</p>

          <div className="mt-6 space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">Características</h3>
            <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {house.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 space-y-2">
            <h3 className="text-lg font-semibold text-slate-900">Sistema constructivo</h3>
            <p className="text-slate-700">
              Construimos con steel frame, paneles aislados y terminaciones en seco para lograr obras rápidas, limpias y con
              alta eficiencia térmica. Planificamos en fábrica y montamos en sitio para garantizar calidad y previsibilidad.
            </p>
          </div>
        </div>

        <aside className="card flex flex-col gap-4 p-5">
          <h2 className="section-title">Ficha rápida</h2>
          <dl className="grid grid-cols-2 gap-3 text-sm text-slate-700">
            <div>
              <dt className="font-semibold text-slate-900">Metros totales</dt>
              <dd>{house.m2} m²</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Habitaciones</dt>
              <dd>{house.habitaciones}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Ambientes</dt>
              <dd>{house.ambientes}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Baños</dt>
              <dd>{house.banos}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Cochera</dt>
              <dd>{house.cochera ? 'Sí' : 'No'}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Ubicación aprox.</dt>
              <dd>{house.ubicacionAprox}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Tiempo de obra</dt>
              <dd>{house.tiempoEstimadoObra}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Sistema</dt>
              <dd>{house.sistemaConstructivo}</dd>
            </div>
          </dl>
          <div className="flex flex-col gap-2">
            <Link className="btn-primary" href={house.ctaWhatsappLink} target="_blank">
              Consultar por WhatsApp
            </Link>
            <a className="btn-secondary" href="mailto:info@amazonia.com?subject=Consulta%20visita%20">
              Solicitar visita / Asesoramiento
            </a>
            {house.pdfFicha && (
              <a className="btn-secondary" href={house.pdfFicha} download>
                Descargar ficha PDF
              </a>
            )}
          </div>
        </aside>
      </section>

      <section className="space-y-4">
        <h2 className="section-title">Otras casas</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {suggested.map((item) => (
            <HouseCard key={item.id} house={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
