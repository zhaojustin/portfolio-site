import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Divider from "../../Util/Divider";
import WorkExperienceCard from "./WorkExperience";

export default function About() {
  return (
    <Box sx={{ pt: { xs: 3, sm: 0 } }}>
      {/* TITLE */}
      <Divider />
      <Typography color="primary" variant="title">
        About Me
      </Typography>

      {/* IMAGE CARD */}
      <Grid container spacing={2} sx={{ pt: { xs: 4, sm: 7 }, pb: 5 }}>
        {/* IMAGE */}
        <Grid item xs={12} sm={5}>
          <Box
            component="img"
            alt="Me"
            src="/assets/me.JPG"
            sx={{
              width: { xs: "100%", sm: 250 },
              borderRadius: 5,
              opacity: 0.8,
            }}
          ></Box>
        </Grid>
        {/* COLLEGE */}
        <Grid item xs={12} sm={7}>
          <Box>
            <Typography color="primary" variant="body1">
              NYU Stern School of Business
            </Typography>
            <Typography color="secondary" variant="body1">
              B.S. Finance, B.A. Computer Science
            </Typography>
            <Typography color="secondary" variant="body1">
              Class of 2024
            </Typography>
          </Box>
          {/* ABOUT BLURB */}
          <Box sx={{ pt: 3, pb: { xs: 5, sm: 10 } }}>
            <Typography color="primary" variant="body1">
              - from Southern California
            </Typography>
            <Typography color="primary" variant="body1" sx={{ pt: 2 }}>
              - likes photography and coffee
            </Typography>
            <Typography color="primary" variant="body1" sx={{ pt: 2 }}>
              - favorite show is 'One Piece'
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* WORK EXPERIENCE */}
      <Divider />
      <Typography color="primary" variant="title">
        Work Experience
      </Typography>

      <Grid container spacing={2} sx={{ pt: { xs: 4, sm: 7 } }}>
        {/* Moody's */}
        <Grid item xs={12}>
          <WorkExperienceCard
            url="/assets/work_experience/moodys_dark.png"
            title="Software Engineer Intern"
            timeline="2022"
          />
        </Grid>
        {/* Moody's */}
        <Grid item xs={12}>
          <WorkExperienceCard
            url="/assets/work_experience/tsm_dark.png"
            title="Marketing Intern"
            timeline="2021"
          />
        </Grid>
        {/* Polyture */}
        <Grid item xs={12}>
          <WorkExperienceCard
            url="/assets/work_experience/polyture_dark.png"
            title="Software Engineer Intern"
            timeline="2021"
          />
        </Grid>
        {/* Christie's */}
        <Grid item xs={12}>
          <WorkExperienceCard
            url="/assets/work_experience/christies_dark.png"
            title="Asia Art Gallery Assistant"
            timeline="2021"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
