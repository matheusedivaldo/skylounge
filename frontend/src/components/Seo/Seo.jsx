import { SITE_NAME, SITE_URL } from '../../config/seo';

export default function Seo({ title, description, path = '/', canonicalOverride }) {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const canonical = canonicalOverride ?? `${SITE_URL}${path}`;

    return (
        <>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />
        </>
    );
}
