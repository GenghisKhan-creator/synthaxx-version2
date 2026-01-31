import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url, type = 'website' }) => {
    const siteName = 'Synthaxx Solutions';
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const defaultDesc = 'Future-ready digital solutions. We build software, websites, and brand identities for enterprise leaders.';
    const finalDesc = description || defaultDesc;
    const siteUrl = 'https://synthaxxsolutions.com'; // Replace with actual URL
    const finalUrl = url ? `${siteUrl}${url}` : siteUrl;
    const finalImage = image || `${siteUrl}/og-image.jpg`; // Ensure you have this image

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={finalDesc} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="canonical" href={finalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={finalDesc} />
            <meta property="og:image" content={finalImage} />
            <meta property="og:url" content={finalUrl} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={finalDesc} />
            <meta name="twitter:image" content={finalImage} />

            {/* Theme Color */}
            <meta name="theme-color" content="#00A878" />
        </Helmet>
    );
};

export default SEO;
