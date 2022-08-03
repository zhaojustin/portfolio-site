import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Landing() {
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
