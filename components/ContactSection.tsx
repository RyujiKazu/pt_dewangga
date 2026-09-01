import {
  Clock3,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { SectionHeader } from '@/components/SectionHeader';
import {
  companyInfo,
  createWhatsAppUrl,
  defaultWhatsAppMessage,
} from '@/data/company';

const contactItems = [
  {
    icon: MapPin,
    label: 'Alamat Kantor',
    value: companyInfo.address,
    href: companyInfo.mapsUrl,
    external: true,
  },
  {
    icon: Phone,
    label: 'Nomor Telepon',
    value: companyInfo.phoneDisplay,
    href: companyInfo.phoneHref,
    external: false,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: companyInfo.whatsappDisplay,
    href: createWhatsAppUrl(defaultWhatsAppMessage),
    external: true,
  },
] as const;

export function ContactSection() {
  return (
    <section
      id="kontak"
      aria-labelledby="contact-title"
      className="bg-ivory py-20 sm:py-28 lg:py-36"
    >
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <div id="contact-title">
              <SectionHeader
                eyebrow="Hubungi Kami"
                title="Temukan Hunian yang Tepat Bersama Kami"
                description="Tim PT. Dewangga Putra Utama siap membantu Anda mengenal proyek, pilihan unit, dan peluang investasi yang sesuai kebutuhan."
              />
            </div>
            <div className="mt-10 divide-y divide-slate-300 border-y border-slate-300">
              {contactItems.map(
                ({ icon: Icon, label, value, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="group grid grid-cols-[2.75rem_1fr] gap-4 py-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
                  >
                    <span className="grid size-11 place-items-center bg-navy text-gold-light transition-colors group-hover:bg-teal-dark">
                      <Icon aria-hidden="true" className="size-4" />
                    </span>
                    <div>
                      <p className="text-[0.62rem] font-bold tracking-[0.15em] text-teal-dark uppercase">
                        {label}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-600 transition-colors group-hover:text-navy">
                        {value}
                      </p>
                    </div>
                  </a>
                ),
              )}
              <div className="grid grid-cols-[2.75rem_1fr] gap-4 py-5">
                <span className="grid size-11 place-items-center bg-navy text-gold-light">
                  <Clock3 aria-hidden="true" className="size-4" />
                </span>
                <div>
                  <p className="text-[0.62rem] font-bold tracking-[0.15em] text-teal-dark uppercase">
                    Jam Operasional
                  </p>
                  <dl className="mt-2 space-y-1 text-sm text-slate-600">
                    {companyInfo.operatingHours.map(({ days, hours }) => (
                      <div
                        key={days}
                        className="flex max-w-xs justify-between gap-6"
                      >
                        <dt>{days}</dt>
                        <dd className="font-medium text-navy">{hours}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
            <a
              href={createWhatsAppUrl(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 bg-teal-dark px-6 text-xs font-bold tracking-[0.14em] text-white uppercase transition-colors hover:bg-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
            >
              <MessageCircle aria-hidden="true" className="size-4" />
              Chat WhatsApp
            </a>
          </div>
          <ContactForm />
        </div>
        <div className="mt-16 overflow-hidden border border-slate-200 bg-white shadow-[0_20px_60px_rgba(6,26,64,0.08)] sm:mt-20">
          <div className="flex flex-col gap-4 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="text-[0.62rem] font-bold tracking-[0.15em] text-teal-dark uppercase">
                Lokasi Kantor
              </p>
              <h3 className="font-heading mt-1 text-xl font-semibold text-navy-deep">
                {companyInfo.mapsListingName}
              </h3>
            </div>
            <a
              href={companyInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 text-xs font-bold tracking-[0.12em] text-navy uppercase transition-colors hover:text-teal-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
            >
              Buka di Google Maps
              <ExternalLink aria-hidden="true" className="size-4" />
            </a>
          </div>
          <iframe
            title="Lokasi kantor PT. Dewangga Putra Utama di Google Maps"
            src={companyInfo.mapsEmbedUrl}
            className="h-[22rem] w-full border-0 sm:h-[28rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
