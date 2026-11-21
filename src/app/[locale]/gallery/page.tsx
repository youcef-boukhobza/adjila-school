import { getTranslations } from 'next-intl/server';

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Gallery' });

  // Placeholders from Unsplash
  const images = [
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80',
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
    'https://images.unsplash.com/photo-1571260899304-425070114f55?w=800&q=80',
    'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80',
  ];

  return (
    <div className="py-16 px-4 max-w-content">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-brand-900 mb-4">{t('title')}</h1>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">{t('subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div key={i} className="aspect-square relative overflow-hidden rounded-xl border border-border group cursor-pointer bg-surface-muted">
            <img 
              src={img} 
              alt={`Adjila School Gallery Image ${i + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Simple Lightbox TODO */}
          </div>
        ))}
      </div>
    </div>
  );
}
