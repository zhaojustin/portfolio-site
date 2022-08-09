import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Divider from "../../Util/Divider";

import { Link as RouterLink } from "react-router-dom";

import MouseIcon from "@mui/icons-material/Mouse";

export default function Home() {
  return (
    <Box sx={{ pt: { xs: 3, sm: 0 } }}>
      <Divider />
      <Typography color="primary" variant="title">
        Welcome to my site!
      </Typography>

      {/* INTRO */}
      <Box sx={{ pt: 7 }}>
        <Typography color="primary" variant="body1">
          Here you'll find a collection of things I've done, places I've worked
          at, photos I've taken, favorite food, etc.
        </Typography>
      </Box>

      {/* QUICK LINKS */}
      <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
        <Link component={RouterLink} underline="none" to="/About">
          <Button sx={{ mt: 5 }} size="large" color="pop" variant="outlined">
            Learn More
          </Button>
        </Link>
        <Link component={RouterLink} underline="none" to="/Projects">
          <Button sx={{ mt: 5 }} size="large" variant="outlined">
            Projects
          </Button>
        </Link>
        <Link component={RouterLink} underline="none" to="/Contact">
          <Button sx={{ mt: 5 }} size="large" variant="outlined">
            Contact
          </Button>
        </Link>
      </Stack>

      {/* CREDITS */}
      <Box sx={{ pt: { xs: 5, sm: 15 } }}>
        <Paper sx={{ p: 2 }}>
          <Stack direction={{ xs: "column", sm: "row" }} gap={3}>
            <Box
              component="img"
              alt="Me"
              src="/assets/ducks.webp"
              sx={{
                height: 100,
                borderRadius: 2,
              }}
            ></Box>
            <Box>
              <Typography variant="subtitle1">3D Model Credits:</Typography>
              <Link href="https://skfb.ly/onUop" underline="none">
                <Typography variant="subtitle2" color="secondary">
                  3D Model: Spirited Away Bath Time!
                </Typography>
              </Link>
              <Link
                href="https://sketchfab.com/sunnytrashpanda"
                underline="none"
              >
                <Typography variant="subtitle2" color="secondary">
                  Author: sunnytrashpanda
                </Typography>
              </Link>
              <Typography variant="subtitle2" color="secondary">
                License: CC Attribution
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Box>

      {/* TIP */}
      <Box sx={{ pt: 5 }}>
        <Stack direction="row" alignItems="center" gap={2}>
          <MouseIcon />
          <Typography color="secondary" variant="body1">
            Click, Drag, or Zoom the 3D model to play around with it!
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
