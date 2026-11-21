import { getTranslations } from 'next-intl/server';
import { siteConfig } from '@/content/site';
import ContactForm from '@/components/sections/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Contact' });

  return (
    <div className="py-16 px-4 max-w-content">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-brand-900 mb-4">{t('title')}</h1>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">{t('subtitle')}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-brand-900 mb-6">{t('infoTitle')}</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-500/10 text-brand-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-900 mb-1">{t('address')}</h3>
                  <p className="text-sm text-text-muted">{siteConfig.address.line1}</p>
                  <p className="text-sm text-text-muted mt-1">{siteConfig.address.line2}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-500/10 text-brand-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-900 mb-1">{t('phoneLabel')}</h3>
                  {siteConfig.phones.map((phone, idx) => (
                    <a key={idx} href={`tel:${phone.uri}`} className="block text-sm text-brand-500 hover:underline mb-1">
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-500/10 text-brand-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-900 mb-1">{t('emailLabel')}</h3>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm text-brand-500 hover:underline">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-500/10 text-brand-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-900 mb-1">{t('hoursLabel')}</h3>
                  <p className="text-sm text-text-muted">{t('hoursValue')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-surface border border-border p-6 md:p-8 rounded-xl shadow-sm h-full">
            <h2 className="text-2xl font-bold text-brand-700 mb-6">{t('formTitle')}</h2>
            <ContactForm />
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-brand-900">{t('mapTitle')}</h2>
          <a href={siteConfig.map.embedUrl} target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline font-medium text-sm">
            {t('openInMaps')} &rarr;
          </a>
        </div>
        <div className="aspect-video md:aspect-[21/9] w-full bg-surface-muted rounded-xl overflow-hidden border border-border">
          <iframe 
            src={siteConfig.map.embedUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
