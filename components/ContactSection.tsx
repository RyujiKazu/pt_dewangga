import { Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { SectionHeader } from '@/components/SectionHeader';

const contactItems = [
  { icon: MapPin, label: 'Alamat Kantor', value: 'Alamat kantor resmi perusahaan' },
  { icon: Phone, label: 'Nomor Telepon', value: '+62 xxx xxxx xxxx' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+62 xxx xxxx xxxx' },
  { icon: Mail, label: 'Email', value: 'info@perusahaan.co.id' },
  { icon: Clock3, label: 'Jam Operasional', value: 'Senin–Jumat, 08.00–17.00' },
];

export function ContactSection() {
  return (
    <section id="kontak" aria-labelledby="contact-title" className="bg-ivory py-20 sm:py-28 lg:py-36">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <div>
          <div id="contact-title">
            <SectionHeader
              eyebrow="Hubungi Kami"
              title="Temukan Hunian yang Tepat Bersama Kami"
              description="Tim PT. Dewangga Putra Utama siap membantu Anda mengenal proyek, pilihan unit, dan peluang investasi yang sesuai kebutuhan."
            />
          </div>
          <div className="mt-10 divide-y divide-slate-300 border-y border-slate-300">
            {contactItems.map(({ icon: Icon, label, value }) => (
              <div key={label} className="grid grid-cols-[2.75rem_1fr] gap-4 py-5">
                <span className="grid size-11 place-items-center bg-navy text-gold-light"><Icon aria-hidden="true" className="size-4" /></span>
                <div>
                  <p className="text-[0.62rem] font-bold tracking-[0.15em] text-teal-dark uppercase">{label}</p>
                  <p className="mt-1 text-sm text-slate-600">{value}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-slate-500">Informasi kontak di atas masih berupa placeholder dan perlu diganti dengan data resmi.</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
