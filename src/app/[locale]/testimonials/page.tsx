import { getTranslations } from 'next-intl/server';

export default async function TestimonialsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Testimonials' });

  return (
    <div className="py-16 px-4 max-w-content">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-brand-900 mb-4">{t('title')}</h1>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">{t('subtitle')}</p>
      </div>
      
      <div className="bg-surface border border-border border-dashed rounded-xl p-12 text-center text-text-muted">
        {t('placeholder')}
      </div>
    </div>
  );
}
