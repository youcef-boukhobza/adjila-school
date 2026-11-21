import { getTranslations } from 'next-intl/server';
import { programs } from '@/content/programs';
import { Link } from '@/i18n/routing';

export default async function ProgramsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Programs' });

  return (
    <div className="py-16 px-4 max-w-content">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-900 mb-4">{t('title')}</h1>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">{t('subtitle')}</p>
      </div>
      
      {/* TODO: Add filter component here */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program) => (
          <Link key={program.slug} href={`/programs/${program.slug}`} className="group bg-surface border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-brand-500/10 text-brand-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-500 group-hover:text-white transition-colors">
              {/* Dynamic icon mapping placeholder */}
              <span className="font-bold text-xl">{program.icon.substring(0, 2).toUpperCase()}</span>
            </div>
            <div className="inline-block px-3 py-1 bg-surface-muted text-text-muted text-xs font-medium rounded-pill mb-3">
              {program.category}
            </div>
            <h3 className="text-xl font-bold text-brand-900 mb-2">{program.slug.replace(/-/g, ' ')}</h3>
            <p className="text-sm text-text-muted mb-4">{program.duration}</p>
            <div className="text-brand-500 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              {t('learnMore')} <span>&rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
