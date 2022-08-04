import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Form() {
  return (
    <Box sx={{ mt: { xs: 4, sm: 6 } }}>
      <Stack spacing={{ xs: 1, sm: 3 }}>
        <TextField
          sx={{ width: { xs: "80%", sm: "70%" } }}
          required
          id="name"
          placeholder="Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ mr: 2 }}>
                <SentimentSatisfiedAltOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          sx={{ width: { xs: "80%", sm: "70%" } }}
          required
          id="email"
          placeholder="Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ mr: 2 }}>
                <EmailOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          sx={{ width: { xs: "100%", sm: "100%" } }}
          required
          multiline
          rows={4}
          id="message"
          placeholder="Say something to us!"
        />
      </Stack>
    </Box>
  );
}
