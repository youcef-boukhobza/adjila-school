'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const schema = z.object({
  studentName: z.string().min(2),
  birthDate: z.string().min(2),
  level: z.string().min(2),
  programInterest: z.string().min(2),
  parentName: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email().optional().or(z.literal('')),
  notes: z.string().optional()
});

type FormData = z.infer<typeof schema>;

export default function AdmissionsForm() {
  const t = useTranslations('Admissions');
  const tCommon = useTranslations('Common');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    setSuccess(true);
    setIsSubmitting(false);
  };

  if (success) {
    return (
      <div className="bg-success/10 text-success p-6 rounded-lg text-center border border-success/20">
        <h3 className="text-xl font-bold mb-2">Demande envoyée avec succès !</h3>
        <p>Nous vous contacterons très prochainement.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-brand-900">{t('studentName')} *</label>
          <input {...register('studentName')} className="w-full p-3 rounded-md border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-brand-500" />
          {errors.studentName && <p className="text-danger text-xs">{tCommon('required')}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-brand-900">{t('birthDate')} *</label>
          <input type="date" {...register('birthDate')} className="w-full p-3 rounded-md border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-brand-500" />
          {errors.birthDate && <p className="text-danger text-xs">{tCommon('required')}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-brand-900">{t('level')} *</label>
          <input {...register('level')} className="w-full p-3 rounded-md border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-brand-500" />
          {errors.level && <p className="text-danger text-xs">{tCommon('required')}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-brand-900">{t('programInterest')} *</label>
          <input {...register('programInterest')} className="w-full p-3 rounded-md border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-brand-500" />
          {errors.programInterest && <p className="text-danger text-xs">{tCommon('required')}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-brand-900">{t('parentName')} *</label>
          <input {...register('parentName')} className="w-full p-3 rounded-md border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-brand-500" />
          {errors.parentName && <p className="text-danger text-xs">{tCommon('required')}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-brand-900">{t('phone')} *</label>
          <input type="tel" {...register('phone')} className="w-full p-3 rounded-md border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-brand-500" />
          {errors.phone && <p className="text-danger text-xs">{tCommon('invalidPhone')}</p>}
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-brand-900">{t('email')}</label>
        <input type="email" {...register('email')} className="w-full p-3 rounded-md border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-brand-500" />
        {errors.email && <p className="text-danger text-xs">{tCommon('invalidEmail')}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-brand-900">{t('notes')}</label>
        <textarea {...register('notes')} rows={4} className="w-full p-3 rounded-md border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-brand-500" />
      </div>

      <button disabled={isSubmitting} type="submit" className="w-full bg-brand-500 text-white font-bold py-3 px-6 rounded-md hover:bg-brand-700 transition-colors disabled:opacity-70">
        {isSubmitting ? tCommon('loading') : t('submit')}
      </button>
    </form>
  );
}
