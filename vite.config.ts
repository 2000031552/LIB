import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import {visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({

  server: {
    proxy: {
      '/v2/api/library': {
        target: 'https://dev.myossem.com', 
        changeOrigin: true,
    },
  },
  },
  plugins: [react()],
});
