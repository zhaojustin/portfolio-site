import { useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ProjectCard from "./ProjectCard";

import BobaTracker2021 from "./ProjectPages/BobaTracker2021";
import HeyB from "./ProjectPages/HeyB";
import Tomotime from "./ProjectPages/Tomotime";
import Covid from "./ProjectPages/Covid";
import Daily from "./ProjectPages/Daily";

export default function ProjectsWrapper() {
  const [project, setProject] = useState("");

  if (project == "BobaTracker2021") {
    return <BobaTracker2021 setProject={setProject} />;
  } else if (project == "HeyB") {
    return <HeyB setProject={setProject} />;
  } else if (project == "Tomotime") {
    return <Tomotime setProject={setProject} />;
  } else if (project == "Covid") {
    return <Covid setProject={setProject} />;
  } else if (project == "Daily") {
    return <Daily setProject={setProject} />;
  } else {
    return (
      <Box>
        <Typography>{project}</Typography>
        <Grid container spacing={2}>
          {/* HeyB */}
          <Grid item xs={12}>
            <ProjectCard
              url="/assets/project_thumbnails/heyb.png"
              title="HeyB."
              timeline="2022"
              description="Website for a creative film advertising agency based in New York City."
              setProject={setProject}
              project={"HeyB"}
            />
          </Grid>
          {/* Tomotime */}
          <Grid item xs={12}>
            <ProjectCard
              url="/assets/project_thumbnails/tomotime.png"
              title="Tomotime (Stern SVS)"
              timeline="2022"
              description="Pitch deck made on Figma for Stern Strategic Venture Society - Startup Studio Spring 2022."
              setProject={setProject}
              project={"Tomotime"}
            />
          </Grid>
          {/* Daily */}
          <Grid item xs={12}>
            <ProjectCard
              url="/assets/project_thumbnails/daily.png"
              title="2022 Journal"
              timeline="2022"
              description="Daily tracker for boba, coffee, and financial consumption. Data is kept on Airtable."
              setProject={setProject}
              project={"Daily"}
            />
          </Grid>
          {/* Boba Tracker */}
          <Grid item xs={12}>
            <ProjectCard
              url="/assets/project_thumbnails/boba_tracker.png"
              title="Boba Tracker"
              timeline="2021"
              description="Used to track boba consumption in 2021. Goals were achieved."
              setProject={setProject}
              project={"BobaTracker2021"}
            />
          </Grid>
          {/* US States Covid Data */}
          <Grid item xs={12}>
            <ProjectCard
              url="/assets/project_thumbnails/covid.png"
              title="US States Covid Data"
              timeline="2020"
              description="Tool for NYU students to decide whether or not it was worth to go home for winter break."
              setProject={setProject}
              project={"Covid"}
            />
          </Grid>
        </Grid>
      </Box>
    );
  }
}
