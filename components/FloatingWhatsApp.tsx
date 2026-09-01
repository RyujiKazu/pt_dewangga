import { MessageCircle } from 'lucide-react';
import { createWhatsAppUrl, defaultWhatsAppMessage } from '@/data/company';

export function FloatingWhatsApp() {
  return (
    <a
      href={createWhatsAppUrl(defaultWhatsAppMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi PT. Dewangga Putra Utama melalui WhatsApp"
      title="Chat WhatsApp"
      className="fixed right-4 bottom-4 z-40 inline-flex min-h-13 items-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-bold text-white shadow-[0_12px_35px_rgba(0,0,0,0.24)] transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] sm:right-6 sm:bottom-6"
    >
      <MessageCircle aria-hidden="true" className="size-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
