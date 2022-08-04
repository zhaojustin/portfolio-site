import { createTheme } from "@mui/material/styles";
import "../App.css";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fcf7f5",
      dark: "#5D8EDB",
      background: "#87abe4",
    },
    secondary: {
      main: "##9287E4",
    },
  },
  typography: {
    fontFamily: ['"Overpass Mono"', "GillSans", "Roboto"].join(","),
    color: theme.palette.primary.main,
    logo: {
      fontFamily: "GillSans",
      fontSize: 25,
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
