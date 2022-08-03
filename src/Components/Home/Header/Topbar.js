import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Links from "./Links";

export default function Topbar() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      {/* LOGO */}
      <Box>
        <Typography variant="logo">Tonedeaf</Typography>
      </Box>

      {/* LINKS */}
      <Links />
    </Box>
  );
}
