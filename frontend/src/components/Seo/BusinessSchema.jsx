import { BUSINESS, SITE_URL } from '../../config/seo';

export default function BusinessSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BarOrPub',
        name: BUSINESS.name,
        url: SITE_URL,
        telephone: BUSINESS.telephone,
        priceRange: BUSINESS.priceRange,
        address: {
            '@type': 'PostalAddress',
            streetAddress: BUSINESS.streetAddress,
            addressLocality: BUSINESS.addressLocality,
            addressRegion: BUSINESS.addressRegion,
            addressCountry: BUSINESS.addressCountry,
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: BUSINESS.latitude,
            longitude: BUSINESS.longitude,
        },
        openingHoursSpecification: BUSINESS.openingHours.map((entry) => ({
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: entry.days,
            opens: entry.opens,
            closes: entry.closes,
        })),
        sameAs: BUSINESS.sameAs,
    };

    return (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
    );
}
