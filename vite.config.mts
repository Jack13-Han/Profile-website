import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const portfolioImages = ['me_1.png', 'portfolio-01.jpg', 'portfolio-02.jpg', 'portfolio-03.jpg', 'portfolio-04.jpg', 'portfolio-05.jpg', 'todolist.png'];

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-portfolio-images',
      closeBundle() {
        const outputImages = resolve('dist/img');
        mkdirSync(outputImages, { recursive: true });
        for (const image of portfolioImages) {
          copyFileSync(resolve('img', image), resolve(outputImages, image));
        }
      },
    },
  ],
  publicDir: false,
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
