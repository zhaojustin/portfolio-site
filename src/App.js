import Wrapper from "./Components/Wrapper.js";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Util/Theme";
import CssBaseline from "@mui/material/CssBaseline";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Wrapper />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
