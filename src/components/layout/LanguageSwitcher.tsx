'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex gap-1 items-center">
      {['ar', 'fr', 'en'].map((l) => (
        <button
          key={l}
          onClick={() => handleLocaleChange(l)}
          className={`px-2 py-1 text-sm rounded-md font-medium transition-colors ${
            locale === l ? 'bg-brand-500 text-white' : 'text-text-muted hover:text-brand-900 hover:bg-surface-muted'
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
