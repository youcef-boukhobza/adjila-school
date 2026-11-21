import { getTranslations } from 'next-intl/server';
import { faqs } from '@/content/faq';

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'FAQ' });

  return (
    <div className="py-16 px-4 max-w-content max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-brand-900 mb-4">{t('title')}</h1>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">{t('subtitle')}</p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <details key={index} className="group bg-surface border border-border rounded-lg shadow-sm [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-brand-900 text-lg">
              {faq.question}
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-text-muted leading-relaxed">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
