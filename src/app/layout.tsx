import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Amazonia | Casas en seco',
  description: 'Catálogo de casas en seco: rápidas, eficientes y a medida.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-6 md:py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
