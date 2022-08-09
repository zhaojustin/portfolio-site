import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import BackButton from "./BackButton";

import LaunchIcon from "@mui/icons-material/Launch";

export default function Covid(props) {
  return (
    <Box>
      {/* RETURN */}
      <BackButton setProject={props.setProject} />

      {/* IMAGE */}
      <Box sx={{ pt: 3 }}>
        <Box
          component="img"
          alt="Me"
          src="/assets/project_assets/covid/covid.png"
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
          <Typography variant="title">U.S. States Covid Data</Typography>
          <Typography variant="subtitle1" color="secondary">
            November 2020
          </Typography>
        </Box>
      </Box>
      <Box sx={{ pt: 3 }}>
        <Typography variant="subtitle1">
          - Built using vanilla HTML/CSS and UI Kit
        </Typography>
        <Typography variant="subtitle1">
          - Uses Covid Tracking Project API to get data
        </Typography>
      </Box>
      <Box sx={{ pt: 3 }}>
        <Typography variant="body1" color="secondary">
          In fall of 2020, I was at NYU. New York City had just somewhat
          recovered from a huge initial wave of cases--they were one of the
          earliest places to be hit by Covid. As a result, the guidelines for
          inter-state travel were strict, yet confusing.
          <br />
          <br />
          You had to quarantine if you're from a state where:
          <br />
          <br />
        </Typography>
        <Typography variant="p" color="secondary">
          1. 10 positive cases per day per 100k residents based on the 7 day
          rolling count
        </Typography>
        <Typography variant="body1" color="secondary">
          2. 10% positivity rate
          <br />
          <br />
        </Typography>

        <Typography variant="body1" color="secondary">
          To me, these guidelines from New York State government were confusing,
          especially to college students. It was especially important because
          around this time, November 2020, was when students were deciding
          whether or not to go home for winter break.
          <br />
          <br />
        </Typography>

        <Typography variant="body1" color="secondary">
          If you wanted to go home and had to quarantine for 2 weeks after
          coming back, you would essentially be losing half of your break, and
          that round-trip plane ticket and risk of giving Covid to your family
          may not be worth it anymore.
          <br />
          <br />
        </Typography>

        <Typography variant="body1" inline color="secondary">
          So, I made this tool to make it easy to see whether or not you had to
          quarantine coming from each state. Each state in the table on my site
          was marked as either
          <Typography variant="body1" component="span" color="#00FF00">
            {" "}
            green{" "}
          </Typography>
          or
          <Typography variant="body1" component="span" color="#ff0000">
            {" "}
            red
          </Typography>
          , so students didn't have to do the confusing math about a 'rolling
          7-day Covid average' themselves.
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
            window.location.href = "http://covid.justinzhao.net";
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
