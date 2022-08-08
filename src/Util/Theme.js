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
  },
  typography: {
    fontFamily: ["Overpass Mono", "Roboto"].join(","),
    logo: {
      fontFamily: "GillSans",
      fontSize: 25,
    },
    title: {
      fontSize: 20,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        underline: "none",
      },
    },
  },
  overrides: {},
});
