import Image from 'next/image';
import { SectionHeader } from '@/components/SectionHeader';

const highlights = [
  ['01', 'Hunian Berkualitas'],
  ['02', 'Lokasi Strategis'],
  ['03', 'Desain Modern'],
  ['04', 'Investasi Bernilai'],
];

export function AboutSection() {
  return (
    <section id="tentang" aria-labelledby="about-title" className="bg-ivory py-20 sm:py-28 lg:py-36">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <div className="relative min-h-[30rem] sm:min-h-[39rem]">
          <div className="absolute inset-x-0 top-0 bottom-14 overflow-hidden bg-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=86"
              alt="Interior hunian modern yang nyaman dan elegan"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
          <div className="absolute right-0 bottom-0 w-[78%] border-l-4 border-gold bg-navy-deep px-6 py-6 text-white sm:px-8">
            <p className="font-heading text-2xl font-semibold sm:text-3xl">Ruang hidup yang dirancang untuk bertumbuh.</p>
          </div>
          <div className="absolute -left-3 top-12 h-28 w-3 bg-teal sm:-left-4 sm:w-4" />
        </div>

        <div>
          <div id="about-title">
            <SectionHeader
              eyebrow="Tentang Kami"
              title="Membangun Lebih dari Sekadar Hunian"
              description="PT. Dewangga Putra Utama adalah perusahaan yang bergerak di bidang real estate, pengembangan perumahan, dan property development dengan komitmen menghadirkan ruang hidup yang relevan bagi keluarga Indonesia."
            />
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Setiap pengembangan kami dirancang dengan perhatian pada kualitas konstruksi, kenyamanan penghuni, arsitektur modern, aksesibilitas lokasi, dan nilai jangka panjang. Prinsip pembangunan yang bertanggung jawab menjadi dasar dalam menciptakan lingkungan yang layak huni dan berkelanjutan.
          </p>
          <div className="mt-10 grid grid-cols-1 border-t border-slate-300 sm:grid-cols-2">
            {highlights.map(([number, title]) => (
              <div key={number} className="group flex items-center gap-4 border-b border-slate-300 py-5 sm:odd:border-r sm:odd:pr-6 sm:even:pl-6">
                <span className="font-heading text-2xl font-semibold text-gold transition-colors group-hover:text-teal">{number}</span>
                <h3 className="text-xs font-bold tracking-[0.1em] text-navy uppercase sm:text-sm">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
