import { readFileSync } from 'node:fs'
import { brotliCompressSync, gzipSync } from 'node:zlib'

// Usage: node scripts/size.mjs [--max-brotli=<KB>]
const file = new URL('../dist/colorffy.min.css', import.meta.url)
const css = readFileSync(file)
const sizes = {
  minified: css.length,
  gzip: gzipSync(css, { level: 9 }).length,
  brotli: brotliCompressSync(css).length
}

const kb = bytes => `${(bytes / 1024).toFixed(1)} KB`
for (const [label, bytes] of Object.entries(sizes))
  console.log(`${label.padEnd(9)} ${kb(bytes).padStart(9)}`)

const maxArg = process.argv.find(arg => arg.startsWith('--max-brotli='))
if (maxArg) {
  const max = Number(maxArg.split('=')[1]) * 1024
  if (sizes.brotli > max) {
    console.log(`\nBrotli size ${kb(sizes.brotli)} exceeds the ${kb(max)} budget.`)
    process.exitCode = 1
  }
}
