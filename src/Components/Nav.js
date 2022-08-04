import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Nav() {
  const theme = useTheme();

  return (
    <Stack direction="column">
      <Link component={RouterLink} underline="none" to="/">
        <Typography color="primary" variant="subtitle1">
          Home
        </Typography>
      </Link>
      <Link component={RouterLink} underline="none" to="/About">
        <Typography color="primary" variant="subtitle1">
          About Me
        </Typography>
      </Link>
      <Link component={RouterLink} underline="none" to="/Projects">
        <Typography color="primary" variant="subtitle1">
          Projects
        </Typography>
      </Link>
      <Link component={RouterLink} underline="none" to="/Photography">
        <Typography color="primary" variant="subtitle1">
          Photography
        </Typography>
      </Link>
      <Link component={RouterLink} underline="none" to="/More">
        <Typography color="primary" variant="subtitle1">
          More
        </Typography>
      </Link>
      <Link component={RouterLink} underline="none" to="/Contact">
        <Typography color="primary" variant="subtitle1">
          Contact
        </Typography>
      </Link>
    </Stack>
  );
}
