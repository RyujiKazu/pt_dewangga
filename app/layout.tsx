import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'PT. Dewangga Putra Utama | Real Estate & Perumahan',
  description:
    'PT. Dewangga Putra Utama merupakan perusahaan yang bergerak di bidang real estate dan pengembangan perumahan berkualitas.',
  keywords: [
    'PT Dewangga Putra Utama',
    'real estate',
    'perumahan',
    'property developer',
    'hunian berkualitas',
  ],
  openGraph: {
    title: 'PT. Dewangga Putra Utama | Real Estate & Perumahan',
    description:
      'Hunian berkualitas untuk kenyamanan hari ini dan nilai investasi masa depan.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'PT. Dewangga Putra Utama',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'PT. Dewangga Putra Utama — Membangun Hunian, Menciptakan Masa Depan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT. Dewangga Putra Utama | Real Estate & Perumahan',
    description: 'Hunian berkualitas untuk kenyamanan hari ini dan nilai investasi masa depan.',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/images/logo-dpu.jpg',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${manrope.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
