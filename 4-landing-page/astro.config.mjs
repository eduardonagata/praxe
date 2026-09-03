// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Troque pelo domínio definitivo antes de publicar.
// É usado para gerar canonical, Open Graph e sitemap.
const SITE = 'https://praxe.com.br';

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  build: {
    // CSS inline em vez de arquivo externo: menos requisições, first paint imediato.
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
