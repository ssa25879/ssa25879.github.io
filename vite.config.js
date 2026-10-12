import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const githubPagesFallback = {
  name: 'github-pages-fallback',
  apply: 'build',
  closeBundle() {
    const outputDirectory = resolve(process.cwd(), 'dist')
    copyFileSync(
      resolve(outputDirectory, 'index.html'),
      resolve(outputDirectory, '404.html'),
    )
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), githubPagesFallback],
})
