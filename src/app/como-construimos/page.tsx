import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cómo construimos | Amazonia',
  description: 'Proceso en steel frame: diseño, ingeniería, fabricación y montaje.'
};

const steps = [
  { title: 'Diseño', description: 'Definimos programa, materiales y terminaciones según el terreno y las necesidades.' },
  {
    title: 'Ingeniería',
    description: 'Modelamos estructuras y envolvente para asegurar eficiencia térmica y acústica.'
  },
  { title: 'Fabricación', description: 'Prefabricamos paneles y módulos en planta para minimizar desvíos en obra.' },
  { title: 'Montaje', description: 'Equipo propio instala y termina la vivienda en semanas, con control de calidad.' }
];

export default function ComoConstruimosPage() {
  return (
    <div className="container space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Steel frame</p>
        <h1 className="text-3xl font-bold text-slate-900">Cómo construimos</h1>
        <p className="text-lg text-slate-700">
          Trabajamos con sistemas industrializados en seco. Ganamos velocidad, previsibilidad y confort térmico con mínimo
          desperdicio y obra limpia.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="card p-6 space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Beneficios</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• Rapidez: obra terminada entre 4 y 7 meses.</li>
            <li>• Eficiencia térmica: envolvente aislada y carpinterías DVH.</li>
            <li>• Obra limpia: menos humedad y desperdicio.</li>
            <li>• Previsibilidad: producción en planta y montaje planificado.</li>
          </ul>
        </div>
        <div className="card p-6 space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">Proceso en 4 pasos</h2>
          <ol className="space-y-3 text-slate-700">
            {steps.map((step) => (
              <li key={step.title} className="rounded-xl bg-slate-50 p-3">
                <p className="text-sm font-semibold text-slate-900">{step.title}</p>
                <p className="text-sm">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="flex flex-col gap-3 rounded-2xl bg-emerald-900 px-6 py-8 text-white md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold">¿Querés ver las tipologías?</h3>
          <p className="text-emerald-100">Mirá el catálogo y elegí la que mejor se adapte a tu terreno.</p>
        </div>
        <Link href="/" className="btn-primary bg-white text-brand-primary hover:bg-slate-100">
          Ir al catálogo
        </Link>
      </div>
    </div>
  );
}
