'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
  honeypot: z.string().max(0).optional() // must be empty
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const t = useTranslations('Contact');
  const tCommon = useTranslations('Common');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setStatus('idle');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setStatus('success');
        reset();
      } else {
        // Fallback to mailto if API fails
        window.location.href = `mailto:institut.adjila@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(data.message + '\n\n' + data.name + '\n' + data.phone)}`;
        setStatus('success');
      }
    } catch (err) {
      window.location.href = `mailto:institut.adjila@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(data.message + '\n\n' + data.name + '\n' + data.phone)}`;
      setStatus('success');
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {status === 'success' && (
        <div className="bg-success/10 text-success p-4 rounded-md border border-success/20">
          {t('success')}
        </div>
      )}
      {status === 'error' && (
        <div className="bg-danger/10 text-danger p-4 rounded-md border border-danger/20">
          {t('error')}
        </div>
      )}

      {/* Honeypot field */}
      <input type="text" {...register('honeypot')} className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-brand-900">{t('name')} *</label>
          <input {...register('name')} className="w-full p-3 rounded-md border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-brand-500" />
          {errors.name && <p className="text-danger text-xs">{tCommon('required')}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-brand-900">{t('phone')} *</label>
          <input type="tel" {...register('phone')} className="w-full p-3 rounded-md border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-brand-500" />
          {errors.phone && <p className="text-danger text-xs">{tCommon('invalidPhone')}</p>}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-brand-900">{t('email')} *</label>
          <input type="email" {...register('email')} className="w-full p-3 rounded-md border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-brand-500" />
          {errors.email && <p className="text-danger text-xs">{tCommon('invalidEmail')}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-brand-900">{t('subject')} *</label>
          <input {...register('subject')} className="w-full p-3 rounded-md border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-brand-500" />
          {errors.subject && <p className="text-danger text-xs">{tCommon('required')}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-brand-900">{t('message')} *</label>
        <textarea {...register('message')} rows={5} className="w-full p-3 rounded-md border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-brand-500" />
        {errors.message && <p className="text-danger text-xs">{tCommon('required')}</p>}
      </div>

      <button disabled={isSubmitting} type="submit" className="w-full bg-brand-500 text-white font-bold py-3 px-6 rounded-md hover:bg-brand-700 transition-colors disabled:opacity-70">
        {isSubmitting ? t('sending') : t('send')}
      </button>
    </form>
  );
}
