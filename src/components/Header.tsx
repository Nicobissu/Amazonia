import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Casas' },
  { href: '/como-construimos', label: 'Cómo construimos' },
  { href: '/contacto', label: 'Contacto' }
];

export default function Header() {
  return (
    <header className="border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-semibold text-brand-primary">
          Amazonia Viviendas
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-primary">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
