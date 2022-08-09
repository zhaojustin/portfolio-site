import { createTheme } from "@mui/material/styles";
import "../App.css";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#171717",
    },
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "rgba(255, 255, 255, 0.7)",
    },
    pop: {
      main: "#ffdf87",
      contrastText: "black",
    },
  },
  typography: {
    fontFamily: ["Overpass Mono", "Roboto"].join(","),
    title: {
      fontWeight: 500,
      fontSize: 25,
    },
    subtitle1: {
      fontWeight: 300,
    },
    subtitle2: {
      fontWeight: 300,
    },
    body1: {
      fontWeight: 300,
    },
    body2: {
      fontWeight: 300,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        underline: "none",
      },
    },
    MuiTypography: {
      styleOverrides: {
        fontWeight: 300,
      },
    },
  },
  overrides: {},
});
