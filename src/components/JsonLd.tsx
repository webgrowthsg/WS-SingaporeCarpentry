import { Helmet } from 'react-helmet-async';

interface JsonLdProps {
  data: object;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

const businessInfo = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://singaporecarpentry.com/#/business',
  name: 'Singapore Carpentry',
  image: 'https://images.pexels.com/photos/19345424/pexels-photo-19345424.jpeg',
  telephone: '+6593485255',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Singapore',
    addressCountry: 'SG',
  },
  url: 'https://singaporecarpentry.com',
  priceRange: '$$',
  openingHours: 'Mo-Sa 09:00-18:00',
};

const organizationInfo = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://singaporecarpentry.com/#organization',
  name: 'Singapore Carpentry',
  url: 'https://singaporecarpentry.com',
  logo: 'https://singaporecarpentry.com/logo.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+6593485255',
    contactType: 'customer service',
  },
};

const websiteInfo = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://singaporecarpentry.com/#/website',
  url: 'https://singaporecarpentry.com',
  name: 'Singapore Carpentry',
  description: 'Custom carpentry and electrical services for Singapore homes',
  publisher: {
    '@id': 'https://singaporecarpentry.com/#/organization',
  },
};

export function LocalBusinessJsonLd() {
  return <JsonLd data={businessInfo} />;
}

export function OrganizationJsonLd() {
  return <JsonLd data={organizationInfo} />;
}

export function WebsiteJsonLd() {
  return <JsonLd data={websiteInfo} />;
}

interface ServiceJsonLdProps {
  name: string;
  description: string;
  url: string;
}

export function ServiceJsonLd({ name, description, url }: ServiceJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `https://singaporecarpentry.com/#${url}`,
    provider: {
      '@id': 'https://singaporecarpentry.com/#/organization',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Singapore',
    },
  };
  return <JsonLd data={data} />;
}

interface BreadcrumbJsonLdProps {
  items: { name: string; url: string }[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://singaporecarpentry.com/#/',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: `https://singaporecarpentry.com/#${item.url}`,
      })),
    ],
  };
  return <JsonLd data={data} />;
}
