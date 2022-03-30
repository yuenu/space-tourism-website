import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import svgr from '@svgr/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({})],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  }
})
