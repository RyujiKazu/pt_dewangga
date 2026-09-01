'use client';

import { useState, type SyntheticEvent } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  if (submitted) {
    return (
      <output className="grid min-h-[30rem] place-items-center border border-slate-200 bg-white p-8 text-center shadow-[0_20px_60px_rgba(6,26,64,0.08)]">
        <div>
          <CheckCircle2 aria-hidden="true" className="mx-auto size-12 text-teal" />
          <h3 className="font-heading mt-5 text-3xl font-semibold text-navy-deep">Pesan Anda telah disiapkan.</h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">Form ini masih berupa demo frontend. Integrasi pengiriman akan diaktifkan setelah kanal kontak resmi tersedia.</p>
          <Button onClick={() => setSubmitted(false)} className="mt-7 h-11 rounded-none bg-navy px-5 text-xs tracking-[0.12em] uppercase hover:bg-navy-deep">Kirim Pesan Lain</Button>
        </div>
      </output>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(6,26,64,0.08)] sm:p-8 lg:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="mb-2 block text-[0.65rem] font-bold tracking-[0.12em] text-navy uppercase">Nama Lengkap</label>
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Nama Anda" className="min-h-12 w-full border border-slate-300 bg-ivory px-4 text-sm text-navy outline-none transition-colors placeholder:text-slate-400 focus:border-teal focus:ring-2 focus:ring-teal/15" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-[0.65rem] font-bold tracking-[0.12em] text-navy uppercase">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="nama@email.com" className="min-h-12 w-full border border-slate-300 bg-ivory px-4 text-sm text-navy outline-none transition-colors placeholder:text-slate-400 focus:border-teal focus:ring-2 focus:ring-teal/15" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-[0.65rem] font-bold tracking-[0.12em] text-navy uppercase">Nomor Telepon</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="08xx xxxx xxxx" className="min-h-12 w-full border border-slate-300 bg-ivory px-4 text-sm text-navy outline-none transition-colors placeholder:text-slate-400 focus:border-teal focus:ring-2 focus:ring-teal/15" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-[0.65rem] font-bold tracking-[0.12em] text-navy uppercase">Pesan</label>
          <textarea id="message" name="message" required rows={5} placeholder="Ceritakan kebutuhan hunian Anda..." className="w-full resize-y border border-slate-300 bg-ivory px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-slate-400 focus:border-teal focus:ring-2 focus:ring-teal/15" />
        </div>
      </div>
      <Button type="submit" className="mt-6 h-13 w-full rounded-none bg-navy px-6 text-xs font-bold tracking-[0.16em] uppercase hover:bg-navy-deep sm:w-auto">
        Kirim Pesan
        <ArrowRight aria-hidden="true" className="ml-3 size-4" />
      </Button>
      <p className="mt-4 text-xs leading-5 text-slate-500">Demo frontend — pesan belum dikirim ke server.</p>
    </form>
  );
}
