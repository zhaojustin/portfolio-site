import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import LaunchIcon from "@mui/icons-material/Launch";

import BackButton from "./BackButton";

export default function HeyB(props) {
  return (
    <Box>
      {/* RETURN */}
      <BackButton setProject={props.setProject} />

      {/* IMAGE */}
      <Box sx={{ pt: 3 }}>
        <Box
          component="img"
          alt="Me"
          src="/assets/project_assets/heyB/heyb_landing.png"
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
          <Typography variant="title">heyB.</Typography>
          <Typography variant="subtitle1" color="secondary">
            July 2022
          </Typography>
        </Box>
      </Box>
      <Box sx={{ pt: 3 }}>
        <Typography variant="subtitle1">
          - Built on React.js and Material UI
        </Typography>
        <Typography variant="subtitle1">
          - Uses Email.js to send/receive messages from contact form
        </Typography>
        <Typography variant="subtitle1">
          - Custom player components display high-storage videos
        </Typography>
      </Box>
      <Box sx={{ pt: 3 }}>
        <Typography variant="subtitle1" color="secondary">
          HeyB. is a creative film and advertising agency that works with other
          startups to help define their brand through the use of film. I created
          the site as an initial landing page and starting point for the company
          to use.
        </Typography>
      </Box>

      {/* Link */}
      <Box sx={{ pt: 3 }}>
        <Button
          variant="outlined"
          size="large"
          color="pop"
          startIcon={<LaunchIcon />}
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
