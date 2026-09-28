import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import { readFileSync } from 'fs';

const routeMetadata: Record<string, { title: string; description: string }> = {
  '/about': {
    title: 'About Singapore Carpentry | Trusted Home Renovation Team',
    description: 'Learn about Singapore Carpentry, a trusted local team providing custom carpentry and electrical renovation services for Singapore homes.',
  },
  '/services': {
    title: 'Carpentry & Electrical Services | Singapore Carpentry',
    description: 'Explore custom kitchen cabinets, wardrobes, tabletops, and whole-unit rewiring services for HDB, condo, and landed homes in Singapore.',
  },
  '/services/kitchen-cabinets': {
    title: 'Custom Kitchen Cabinets Singapore | Singapore Carpentry',
    description: 'Custom kitchen cabinets for Singapore homes, with practical designs, quality materials, precise installation, and transparent quotations.',
  },
  '/services/custom-wardrobes': {
    title: 'Custom Built-in Wardrobes Singapore | Singapore Carpentry',
    description: 'Space-saving custom wardrobes for Singapore bedrooms, designed and installed for HDB flats, condos, and landed homes.',
  },
  '/services/tabletop': {
    title: 'Tabletop & Countertop Services | Singapore Carpentry',
    description: 'Premium quartz, solid surface, sintered stone, and laminate countertops for Singapore homes, with precise templating and professional installation.',
  },
  '/services/electrical-services': {
    title: 'Whole Unit Rewiring Singapore | Singapore Carpentry',
    description: 'Safe, reliable whole-unit rewiring and electrical services for HDB, condo, and landed homes in Singapore.',
  },
  '/projects': {
    title: 'Renovation Projects | Singapore Carpentry',
    description: 'View completed kitchen, wardrobe, tabletop, and electrical renovation projects by Singapore Carpentry.',
  },
  '/advice': {
    title: 'Renovation Advice & Tips | Singapore Carpentry',
    description: 'Practical renovation advice for Singapore homeowners planning carpentry and electrical work.',
  },
  '/faq': {
    title: 'Renovation FAQ | Singapore Carpentry',
    description: 'Answers to common questions about custom carpentry, kitchen cabinets, wardrobes, tabletops, and electrical renovation in Singapore.',
  },
  '/contact': {
    title: 'Contact Singapore Carpentry | Get a Free Quote',
    description: 'Contact Singapore Carpentry for a consultation and quotation for custom carpentry or electrical renovation services in Singapore.',
  },
};

// Generates a static index.html for each route so direct visits work
// even when the host doesn't process _redirects SPA fallback rules.
function spaPrerenderPlugin() {
  return {
    name: 'spa-prerender',
    apply: 'build' as const,
    closeBundle() {
      const outDir = resolve(__dirname, 'dist');
      const template = readFileSync(resolve(outDir, 'index.html'), 'utf-8');

      for (const [route, metadata] of Object.entries(routeMetadata)) {
        const canonicalUrl = `https://singaporecarpentry.com${route}`;
        const routeTemplate = template
          .replace(/<title>[^<]*<\/title>/, `<title>${metadata.title}</title>`)
          .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${metadata.description}" />`)
          .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`)
          .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`);
        const dir = resolve(outDir, route.slice(1));
        mkdirSync(dir, { recursive: true });
        writeFileSync(resolve(dir, 'index.html'), routeTemplate);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), spaPrerenderPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
