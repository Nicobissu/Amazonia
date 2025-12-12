import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto | Amazonia',
  description: 'Contactate por WhatsApp, mail o dejá tu consulta para visitar las casas.'
};

export default function ContactoPage() {
  return (
    <div className="container space-y-8">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Contacto</p>
        <h1 className="text-3xl font-bold text-slate-900">Hablemos de tu próxima casa</h1>
        <p className="text-slate-700">Completá el formulario o escribinos directo por WhatsApp.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <ContactForm />
        <div className="card p-5 space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Datos de contacto</h2>
          <p className="text-slate-700">Respondemos de lunes a viernes de 9 a 18 h.</p>
          <div className="space-y-2 text-slate-700">
            <p>WhatsApp: <Link className="text-brand-primary" href="https://wa.me/5491112345678">+54 9 11 1234-5678</Link></p>
            <p>Mail: <a className="text-brand-primary" href="mailto:info@amazonia.com">info@amazonia.com</a></p>
            <p>Oficinas: Zona Norte, Buenos Aires (visitas con cita previa)</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-sm text-emerald-800">
            Coordinamos visitas a obras y viviendas terminadas. Contanos dónde querés construir y te asesoramos en la mejor
            tipología para tu terreno.
          </div>
        </div>
      </div>
    </div>
  );
}
