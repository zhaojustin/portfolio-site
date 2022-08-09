import Box from "@mui/material/Box";

import Divider from "../../Util/Divider";

import ProjectsWrapper from "./ProjectsWrapper";

export default function Projects() {
  return (
    <Box sx={{ pt: { xs: 3, sm: 0 } }}>
      {/* TITLE */}
      <Divider />

      {/* Projects */}
      <ProjectsWrapper />
    </Box>
  );
}
