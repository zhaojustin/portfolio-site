import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";

export default function Tomotime(props) {
  let itemData = [];
  for (var i = 1; i <= 20; i++) {
    itemData.push({
      img: "/assets/project_assets/tomotime/PitchDeck-" + i + ".jpg",
      title: "PitchDeck-" + i,
    });
  }

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
        <Button
          variant="outlined"
          startIcon={<AttachFileOutlinedIcon />}
          href={"/assets/project_assets/tomotime/PitchDeck.pdf"}
          target="_blank"
        >
          <Typography sx={{ pt: 0.1 }}>PDF Link</Typography>
        </Button>
      </Box>
    </Box>
  );
}
