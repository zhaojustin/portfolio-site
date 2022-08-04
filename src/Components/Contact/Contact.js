import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Form from "./Form";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

export default function Contact() {
  return (
    <Box sx={{ mt: 10 }}>
      <Box
        sx={{
          mt: 5,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        {/* FORM */}
        <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
          <Typography variant="h4">Contact Us</Typography>
          <Typography
            sx={{ mt: 3, mb: 3 }}
            variant="subtitle1"
            color="secondary"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>

          {/* FORM */}
          <Box>
            <Form />
            <Button
              sx={{ mt: { xs: 1, sm: 3 }, width: { xs: 150, sm: 200 } }}
              variant="contained"
              startIcon={<SendOutlinedIcon />}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
