// Jika nomor WhatsApp perusahaan berubah, cukup ubah nilai ini saja.
const whatsappLocalNumber = '083836944999';
const whatsappInternationalNumber = `62${whatsappLocalNumber.slice(1)}`;

export const companyInfo = {
  name: 'PT. Dewangga Putra Utama',
  mapsListingName: 'PT Dewangga Putra Utama',
  category: 'Kantor perusahaan di Jawa Barat',
  address:
    'Jl. Raya Cisalak No.03, Cisalak, Kec. Cisalak, Kabupaten Subang, Jawa Barat 41283',
  phoneDisplay: '0896-7481-9818',
  phoneHref: 'tel:+6289674819818',
  whatsappDisplay: whatsappLocalNumber,
  whatsappNumber: whatsappInternationalNumber,
  whatsappUrl: `https://wa.me/${whatsappInternationalNumber}`,
  mapsUrl: 'https://share.google/gJGTzDwHZWGZqBcBf',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=PT%20Dewangga%20Putra%20Utama%2C%20Jl.%20Raya%20Cisalak%20No.03%2C%20Cisalak%2C%20Kec.%20Cisalak%2C%20Kabupaten%20Subang%2C%20Jawa%20Barat%2041283&output=embed',
  operatingHours: [{ days: 'Senin–Minggu', hours: '08.00–16.00' }],
} as const;

export const defaultWhatsAppMessage =
  'Halo PT. Dewangga Putra Utama, saya ingin mendapatkan informasi lebih lanjut.';

export function createWhatsAppUrl(message: string) {
  return `${companyInfo.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export type WhatsAppFormValues = {
  name: string;
  phone: string;
  email?: string;
  message: string;
};

export function buildWhatsAppMessage({
  name,
  phone,
  email,
  message,
}: WhatsAppFormValues) {
  return [
    'Halo PT. Dewangga Putra Utama,',
    '',
    'Saya ingin mendapatkan informasi lebih lanjut.',
    '',
    `Nama: ${name}`,
    `No. Telepon: ${phone}`,
    ...(email ? [`Email: ${email}`] : []),
    '',
    'Pesan:',
    message,
    '',
    'Terima kasih.',
  ].join('\n');
}
