import { getTranslations } from 'next-intl/server';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About' });

  return (
    <div className="py-16 px-4 max-w-content">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-brand-900 mb-4">{t('title')}</h1>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">{t('subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-3xl font-bold text-brand-700 mb-6">{t('historyTitle')}</h2>
          <p className="text-text-muted leading-relaxed mb-4">{t('historyText')}</p>
        </div>
        <div className="aspect-video bg-surface-muted rounded-xl flex items-center justify-center border border-border">
          <span className="text-text-muted">Placeholder Image: School Building</span>
        </div>
      </div>

      <div className="bg-brand-900 text-white rounded-2xl p-8 md:p-12 mb-24">
        <h2 className="text-3xl font-bold mb-6 text-center">{t('missionTitle')}</h2>
        <p className="text-lg text-center max-w-3xl mx-auto opacity-90 leading-relaxed">
          {t('missionText')}
        </p>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold text-brand-700 mb-12 text-center">{t('valuesTitle')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-surface border border-border rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-accent-100 text-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">{i}</span>
              </div>
              <h3 className="font-bold text-brand-900 mb-2">{t(`value${i}` as any)}</h3>
              <p className="text-sm text-text-muted">{t(`value${i}Desc` as any)}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 aspect-square bg-surface-muted rounded-xl flex items-center justify-center border border-border">
          <span className="text-text-muted">Placeholder Image: Director</span>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold text-brand-700 mb-6">{t('directorTitle')}</h2>
          <blockquote className="text-lg text-text-muted italic border-s-4 border-brand-500 ps-6">
            "{t('directorText')}"
          </blockquote>
        </div>
      </div>
    </div>
  );
}
