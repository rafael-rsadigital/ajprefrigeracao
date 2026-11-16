import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.ajprefrigeracao.com.br',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
