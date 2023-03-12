import { DataProvider } from "../data/providers";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const darkPallete = {
  mode: "dark",
  primary: {
    main: "#6341FF",
    paper: "#493E7F",
  },
  lavendar: {
    main: "#8167FF",
    light: "#B3A8FF",
  },
  secondary: {
    main: "#C7FD04",
  },
  background: {
    default: "#e0e0298",
    paper: "#2E2447",
  },
  error: {
    main: "#FF5E5B",
  },
  pink: {
    main: "#FC1E9A",
  },
  lime: {
    main: "#C7FD04",
  },
};

const lightPalette = {
  mode: "light",
  primary: {
    main: "#2192FF",
    paper: "#493E7F",
  },
  lavendar: {
    main: "#8167FF",
    light: "#B3A8FF",
  },
  secondary: {
    main: "#38E54D",
  },
  background: {
    default: "#F8F4EA",
    paper: "#F8F4EA",
  },
  error: {
    main: "#FF5E5B",
  },
  pink: {
    main: "#FC1E9A",
  },
  lime: {
    main: "#C7FD04",
  },
};

const theme = (dark) =>
  createTheme({
    typography: {
      fontFamily: "Golos Text",
    },
    palette: dark ? darkPallete : lightPalette,
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            //borderRadius: 10,
            boxShadow: "rgb(20 21 33 / 18%) 0px 2px 10px 0px",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 8 },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: { borderRadius: "8px !important" },
        },
      },
    },
  });

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <ThemeProvider theme={theme(false)}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </DataProvider>
  );
}

export default MyApp;
