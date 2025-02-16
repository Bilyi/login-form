import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'src/app'),
      components: path.resolve(__dirname, 'src/components'),
      types: path.resolve(__dirname, 'src/types'),
      state: path.resolve(__dirname, 'src/state'),
      api: path.resolve(__dirname, 'src/api'),
      constants: path.resolve(__dirname, 'src/constants'),
      providers: path.resolve(__dirname, 'src/providers'),
      pages: path.resolve(__dirname, 'src/pages'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
})
