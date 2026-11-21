import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/content/site';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-brand-900 text-white pt-16 pb-8">
      <div className="max-w-content px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">{siteConfig.brandName}</h2>
          <p className="text-surface-muted/80">{t('description')}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-accent-500">{t('quickLinks')}</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-brand-500 transition-colors">À propos</Link></li>
            <li><Link href="/admissions" className="hover:text-brand-500 transition-colors">Admissions</Link></li>
            <li><Link href="/faq" className="hover:text-brand-500 transition-colors">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-accent-500">{t('contact')}</h3>
          <ul className="space-y-2 text-surface-muted/80">
            <li>{siteConfig.address.line1}</li>
            <li>{siteConfig.phones[0].display}</li>
            <li>{siteConfig.email}</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-accent-500">{t('legal')}</h3>
          <ul className="space-y-2 text-surface-muted/80">
            <li><Link href="/legal/privacy" className="hover:text-brand-500 transition-colors">{t('privacy')}</Link></li>
            <li><Link href="/legal/terms" className="hover:text-brand-500 transition-colors">{t('terms')}</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-content px-4 pt-8 border-t border-white/10 text-center text-sm text-surface-muted/60">
        <p>&copy; {new Date().getFullYear()} {siteConfig.brandName}. {t('rights')}.</p>
      </div>
    </footer>
  );
}
