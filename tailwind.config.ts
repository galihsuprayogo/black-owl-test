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
      },
    },
  },
  plugins: [],
}

export default withMT(config)
