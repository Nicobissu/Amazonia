'use client';

import { useEffect, useState } from 'react';
import FiltersBar from '@/components/FiltersBar';
import HouseCard from '@/components/HouseCard';
import type { House } from '@/types/house';

export default function CatalogClient({ houses }: { houses: House[] }) {
  const [filtered, setFiltered] = useState<House[]>(houses);

  useEffect(() => setFiltered(houses), [houses]);

  return (
    <>
      <FiltersBar houses={houses} onChange={setFiltered} />
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full rounded-xl border border-dashed border-slate-200 bg-white p-6 text-center text-slate-600">
            No encontramos resultados con los filtros seleccionados.
          </div>
        )}
      </div>
    </>
  );
}
