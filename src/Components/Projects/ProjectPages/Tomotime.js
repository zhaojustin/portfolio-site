import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";

import BackButton from "./BackButton";

export default function Tomotime(props) {
  return (
    <Box>
      {/* RETURN */}
      <BackButton setProject={props.setProject} />

      {/* IMAGE */}
      <Box sx={{ pt: 3 }}>
        <Box
          component="img"
          alt="Me"
          src="/assets/project_thumbnails/tomotime.png"
          sx={{
            width: "100%",
            borderRadius: 5,
          }}
        ></Box>
      </Box>

      {/* CONTENT */}
      <Box sx={{ pt: 3 }}>
        {/* Title */}
        <Box>
          <Typography variant="title">Tomotime</Typography>
          <Typography variant="subtitle1" color="secondary">
            May 2022
          </Typography>
        </Box>
      </Box>
      <Box sx={{ pt: 3 }}>
        <Typography variant="subtitle1">
          - Pitch Deck made for a fake startup
        </Typography>
        <Typography variant="subtitle1">
          - Project from Strategic Venture Society club at Stern
        </Typography>
      </Box>

      {/* Link */}
      <Box sx={{ pt: 3 }}>
        <Button
          variant="outlined"
          startIcon={<AttachFileOutlinedIcon />}
          color="pop"
          href={"/assets/project_assets/tomotime/PitchDeck.pdf"}
          target="_blank"
        >
          <Typography sx={{ pt: 0.1 }}>PDF Link</Typography>
        </Button>
      </Box>

      {/* RETURN */}
      <Box sx={{ pt: 2 }}>
        <BackButton setProject={props.setProject} />
      </Box>
    </Box>
  );
}
