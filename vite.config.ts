import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
  base: '/kapp/',
  build: {
    copyPublicDir: true,
    rollupOptions: {
      output: {
        entryFileNames: `assets/index.js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: (info) => {
          if (info.names.includes('styles.css')) {
            return 'index.css'
          }
          return 'assets/[name][extname]'
        },
      },
    },
  },
})
