import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Divider from "../../Util/Divider";

import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";

export default function More() {
  return (
    <Box sx={{ pt: { xs: 3, sm: 0 } }}>
      {/* TITLE */}
      <Divider />
      <Stack direction="row" gap={2} alignItems="center">
        <BuildOutlinedIcon />
        <Typography color="primary" variant="title" sx={{ pt: 0.1 }}>
          Under Construction...
        </Typography>
      </Stack>
    </Box>
  );
}
