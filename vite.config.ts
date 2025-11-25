import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import helium from 'helium/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [helium(), react(), tailwindcss()],
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Split vendor libraries
          }
          if (id.includes("src/components/")) {
            return "components"; // Split components into their own chunk
          }
        },
      },
    },
  },
});
