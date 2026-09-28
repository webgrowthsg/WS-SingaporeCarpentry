import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import { readFileSync } from 'fs';

const routes = [
  '/about',
  '/services',
  '/services/kitchen-cabinets',
  '/services/custom-wardrobes',
  '/services/tabletop',
  '/services/electrical-services',
  '/projects',
  '/advice',
  '/faq',
  '/contact',
];

// Generates a static index.html for each route so direct visits work
// even when the host doesn't process _redirects SPA fallback rules.
function spaPrerenderPlugin() {
  return {
    name: 'spa-prerender',
    apply: 'build' as const,
    closeBundle() {
      const outDir = resolve(__dirname, 'dist');
      const template = readFileSync(resolve(outDir, 'index.html'), 'utf-8');

      for (const route of routes) {
        const dir = resolve(outDir, route.slice(1));
        mkdirSync(dir, { recursive: true });
        writeFileSync(resolve(dir, 'index.html'), template);
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
