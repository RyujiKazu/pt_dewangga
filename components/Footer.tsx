import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const links = [
  ['Home', '#home'],
  ['Tentang Kami', '#tentang'],
  ['Proyek', '#proyek'],
  ['Kontak', '#kontak'],
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="section-shell grid gap-12 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-[1.35fr_0.65fr_0.9fr] lg:gap-16">
        <div>
          <div className="w-fit bg-white p-2.5">
            <Image src="/images/logo-dpu.jpg" alt="Logo resmi PT. Dewangga Putra Utama" width={1254} height={1254} className="size-24 object-contain sm:size-28" />
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/62">Perusahaan real estate dan pengembangan perumahan yang berkomitmen menciptakan hunian berkualitas, nyaman, dan bernilai jangka panjang.</p>
          <div className="mt-6 flex gap-3">
            <Link href="#" aria-label="Instagram PT. Dewangga Putra Utama (placeholder)" className="grid size-10 place-items-center border border-white/20 text-[0.65rem] font-bold text-white/70 transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">IG</Link>
            <Link href="#" aria-label="LinkedIn PT. Dewangga Putra Utama (placeholder)" className="grid size-10 place-items-center border border-white/20 text-[0.65rem] font-bold text-white/70 transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">IN</Link>
          </div>
        </div>
        <div>
          <h2 className="text-xs font-bold tracking-[0.18em] text-gold-light uppercase">Quick Links</h2>
          <div className="mt-6 flex flex-col gap-3">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="group flex items-center justify-between border-b border-white/10 py-2 text-sm text-white/68 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-gold">
                {label}
                <ArrowUpRight aria-hidden="true" className="size-3.5 text-gold opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xs font-bold tracking-[0.18em] text-gold-light uppercase">Informasi Kontak</h2>
          <div className="mt-6 space-y-5 text-sm leading-6 text-white/62">
            <p>Alamat kantor resmi perusahaan<br /><span className="text-[0.63rem] tracking-[0.1em] text-white/35 uppercase">Placeholder</span></p>
            <p>+62 xxx xxxx xxxx<br />info@perusahaan.co.id</p>
            <p>Senin–Jumat<br />08.00–17.00 WIB</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-2 py-6 text-[0.65rem] tracking-[0.08em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 PT. Dewangga Putra Utama. All Rights Reserved.</p>
          <p>Real Estate & Perumahan</p>
        </div>
      </div>
    </footer>
  );
}
