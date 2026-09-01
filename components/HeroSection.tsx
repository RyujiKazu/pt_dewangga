import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownRight, ArrowRight } from 'lucide-react';

const heroImage =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=88';

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[46rem] items-end overflow-hidden bg-navy-deep text-white lg:min-h-screen"
    >
      <Image
        src={heroImage}
        alt="Hunian modern dengan arsitektur premium"
        fill
        priority
        sizes="100vw"
        className="-z-30 object-cover object-center"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(6,26,64,0.96)_0%,rgba(6,26,64,0.84)_43%,rgba(6,26,64,0.24)_78%,rgba(6,26,64,0.34)_100%)]" />
      <div className="architectural-grid absolute inset-0 -z-10 opacity-40" />
      <div className="absolute right-[10%] top-[19%] hidden h-[46%] w-px bg-gradient-to-b from-transparent via-gold/75 to-transparent xl:block" />

      <div className="section-shell relative pb-14 pt-32 sm:pb-16 lg:pb-20 lg:pt-36">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <p className="text-[0.68rem] font-bold tracking-[0.28em] text-gold-light uppercase sm:text-xs">
              Real Estate & Perumahan
            </p>
          </div>
          <h1
            id="hero-heading"
            className="font-heading max-w-4xl text-[clamp(3.25rem,8.2vw,7.7rem)] leading-[0.86] font-semibold tracking-[-0.035em] text-balance"
          >
            Membangun Hunian,
            <br />
            <span className="italic text-gold-light">Menciptakan Masa Depan.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/74 sm:text-base sm:leading-8">
            PT. Dewangga Putra Utama menghadirkan hunian berkualitas yang memadukan
            kenyamanan, lokasi strategis, desain modern, dan nilai investasi jangka panjang.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#proyek"
              className="group inline-flex min-h-13 items-center justify-between gap-8 bg-gold px-6 text-xs font-bold tracking-[0.16em] text-navy-deep uppercase transition-colors hover:bg-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Lihat Proyek
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="#kontak"
              className="group inline-flex min-h-13 items-center justify-between gap-8 border border-white/45 bg-white/5 px-6 text-xs font-bold tracking-[0.16em] text-white uppercase backdrop-blur-sm transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Hubungi Kami
              <ArrowDownRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="mt-16 grid max-w-2xl grid-cols-1 border-t border-white/20 sm:grid-cols-3">
          {[
            ['Kualitas', 'Konstruksi Terpercaya'],
            ['Kenyamanan', 'Ruang Hidup Terencana'],
            ['Nilai', 'Investasi Jangka Panjang'],
          ].map(([label, value]) => (
            <div
              key={label}
              className="border-b border-white/20 py-4 sm:border-r sm:border-b-0 sm:px-5 first:sm:pl-0 last:sm:border-r-0"
            >
              <p className="text-[0.62rem] font-bold tracking-[0.2em] text-gold uppercase">
                {label}
              </p>
              <p className="mt-1.5 text-xs text-white/68">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-8 bottom-8 hidden items-center gap-3 text-[0.62rem] font-semibold tracking-[0.22em] text-white/60 uppercase xl:flex">
        Jelajahi
        <span className="grid size-10 place-items-center border border-white/30">
          <ArrowDownRight aria-hidden="true" className="size-4 text-gold" />
        </span>
      </div>
    </section>
  );
}
