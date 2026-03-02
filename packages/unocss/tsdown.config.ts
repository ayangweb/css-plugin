import { defineConfig } from 'tsdown'

export default defineConfig({
  dts: true,
  format: 'es',
  entry: [
    'src/index.ts',
  ],
  external: [
    'unocss',
  ],
  outExtensions(){
    return {
      'js':".js",
      "dts":".d.ts"
    }
  },
  skipNodeModulesBundle: true,
})
