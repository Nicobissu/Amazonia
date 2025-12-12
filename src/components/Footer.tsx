import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-8">
      <div className="container grid gap-4 md:grid-cols-3 md:items-center">
        <div>
          <p className="text-lg font-semibold text-brand-primary">Amazonia Viviendas</p>
          <p className="text-sm text-slate-600">Casas en seco diseñadas a medida.</p>
        </div>
        <div className="text-sm text-slate-600 space-y-1">
          <p>WhatsApp: <Link className="text-brand-primary" href="https://wa.me/5491112345678">+54 9 11 1234-5678</Link></p>
          <p>Mail: <a className="text-brand-primary" href="mailto:info@amazonia.com">info@amazonia.com</a></p>
          <p>Instagram: <Link className="text-brand-primary" href="https://instagram.com">@amazonia.casasen.seco</Link></p>
        </div>
        <div className="text-sm text-slate-500 md:text-right">
          <p>© {new Date().getFullYear()} Amazonia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
