import { getTranslations } from 'next-intl/server';
import AdmissionsForm from '@/components/sections/AdmissionsForm';
import { Download } from 'lucide-react';

export default async function AdmissionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Admissions' });

  return (
    <div className="py-16 px-4 max-w-content">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-brand-900 mb-4">{t('title')}</h1>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">{t('subtitle')}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-brand-700 mb-6">{t('stepsTitle')}</h2>
            <div className="space-y-6">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-900">{t(`step${step}` as any)}</h3>
                    <p className="text-sm text-text-muted">{t(`step${step}Desc` as any)}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-surface-muted p-6 rounded-xl border border-border">
            <h2 className="text-xl font-bold text-brand-900 mb-4">{t('documentsTitle')}</h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-text-muted">
              {[1, 2, 3, 4, 5].map((doc) => (
                <li key={doc}>{t(`doc${doc}` as any)}</li>
              ))}
            </ul>
          </section>

          <a href="#" className="flex items-center justify-center gap-2 w-full bg-surface border-2 border-brand-500 text-brand-500 font-bold py-3 px-6 rounded-md hover:bg-brand-500 hover:text-white transition-colors">
            <Download className="w-5 h-5" />
            {t('downloadForm')}
          </a>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-surface border border-border p-6 md:p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-brand-700 mb-6">{t('formTitle')}</h2>
            <AdmissionsForm />
          </div>
        </div>
      </div>
    </div>
  );
}
