import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function WorkExperienceCard(props) {
  return (
    <Paper sx={{ p: 4 }}>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          sm={5}
          sx={{ display: "flex", alignItems: "center", justify: "center" }}
        >
          <Box
            component="img"
            alt="Me"
            src={props.url}
            sx={{
              height: 75,
              borderRadius: 2,
            }}
          ></Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box>
            <Typography color="primary" variant="body1">
              {props.title}
            </Typography>
            <Typography color="secondary" variant="body2">
              {props.timeline}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
