export type HouseStatus = 'Disponible' | 'En obra' | 'Vendido';

export interface House {
  id: number;
  slug: string;
  nombre: string;
  descripcionCorta: string;
  descripcionLarga: string;
  m2: number;
  habitaciones: number;
  ambientes: number;
  banos: number;
  cochera: boolean;
  ubicacionAprox: string;
  estado: HouseStatus;
  sistemaConstructivo: string;
  tiempoEstimadoObra: string;
  imagenes: string[];
  features: string[];
  ctaWhatsappLink: string;
  pdfFicha?: string | null;
}
