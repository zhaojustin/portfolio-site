import { Routes, Route } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Home from "./Home/Home.js";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import More from "./More/More";
import Photography from "./Photography";

import Nav from "./Nav.js";

import ModelViewer from "../Util/Model/Model.js";

export default function Wrapper() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: { xs: 3, sm: 8 },
        pb: 10,
      }}
    >
      <Container maxWidth="md">
        {/* ANIMATION */}
        <Box sx={{ height: "40vh" }}>
          <ModelViewer modelPath={"/3d/scene.glb"} />
        </Box>

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
                <Route path="More" element={<More />} />
                <Route path="Photography" element={<Photography />} />
                <Route path="Projects" element={<Projects />} />
                <Route path="Contact" element={<Contact />} />
              </Routes>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
