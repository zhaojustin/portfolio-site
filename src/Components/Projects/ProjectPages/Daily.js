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
          src="/assets/project_assets/daily/daily.png"
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
          - Built on React.js and Material UI
        </Typography>
        <Typography variant="subtitle1">
          - Uses React Shards for front-end
        </Typography>
        <Typography variant="subtitle1">
          - Data is stored with Airtable API
        </Typography>
      </Box>
      <Box sx={{ pt: 3 }}>
        <Typography variant="subtitle1" color="secondary">
          After using my 2021 Boba Tracker for a year, I got into the habit of
          tracking my daily spendings and boba consumption. As a result, I
          created this app to help with coffee consumption as well as overall
          finances and purchases.
          <br />
          <br />
        </Typography>
        <Typography variant="subtitle1" color="secondary">
          I also included a section for a daily journal, where I summarize my
          day in one sentence. I did that so that I can make a word cloud at the
          end of the year. As of May, the word cloud looks like this:
        </Typography>
        <Box
          component="img"
          alt="Me"
          src="/assets/project_assets/daily/wordcloud.png"
          sx={{
            width: "100%",
            mt: 3,
            mb: 3,
            borderRadius: 5,
          }}
        ></Box>
      </Box>

      {/* RETURN */}
      <Box>
        <BackButton setProject={props.setProject} />
      </Box>
    </Box>
  );
}
