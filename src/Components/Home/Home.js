import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";

export default function Home() {
  const theme = useTheme();

  return (
    <Box>
      <Typography color="primary">Home</Typography>
    </Box>
  );
}
