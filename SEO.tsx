import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

const defaultImage = 'https://images.pexels.com/photos/19345424/pexels-photo-19345424.jpeg';

export default function SEO({ title, description, path = '', image = defaultImage }: SEOProps) {
  const siteUrl = 'https://singaporecarpentry.com';
  const canonicalUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
    </Helmet>
  );
}
