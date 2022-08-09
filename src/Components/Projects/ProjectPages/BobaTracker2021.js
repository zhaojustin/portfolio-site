import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import BackButton from "./BackButton";

import LaunchIcon from "@mui/icons-material/Launch";

export default function BobaTracker2021(props) {
  return (
    <Box>
      {/* RETURN */}
      <BackButton setProject={props.setProject} />

      {/* IMAGE */}
      <Box sx={{ pt: 3 }}>
        <Box
          component="img"
          alt="Me"
          src="/assets/project_assets/bobatracker2021/bobatracker_landing.png"
          sx={{
            width: "100%",
            borderRadius: 5,
          }}
        ></Box>
      </Box>

      {/* CONTENT */}
      <Box sx={{ pt: 3 }}>
        {/* Title */}
        <Box>
          <Typography variant="title">Boba Tracker - 2021</Typography>
          <Typography variant="subtitle1" color="secondary">
            January 2021
          </Typography>
        </Box>
      </Box>
      <Box sx={{ pt: 3 }}>
        <Typography variant="subtitle1">
          - Built on Pug.js and Svelte
        </Typography>
        <Typography variant="subtitle1">
          - Uses Google Sheets API to store data
        </Typography>
        <Typography variant="subtitle1">
          - Used Figma to graph and visualize the data
        </Typography>
      </Box>
      <Box sx={{ pt: 3 }}>
        <Typography variant="subtitle1" color="secondary">
          To give a little context, I realized in 2020 that I had been spending
          too much money on boba. I decided to create a tool that I would use to
          track my consumption of boba throughout the year. Every time I drank
          boba, I would log it into the app. After a year of diligently
          inputting data, I came out with this data:
        </Typography>
        <Box
          component="img"
          alt="Me"
          src="/assets/project_assets/bobatracker2021/data.png"
          sx={{
            height: { xs: 325, md: 425 },
            mt: 3,
            mb: 3,
            borderRadius: 5,
          }}
        ></Box>
        <Typography variant="subtitle1" color="secondary">
          Overall, I think the project was a success and I was also able to see
          some interesting data about my preferences and consumption per month.
        </Typography>
      </Box>

      {/* Link */}
      <Box sx={{ pt: 3 }}>
        <Button
          variant="outlined"
          size="large"
          color="pop"
          startIcon={<LaunchIcon />}
          onClick={() => {
            window.location.href = "http://boba.justinzhao.net";
          }}
        >
          <Typography sx={{ pt: 0.1 }}>See it Here</Typography>
        </Button>
      </Box>

      {/* RETURN */}
      <Box sx={{ pt: 2 }}>
        <BackButton setProject={props.setProject} />
      </Box>
    </Box>
  );
}
