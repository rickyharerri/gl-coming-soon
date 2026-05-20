import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(),viteStaticCopy({
      targets: [
        { src: 'config', dest: './' },
        { src: 'public/project_assets', dest: './' }
      ]
    })],
  server: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/preview\/.*$/, to: '/index.html' },
      ],
    },
  },
})
