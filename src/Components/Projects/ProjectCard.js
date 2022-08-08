import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function ProjectCard(props) {
  return (
    <Card>
      <CardActionArea
        disableFocusRipple
        onClick={() => {
          props.setProject(props.project);
        }}
      >
        <Paper sx={{ p: { xs: 3, sm: 2 } }}>
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
                  height: { xs: 225, sm: 150 },
                  borderRadius: 1,
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
                <Typography color="primary" variant="body2" sx={{ pt: 3 }}>
                  {props.description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </CardActionArea>
    </Card>
  );
}
