import { getTranslations } from 'next-intl/server';
import { programs } from '@/content/programs';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/routing';

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'Programs' });
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="py-16 px-4 max-w-content max-w-4xl mx-auto">
      <Link href="/programs" className="text-brand-500 hover:underline mb-8 inline-block">
        &larr; Retour aux programmes
      </Link>
      <div className="bg-surface border border-border rounded-lg p-8 md:p-12 shadow-sm mb-8">
        <div className="inline-block px-3 py-1 bg-surface-muted text-text-muted text-sm font-medium rounded-pill mb-4">
          {program.category}
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-brand-900 mb-6 capitalize">
          {program.slug.replace(/-/g, ' ')}
        </h1>
        <div className="flex flex-wrap gap-6 mb-8 text-text-muted">
          <div className="flex items-center gap-2">
            <span className="font-semibold">{t('duration')}:</span> {program.duration}
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-brand-700 mb-4">{t('objectives')}</h2>
            <ul className="list-disc list-inside space-y-2 text-text-muted">
              {program.objectives.map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-700 mb-4">{t('prerequisites')}</h2>
            <ul className="list-disc list-inside space-y-2 text-text-muted">
              {program.prerequisites.map((pre, i) => (
                <li key={i}>{pre}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-700 mb-4">{t('certification')}</h2>
            <p className="text-text-muted">{program.certification}</p>
          </section>
        </div>
      </div>
      <div className="text-center">
        <Link href={`/admissions?program=${program.slug}`} className="inline-block bg-brand-500 text-white px-8 py-4 rounded-pill font-bold text-lg hover:bg-brand-700 transition-colors">
          {t('enrollInProgram')}
        </Link>
      </div>
    </div>
  );
}
