import { createTheme } from "@mui/material/styles"

declare module "@mui/material/styles" {
  interface Theme {
    colors: {
      blackBackground: string
      lightBlue: string
      pink: string
      yellow: string
      blueExtraLight: string
      green: string
    }
    gradients: {
      gradientBlack?: string
      gradientPurple?: string
    }
    borders: {
      borderRadius?: string
    }
  }

  interface ThemeOptions {
    colors?: {
      white?: string
      blackBackground?: string
      lightBlue?: string
      pink?: string
      yellow?: string
      blueExtraLight?: string
      green?: string
    }
    gradients: {
      gradientBlack?: string
      gradientPurple?: string
    }
    borders: {
      borderRadius?: string
    }
  }
}

const theme = createTheme({
  colors: {
    blackBackground: "#1E1E1E",
    lightBlue: "#809AEE",
    pink: "#FF81D8",
    yellow: "#FEE77D",
    blueExtraLight: "#B1C9FF",
    green: "#92E3A9",
  },
  gradients: {
    gradientBlack: "linear-gradient(to top, #262626, #3E4044)",
    gradientPurple: "linear-gradient(to right, #95B6FF, #3F0881)",
  },
  borders: {
    borderRadius: "20px"
  }
})

export default theme
