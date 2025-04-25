import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto';

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      blackBackground: string;
      lightBlue: string;
      pink: string;
      yellow: string;
      blueExtraLight: string;
      green: string;
      lightGray: string;
      orange: string;
      lightPink: string;
      darkPurple: string;
      red: string;
      defaultBackground: string;
      lightRed: string;
      notificationGreen: string;
      notificationBlue: string;
      notificationPink: string;
    };
    gradients: {
      gradientBlack?: string;
      gradientPurple?: string;
      gradientPurpleToBottom?: string;
    };
    borders: {
      borderRadius?: string;
    };
    sidebar?: {
      width: string;
    };
  }

  interface ThemeOptions {
    colors?: {
      white?: string;
      blackBackground?: string;
      lightBlue?: string;
      pink?: string;
      yellow?: string;
      blueExtraLight?: string;
      green?: string;
      lightGray?: string;
      orange?: string;
      lightPink?: string;
      darkPurple?: string;
      red?: string;
      defaultBackground?: string;
      lightRed?: string;
      notificationGreen?: string;
      notificationBlue?: string;
      notificationPink?: string;
    };
    gradients?: {
      gradientBlack?: string;
      gradientPurple?: string;
      gradientPurpleToBottom?: string;
    };
    borders?: {
      borderRadius?: string;
    };
    sidebar?: {
      width: string;
    };
  }

  interface TypographyVariants {
    body3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
    h1: {
      fontSize: '2.5rem',
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.75rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1.25rem',
    },
    h6: {
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    body3: {
      fontSize: '0.75rem',
    },
    button: {
      fontSize: '1rem',
    },
  },
  colors: {
    blackBackground: '#1E1E1E',
    lightBlue: '#809AEE',
    pink: '#FF81D8',
    yellow: '#FEE77D',
    blueExtraLight: '#B1C9FF',
    green: '#92E3A9',
    lightGray: '#d9d9d9',
    orange: '#F5A180',
    lightPink: '#F9DEDC',
    darkPurple: '#1D1B20',
    red: '#B3261E',
    defaultBackground: '#1B201B',
    lightRed: '#FF8D98',
    notificationGreen: '#E7FFEE',
    notificationBlue: '#E5EDFF',
    notificationPink: '#FFE5F7',
  },
  gradients: {
    gradientBlack: 'linear-gradient(to top, #262626, #3E4044)',
    gradientPurple: 'linear-gradient(to right, #95B6FF, #3F0881)',
    gradientPurpleToBottom: 'linear-gradient(to bottom, #5983E0, #5D24A2)',
  },
  borders: {
    borderRadius: '20px',
  },
  sidebar: {
    width: '5.5rem',
  },
});

export default theme;
