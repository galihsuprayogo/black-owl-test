import type { Config } from 'tailwindcss'
import withMT from '@material-tailwind/react/utils/withMT'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        roboto: ['var(--font-robotomono)'],
      },
      colors: {
        primariy: {
          main: '#D6B87C',
          surface: '#F7F1E5',
          border: '#F1D59E',
          hover: '#F5D89F',
          pressed: '#BFA164',
        },
        netral: {
          50: '#FFFFFF',
          100: '#FBFBFB',
          200: '#F5F5F5',
          300: '#EDEDED',
          400: '#E0E0E0',
          500: '#C2C2C2',
          600: '#9E9E9E',
          700: '#757575',
          800: '#616161',
          900: '#404040',
          1000: '#0A0A0A',
        },
      },
    },
  },
  plugins: [],
}

export default withMT(config)
