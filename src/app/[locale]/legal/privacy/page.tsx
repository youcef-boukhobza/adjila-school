import { getTranslations } from 'next-intl/server';

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Legal' });

  return (
    <div className="py-16 px-4 max-w-content max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-brand-900 mb-8">{t('privacyTitle')}</h1>
      
      <div className="prose prose-brand max-w-none text-text-muted">
        <p><strong>{t('lastUpdated')}: {new Date().toLocaleDateString(locale)}</strong></p>
        <p>Placeholder content for Privacy Policy.</p>
      </div>
    </div>
  );
}
