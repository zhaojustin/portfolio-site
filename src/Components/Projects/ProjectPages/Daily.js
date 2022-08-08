import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";

export default function Daily(props) {
  return (
    <Box>
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

      {/* CONTENT */}
      <Box>
        <Typography>Daily</Typography>
      </Box>
    </Box>
  );
}
