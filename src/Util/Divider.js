import Box from "@mui/material/Box";
import { Divider as MUIDivider } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Divider() {
  const theme = useTheme();

  return (
    <Box sx={{ pb: { xs: 3, sm: 1.5 } }}>
      <MUIDivider
        sx={{ borderBottomWidth: 3, borderColor: theme.palette.pop.main }}
      />
    </Box>
  );
}
