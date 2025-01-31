import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  presets: [require('@sainsburys-tech/style/config/tailwind/index.js')],
  plugins: [
    // eslint-disable-next-line @typescript-eslint/unbound-method
    plugin(({ addVariant }) => {
      addVariant('child', '& > *')
    })
  ]
}
export default config
