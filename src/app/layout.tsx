import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Amazonia | Documento interactivo',
  description: 'Resumen interactivo del portafolio de viviendas industrializadas.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <main className="layout">{children}</main>
      </body>
    </html>
  );
}
