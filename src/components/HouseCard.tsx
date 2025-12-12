import Link from 'next/link';
import Image from 'next/image';
import { House } from '@/types/house';

interface Props {
  house: House;
}

const statusColors: Record<House['estado'], string> = {
  Disponible: 'bg-emerald-100 text-emerald-800',
  'En obra': 'bg-amber-100 text-amber-800',
  Vendido: 'bg-slate-200 text-slate-700'
};

export default function HouseCard({ house }: Props) {
  const { slug, nombre, imagenes, m2, habitaciones, ambientes, estado, ubicacionAprox } = house;

  return (
    <Link href={`/casas/${slug}`} className="card flex flex-col overflow-hidden hover:-translate-y-1 transition transform">
      <div className="relative h-56 w-full">
        <Image
          src={imagenes[0] ?? '/placeholder.jpg'}
          alt={nombre}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${statusColors[estado]}`}>
          {estado}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{nombre}</h3>
            <p className="text-sm text-slate-600">{ubicacionAprox}</p>
          </div>
          <p className="rounded-lg bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">{m2} m²</p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-slate-600">
          <span className="rounded-full bg-slate-100 px-3 py-1">{habitaciones} hab.</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">{ambientes} amb.</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">{house.banos} baños</span>
        </div>
      </div>
    </Link>
  );
}
