import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-navy py-16 text-white sm:py-20">
      <div className="absolute -right-20 -top-28 size-80 rotate-45 border border-white/10" />
      <div className="absolute -right-8 -top-24 size-64 rotate-45 border border-gold/25" />
      <div className="section-shell relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-3xl">
          <p className="text-[0.65rem] font-bold tracking-[0.24em] text-gold-light uppercase">Mulai Langkah Anda</p>
          <h2 id="cta-title" className="font-heading mt-3 text-[clamp(2.6rem,5vw,4.5rem)] leading-[0.95] font-semibold text-balance">Rumah terbaik dimulai dari keputusan yang tepat.</h2>
        </div>
        <Link href="#kontak" className="group inline-flex min-h-13 shrink-0 items-center justify-between gap-10 bg-gold px-6 text-xs font-bold tracking-[0.16em] text-navy-deep uppercase transition-colors hover:bg-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          Konsultasikan Sekarang
          <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
