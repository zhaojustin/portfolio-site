import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Socials() {
  return (
    <Box sx={{ pt: { xs: 3, sm: 5 }, pb: { xs: 5, sm: 10 } }}>
      <Grid container spacing={2}>
        {/* Instagram */}
        <Grid item xs={12} sm={6}>
          <Stack direction="row" alignItems="center" gap={2}>
            <Instagram />
            <Link href="https://instagram.com/justinzaho" underline="none">
              <Typography variant="body1">Instagram</Typography>
            </Link>
          </Stack>
        </Grid>

        {/* Twitter */}
        <Grid item xs={12} sm={6}>
          <Stack direction="row" alignItems="center" gap={2}>
            <Twitter />
            <Link href="https://twitter.com/justinzhao_" underline="none">
              <Typography variant="body1">Twitter</Typography>
            </Link>
          </Stack>
        </Grid>

        {/* LinkedIn */}
        <Grid item xs={12} sm={6}>
          <Stack direction="row" alignItems="center" gap={2}>
            <LinkedIn />
            <Link
              href="https://www.linkedin.com/in/justin-zhao-68239a18b/"
              underline="none"
            >
              <Typography variant="body1">LinkedIn</Typography>
            </Link>
          </Stack>
        </Grid>

        {/* Github */}
        <Grid item xs={12} sm={6}>
          <Stack direction="row" alignItems="center" gap={2}>
            <GitHub />
            <Link href="https://github.com/zhaojustin" underline="none">
              <Typography variant="body1">Github</Typography>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
