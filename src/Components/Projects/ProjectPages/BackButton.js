import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";

export default function BackButton(props) {
  return (
    <Box sx={{ pt: 1 }}>
      {/* BACK BUTTON */}
      <Button
        variant="outlined"
        startIcon={<ChevronLeftOutlinedIcon />}
        onClick={() => {
          props.setProject("");
        }}
      >
        <Typography sx={{ pt: 0.1 }}>Back</Typography>
      </Button>
    </Box>
  );
}
