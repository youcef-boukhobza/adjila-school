'use client';

import { useTranslations } from 'next-intl';
import { siteConfig } from '@/content/site';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

export default function MobileActionBar() {
  const t = useTranslations('MobileBar');

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-brand-900 text-white flex items-center justify-between px-2 py-2 pb-safe border-t border-white/10 shadow-lg">
      <a href={`tel:${siteConfig.phones[0].uri}`} className="flex-1 flex flex-col items-center justify-center py-2 text-xs font-medium hover:text-brand-500 transition-colors">
        <Phone className="w-5 h-5 mb-1" />
        {t('call')}
      </a>
      <div className="w-px h-8 bg-white/20 mx-1"></div>
      <a href={`https://wa.me/${siteConfig.phones[0].uri.replace('+', '')}?text=Bonjour`} target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center py-2 text-xs font-medium hover:text-success transition-colors">
        <MessageCircle className="w-5 h-5 mb-1" />
        {t('whatsapp')}
      </a>
      <div className="w-px h-8 bg-white/20 mx-1"></div>
      <a href={siteConfig.map.embedUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center py-2 text-xs font-medium hover:text-accent-500 transition-colors">
        <MapPin className="w-5 h-5 mb-1" />
        {t('directions')}
      </a>
    </div>
  );
}
