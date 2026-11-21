import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import HomeJsonLd from '@/components/seo/HomeJsonLd';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Hero' });

  return (
    <>
      <HomeJsonLd />
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 max-w-content">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-900 mb-6 leading-tight">
          {t('headline')}
        </h1>
        <p className="text-lg md:text-xl text-text-muted mb-8 max-w-3xl">
          {t('subheadline')}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-brand-500 text-white px-8 py-3 rounded-pill font-medium hover:bg-brand-700 transition-colors">
            {t('cta1')}
          </button>
          <button className="bg-accent-500 text-brand-900 px-8 py-3 rounded-pill font-medium hover:bg-accent-500/90 transition-colors">
            {t('cta2')}
          </button>
        </div>
      </div>
    </>
  );
}
