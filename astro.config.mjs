// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  fonts: [{
    provider: fontProviders.local(),
    name: "DistantGalaxy",
    cssVariable: "--font-ioskeley",
    options: {
      variants: [{
        src: ['./src/styles/IoskeleyMono-Regular.woff2'],
        weight: 'normal',
        style: 'normal'
      },
      {
        src: ['./src/styles/IoskeleyMono-Bold.woff2'],
        weight: 'bold',
        style: 'normal'
      }]
    }
  }],
  site: 'https://impermanentdeath.net',
  integrations: [mdx()]
});