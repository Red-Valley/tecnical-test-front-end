import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'blackAccent',
        fontSize: 'md'
      },
      a: {
        _hover: {
          textDecoration: 'underline'
        }
      }
    }
  },
  colors: {
    purple: '#6A4BFF',
    dark: '#171725',
    blackAccent: '#1d2335',
    yellow: '#f6c949',
    red: '#ff7256',
    green: '#3bc963',
    orange: '#ff6b2c',
    blue: '#1d92f1',
    black: '#25546f',
    darkGrey: '#696974',
    grey: '#92929d',
    lineDark: '#eaeaea',
    whiteGrey: '#f1f1f5',
    white: '#fff'
  },
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
    mono: 'Poppins, sans-serif'
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600
  },
  fontSizes: {
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.75rem',
    '5xl': '3.25rem'
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'black'
      },
      variants: {
        h1: {
          fontWeight: 'semibold',
          fontSize: '3xl'
        },
        h2: {
          fontWeight: 'semibold',
          fontSize: '2xl'
        },
        h3: {
          fontWeight: 'medium',
          fontSize: 'xl'
        },
        h4: {
          fontWeight: 'medium',
          fontSize: 'lg'
        },
        h5: {
          fontWeight: 'medium',
          fontSize: 'md'
        },
        h6: {
          fontWeight: 'normal',
          fontSize: 'md'
        },
        h7: {
          fontWeight: 'normal',
          fontSize: 'sm'
        },
        bigTitle: {
          fontWeight: 'semibold',
          fontSize: '5xl'
        },
        semi: {
          fontWeight: 'semibold',
          fontSize: 'xl'
        },
        regular: {
          fontWeight: 'normal',
          fontSize: 'xl'
        }
      }
    }
  }
});

export { theme };
