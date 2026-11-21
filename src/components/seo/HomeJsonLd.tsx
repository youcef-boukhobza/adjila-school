import { siteConfig } from '@/content/site';

export default function HomeJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: siteConfig.brandName,
    alternateName: 'مدرسة أجيلة',
    url: `https://${siteConfig.domain}`,
    logo: `https://${siteConfig.domain}/logo.png`, // placeholder
    foundingDate: siteConfig.founded.toString(),
    email: siteConfig.email,
    telephone: siteConfig.phones.map(p => p.uri).join(', '),
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.line1,
      addressLocality: 'El Bayadh',
      postalCode: '32000',
      addressCountry: 'DZ'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.6823348, // Approximated from Google Maps embed
      longitude: 1.0189099
    },
    areaServed: 'El Bayadh, Algeria',
    sameAs: Object.values(siteConfig.social).filter(url => url !== '#')
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
