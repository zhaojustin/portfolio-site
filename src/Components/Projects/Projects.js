import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Divider from "../../Util/Divider";

import ProjectsWrapper from "./ProjectsWrapper";

export default function Projects() {
  return (
    <Box sx={{ pt: { xs: 3, sm: 0 } }}>
      {/* TITLE */}
      <Divider />
      <Typography color="primary" variant="title">
        Projects
      </Typography>

      <Box sx={{ pt: { xs: 3, sm: 5 }, pb: { xs: 5, sm: 10 } }}>
        <Typography variant="body1">
          Below are some projects I've worked on, from coding projects to
          design/school projects.
        </Typography>
      </Box>

      {/* Projects */}
      <Box sx={{}}>
        <ProjectsWrapper />
      </Box>
    </Box>
  );
}
