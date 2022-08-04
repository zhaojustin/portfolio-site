import { Routes, Route } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Home from "./Home/Home.js";
import About from "./About/About";
import Contact from "./Contact/Contact";

import Nav from "./Nav.js";

export default function Wrapper() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.background,
        minHeight: "100vh",
        pt: { xs: 3, sm: 8 },
        pb: 10,
      }}
    >
      <Container maxWidth="md">
        {/* ANIMATION */}
        <Box sx={{ pt: 35, border: 1 }}></Box>

        {/* CONTENT */}
        <Box sx={{ pt: 5 }}>
          <Grid container>
            <Grid item xs={12} sm={3}>
              <Nav />
            </Grid>
            <Grid item xs={12} sm={9}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="Contact" element={<Contact />} />
              </Routes>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
