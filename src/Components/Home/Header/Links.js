import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Topbar() {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Box sx={{ mr: 6 }}>
        <Link href="#" color="inherit" underline="none">
          <Typography variant="subtitle1">About</Typography>
        </Link>
      </Box>
      <Box sx={{ mr: 6 }}>
        <Link href="#" color="inherit" underline="none">
          <Typography variant="subtitle1">Works</Typography>
        </Link>
      </Box>
      <Box>
        <Button variant="contained">Book a Call</Button>
      </Box>
    </Box>
  );
}
