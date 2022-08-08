import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Divider from "../../Util/Divider";

export default function Home() {
  return (
    <Box sx={{ pt: { xs: 3, sm: 0 } }}>
      <Divider />
      <Typography color="primary" variant="title">
        Welcome to my site!
      </Typography>

      {/* INTRO */}
      <Box sx={{ pt: 5 }}>
        <Typography color="primary" variant="body1">
          Here you'll find a collection of things I've done, places I've worked
          at, photos I've taken, etc.
        </Typography>
      </Box>
    </Box>
  );
}
