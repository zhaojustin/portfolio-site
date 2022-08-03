import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Topbar from "./Header/Topbar";

export default function Wrapper() {
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
        <Box>
          <Topbar />
        </Box>
      </Container>
    </div>
  );
}
