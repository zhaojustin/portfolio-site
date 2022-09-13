import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActionArea from "@mui/material/CardActionArea";
import Paper from "@mui/material/Paper";

import Divider from "../Util/Divider";

import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";

export default function Photography() {
  return (
    <Box sx={{ pt: { xs: 3, sm: 0 } }}>
      {/* TITLE */}
      <Divider />
      <Stack direction="row" gap={2} alignItems="center">
        <CollectionsOutlinedIcon />
        <Typography color="primary" variant="title" sx={{ pt: 0.1 }}>
          Photography Site
        </Typography>
      </Stack>

      {/* INTRO */}
      <Box sx={{ pt: 7 }}>
        <Typography color="primary" variant="body1">
          Photography is one of the hobbies that I picked up during Covid
          quarantine. I got my first camera (Fujifilm xt-30), and have been
          shooting with it ever since.
        </Typography>
      </Box>

      {/* LINK */}
      <Box sx={{ pt: { xs: 4, sm: 7 } }}>
        <Card>
          <CardActionArea
            disableFocusRipple
            onClick={() => {
              window.open("http://photography.justinzhao.net", "_blank");
            }}
          >
            <Paper sx={{ p: { xs: 3, sm: 2 } }}>
              <Box
                component="img"
                alt="Me"
                src="/assets/photography.png"
                sx={{
                  width: "100%",
                  borderRadius: 1,
                }}
              ></Box>
              <Box sx={{ pt: 2 }}>
                <Typography color="primary" variant="body1">
                  http://photography.justinzhao.net
                </Typography>
                <Typography color="primary" variant="body2" sx={{ pt: 3 }}>
                  See some of the photos I've taken over the years here!
                </Typography>
              </Box>
            </Paper>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
}
