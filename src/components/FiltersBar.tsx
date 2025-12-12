'use client';

import { useMemo, useState } from 'react';
import { House, HouseStatus } from '@/types/house';

interface Filters {
  estado?: HouseStatus | 'Todos';
  minM2?: number;
  maxM2?: number;
  habitaciones?: number;
  cochera?: boolean | 'Todos';
  search?: string;
  sort?: 'recientes' | 'm2desc' | 'm2asc';
}

interface Props {
  houses: House[];
  onChange: (filtered: House[]) => void;
}

const habitacionesOptions = [1, 2, 3, 4];

export default function FiltersBar({ houses, onChange }: Props) {
  const [filters, setFilters] = useState<Filters>({ estado: 'Todos', cochera: 'Todos', sort: 'recientes' });

  const applyFilters = (nextFilters: Filters) => {
    const filtered = houses
      .filter((house) => {
        if (nextFilters.estado && nextFilters.estado !== 'Todos' && house.estado !== nextFilters.estado) return false;
        if (typeof nextFilters.cochera === 'boolean' && house.cochera !== nextFilters.cochera) return false;
        if (nextFilters.minM2 && house.m2 < nextFilters.minM2) return false;
        if (nextFilters.maxM2 && house.m2 > nextFilters.maxM2) return false;
        if (nextFilters.habitaciones && house.habitaciones < nextFilters.habitaciones) return false;
        if (nextFilters.search) {
          const term = nextFilters.search.toLowerCase();
          if (!house.nombre.toLowerCase().includes(term) && !house.ubicacionAprox.toLowerCase().includes(term)) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        switch (nextFilters.sort) {
          case 'm2desc':
            return b.m2 - a.m2;
          case 'm2asc':
            return a.m2 - b.m2;
          case 'recientes':
          default:
            return b.id - a.id;
        }
      });

    onChange(filtered);
  };

  useMemo(() => {
    applyFilters(filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const handleChange = (field: keyof Filters, value: Filters[keyof Filters]) => {
    const updated = { ...filters, [field]: value };
    setFilters(updated);
    applyFilters(updated);
  };

  return (
    <div className="card p-4 md:p-5 space-y-3">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
        <div className="col-span-2">
          <label className="text-xs font-semibold text-slate-600">Buscar</label>
          <input
            type="text"
            placeholder="Nombre o ubicación"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
            onChange={(e) => handleChange('search', e.target.value)}
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600">Estado</label>
          <select
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
            onChange={(e) => handleChange('estado', e.target.value as Filters['estado'])}
            defaultValue="Todos"
          >
            <option value="Todos">Todos</option>
            <option value="Disponible">Disponible</option>
            <option value="En obra">En obra</option>
            <option value="Vendido">Vendido</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600">Habitaciones</label>
          <select
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
            onChange={(e) => handleChange('habitaciones', Number(e.target.value) || undefined)}
          >
            <option value="">Todas</option>
            {habitacionesOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}+
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600">Cochera</label>
          <select
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
            onChange={(e) => {
              const value = e.target.value;
              if (value === 'si') handleChange('cochera', true);
              else if (value === 'no') handleChange('cochera', false);
              else handleChange('cochera', 'Todos');
            }}
            defaultValue="Todos"
          >
            <option value="Todos">Todas</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600">Min m²</label>
          <input
            type="number"
            min={0}
            placeholder="0"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
            onChange={(e) => handleChange('minM2', Number(e.target.value) || undefined)}
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600">Max m²</label>
          <input
            type="number"
            min={0}
            placeholder="200"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
            onChange={(e) => handleChange('maxM2', Number(e.target.value) || undefined)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2 text-xs text-slate-600">
          <span className="rounded-full bg-slate-100 px-3 py-1">{houses.length} casas</span>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-slate-600">Ordenar por</label>
          <select
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
            defaultValue="recientes"
            onChange={(e) => handleChange('sort', e.target.value as Filters['sort'])}
          >
            <option value="recientes">Más nuevas</option>
            <option value="m2desc">Mayor m²</option>
            <option value="m2asc">Menor m²</option>
          </select>
        </div>
      </div>
    </div>
  );
}
