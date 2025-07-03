// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // default output directory
  },
  server: {
    port: 5173,      // or any other port you want
    open: true       // auto-open browser on `npm run dev`
  }
});
