import { defineConfig } from 'tsdown'

export default defineConfig({
  name: '@vingy/tooltip',
  target: 'esnext',
  entry: ['./src/index.ts', './src/composables.ts', './src/types.ts'],
  external: ['vue'],
  sourcemap: true,
  minify: true,
  dts: { sourcemap: true },
})
