'use client';
/* oxlint-disable next/no-img-element */

import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Kontak', href: '#kontak' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/15 bg-navy-deep/35 backdrop-blur-md">
      <nav
        aria-label="Navigasi utama"
        className="section-shell flex h-[5.5rem] items-center justify-between gap-6 lg:h-24"
      >
        <Link
          href="#home"
          aria-label="PT. Dewangga Putra Utama - beranda"
          className="shrink-0 rounded-sm bg-white px-2.5 py-1.5 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          <img
            src="/images/logo-dpu.jpg"
            alt="Logo resmi PT. Dewangga Putra Utama"
            width={1254}
            height={1254}
            className="h-14 w-14 object-contain lg:h-16 lg:w-16"
          />
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-3 text-[0.72rem] font-semibold tracking-[0.16em] text-white/85 uppercase transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {item.label}
              <span className="absolute inset-x-0 bottom-1 h-px origin-left scale-x-0 bg-gold transition-transform group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        <Link
          href="#kontak"
          className="hidden min-h-11 items-center border border-gold bg-gold px-6 text-[0.7rem] font-bold tracking-[0.18em] text-navy-deep uppercase transition-colors hover:bg-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:inline-flex"
        >
          Hubungi Kami
        </Link>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            aria-label="Buka menu navigasi"
            className="grid size-11 place-items-center border border-white/30 text-white transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold lg:hidden"
          >
            <Menu aria-hidden="true" className="size-5" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[min(88vw,24rem)] border-l border-white/10 bg-navy-deep text-white"
          >
            <SheetHeader className="border-b border-white/10 px-6 py-6">
              <div className="mb-3 w-fit bg-white p-2">
                <img
                  src="/images/logo-dpu.jpg"
                  alt="Logo PT. Dewangga Putra Utama"
                  width={1254}
                  height={1254}
                  className="size-16 object-contain"
                />
              </div>
              <SheetTitle className="font-heading text-2xl text-white">
                PT. Dewangga Putra Utama
              </SheetTitle>
              <SheetDescription className="text-white/55">
                Real Estate & Perumahan
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col px-6 py-5">
              {navigation.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-14 items-center justify-between border-b border-white/10 text-sm font-semibold tracking-[0.12em] text-white/85 uppercase transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-gold"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-gold">0{index + 1}</span>
                </Link>
              ))}
              <Link
                href="#kontak"
                onClick={() => setMobileOpen(false)}
                className="mt-8 inline-flex min-h-12 items-center justify-center bg-gold px-5 text-xs font-bold tracking-[0.16em] text-navy-deep uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Hubungi Kami
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
