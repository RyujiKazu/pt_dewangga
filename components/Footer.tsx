import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import {
  companyInfo,
  createWhatsAppUrl,
  defaultWhatsAppMessage,
} from '@/data/company';

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
            <Image
              src="/images/logo-dpu.jpg"
              alt="Logo resmi PT. Dewangga Putra Utama"
              width={1254}
              height={1254}
              className="size-24 object-contain sm:size-28"
            />
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/62">
            Perusahaan real estate dan pengembangan perumahan yang berkomitmen
            menciptakan hunian berkualitas, nyaman, dan bernilai jangka panjang.
          </p>
        </div>
        <div>
          <h2 className="text-xs font-bold tracking-[0.18em] text-gold-light uppercase">
            Quick Links
          </h2>
          <div className="mt-6 flex flex-col gap-3">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center justify-between border-b border-white/10 py-2 text-sm text-white/68 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-gold"
              >
                {label}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3.5 text-gold opacity-0 transition-opacity group-hover:opacity-100"
                />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xs font-bold tracking-[0.18em] text-gold-light uppercase">
            Informasi Kontak
          </h2>
          <div className="mt-6 space-y-5 text-sm leading-6 text-white/62">
            <a
              href={companyInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-gold"
            >
              {companyInfo.address}
            </a>
            <p>
              <a
                href={companyInfo.phoneHref}
                className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-gold"
              >
                Telepon: {companyInfo.phoneDisplay}
              </a>
              <br />
              <a
                href={createWhatsAppUrl(defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-gold"
              >
                WhatsApp: {companyInfo.whatsappDisplay}
              </a>
            </p>
            <div>
              {companyInfo.operatingHours.map(({ days, hours }) => (
                <p key={days}>
                  {days}: {hours}
                </p>
              ))}
            </div>
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
