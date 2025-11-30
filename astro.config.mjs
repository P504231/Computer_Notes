import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: 'https://computer-awareness.com',
  build: {
    assets: 'styles'
  }
});