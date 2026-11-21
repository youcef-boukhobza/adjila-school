import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { siteConfig } from '@/content/site';
import Image from 'next/image';

export default function Header() {
  const t = useTranslations('Nav');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/60">
      <div className="flex h-16 items-center justify-between px-4 max-w-content">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2 space-x-reverse">
            <Image 
              src="/logo.png" 
              alt={siteConfig.brandName} 
              width={150} 
              height={50} 
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/" className="text-text-muted hover:text-brand-500 transition-colors">{t('home')}</Link>
            <Link href="/about" className="text-text-muted hover:text-brand-500 transition-colors">{t('about')}</Link>
            <Link href="/programs" className="text-text-muted hover:text-brand-500 transition-colors">{t('programs')}</Link>
            <Link href="/admissions" className="text-text-muted hover:text-brand-500 transition-colors">{t('admissions')}</Link>
            <Link href="/contact" className="text-text-muted hover:text-brand-500 transition-colors">{t('contact')}</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="/admissions" className="hidden md:inline-flex bg-brand-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brand-700 transition-colors">
            {t('enrollNow')}
          </Link>
        </div>
      </div>
    </header>
  );
}
