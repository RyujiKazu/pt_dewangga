'use client';

import { useState, type SubmitEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { buildWhatsAppMessage, createWhatsAppUrl } from '@/data/company';

type FieldName = 'name' | 'phone' | 'email' | 'message';
type FormErrors = Partial<Record<FieldName, string>>;

const fieldClassName =
  'min-h-12 w-full border border-slate-300 bg-ivory px-4 text-sm text-navy outline-none transition-colors placeholder:text-slate-400 focus:border-teal focus:ring-2 focus:ring-teal/15';

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});

  function clearError(field: FieldName) {
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const getText = (field: FieldName) => {
      const value = formData.get(field);
      return typeof value === 'string' ? value.trim() : '';
    };
    const name = getText('name');
    const phone = getText('phone');
    const email = getText('email');
    const message = getText('message');
    const nextErrors: FormErrors = {};

    if (!name) nextErrors.name = 'Nama wajib diisi.';
    if (!phone) nextErrors.phone = 'Nomor telepon wajib diisi.';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = 'Masukkan alamat email yang valid.';
    if (!message) nextErrors.message = 'Pesan wajib diisi.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const whatsappMessage = buildWhatsAppMessage({
      name,
      phone,
      email,
      message,
    });
    const whatsappWindow = window.open(
      createWhatsAppUrl(whatsappMessage),
      '_blank',
      'noopener,noreferrer',
    );
    if (whatsappWindow) whatsappWindow.opener = null;
  }

  const errorText = (field: FieldName) =>
    errors[field] ? (
      <p
        id={`${field}-error`}
        className="mt-2 text-xs font-medium text-red-600"
      >
        {errors[field]}
      </p>
    ) : null;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(6,26,64,0.08)] sm:p-8 lg:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="mb-2 block text-[0.65rem] font-bold tracking-[0.12em] text-navy uppercase"
          >
            Nama Lengkap
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Nama Anda"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            onChange={() => clearError('name')}
            className={fieldClassName}
          />
          {errorText('name')}
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-[0.65rem] font-bold tracking-[0.12em] text-navy uppercase"
          >
            Email{' '}
            <span className="font-normal tracking-normal text-slate-400 normal-case">
              (opsional)
            </span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="nama@email.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            onChange={() => clearError('email')}
            className={fieldClassName}
          />
          {errorText('email')}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-[0.65rem] font-bold tracking-[0.12em] text-navy uppercase"
          >
            Nomor Telepon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="08xx xxxx xxxx"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            onChange={() => clearError('phone')}
            className={fieldClassName}
          />
          {errorText('phone')}
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-[0.65rem] font-bold tracking-[0.12em] text-navy uppercase"
          >
            Pesan
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Ceritakan kebutuhan hunian Anda..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            onChange={() => clearError('message')}
            className={`${fieldClassName} resize-y py-3`}
          />
          {errorText('message')}
        </div>
      </div>
      <Button
        type="submit"
        className="mt-6 h-13 w-full rounded-none bg-navy px-6 text-xs font-bold tracking-[0.16em] uppercase hover:bg-navy-deep sm:w-auto"
      >
        Kirim Pesan
        <ArrowRight aria-hidden="true" className="ml-3 size-4" />
      </Button>
      <p className="mt-4 text-xs leading-5 text-slate-500">
        Pesan akan dibuka di WhatsApp. Data formulir tidak disimpan di website.
      </p>
    </form>
  );
}
