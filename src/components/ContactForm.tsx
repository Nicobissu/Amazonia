'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name')?.toString().trim();
    const phone = formData.get('phone')?.toString().trim();
    const message = formData.get('message')?.toString().trim();

    if (!name || !phone || !message) {
      alert('Completá todos los campos.');
      return;
    }

    setStatus('sent');
    form.reset();
  };

  return (
    <form onSubmit={onSubmit} className="card space-y-3 p-5">
      <div>
        <label className="text-sm font-semibold text-slate-800" htmlFor="name">
          Nombre y apellido
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          placeholder="Tu nombre"
          required
        />
      </div>
      <div>
        <label className="text-sm font-semibold text-slate-800" htmlFor="phone">
          Teléfono / WhatsApp
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          placeholder="Ej: +54 9 11 1234-5678"
          required
        />
      </div>
      <div>
        <label className="text-sm font-semibold text-slate-800" htmlFor="message">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          placeholder="Contanos qué buscás"
          required
        />
      </div>
      <button type="submit" className="btn-primary w-full md:w-auto">
        Enviar consulta
      </button>
      {status === 'sent' && <p className="text-sm text-emerald-700">¡Enviado! Te contactaremos a la brevedad.</p>}
    </form>
  );
}
