import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SentryWebVitals',
      fileName: 'sentry-web-vitals',
    },
    rollupOptions: {
      external: ['@sentry/browser'],
    },
    sourcemap: true,
  },
  plugins: [dts()],
})
