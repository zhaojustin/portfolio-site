import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";

import Divider from "../../Util/Divider";
import Socials from "./Socials";

import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [replyto, setReplyto] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    var templateParams = {
      name: name,
      reply_to: replyto,
      message: message,
    };

    if (name != "" && replyto != "" && message != "" && isValidEmail(replyto)) {
      emailjs
        .send(
          "service_a36o8yu",
          "template_c4oi5td",
          templateParams,
          "JVWUeA33MZSKe4OIT"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            setName("");
            setReplyto("");
            setMessage("");
            setError("");
            setSuccess("Success! You should hear back from Justin shortly.");
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    } else {
      setSuccess("");
      setError(
        "Please fill out all required entries, or check that you have inputted a valid email."
      );
    }
  };

  return (
    <Box sx={{ pt: { xs: 3, sm: 0 } }}>
      {/* TITLE */}
      <Divider />
      <Typography color="primary" variant="title">
        Social Links
      </Typography>

      {/* SOCIALS */}
      <Socials />

      {/* CONTACT */}
      <Divider />
      <Typography color="primary" variant="title">
        Send me a Message
      </Typography>

      {/* MESSAGE ME */}
      <Box sx={{ pt: { xs: 3, sm: 5 } }}>
        <Box sx={{ width: { xs: "75%", sm: "50%" } }}>
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            required
            sx={{ mb: 2 }}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Your Email"
            variant="outlined"
            fullWidth
            required
            sx={{ mb: 2 }}
            onChange={(e) => setReplyto(e.target.value)}
          />
        </Box>

        <TextField
          id="outlined-textarea"
          label="Message"
          placeholder="Placeholder"
          multiline
          fullWidth
          required
          rows={4}
          sx={{ mb: 2 }}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          variant="contained"
          size="large"
          endIcon={<SendIcon />}
          onClick={sendEmail}
        >
          Send
        </Button>
        <Typography variant="subtitle1" color="#FF9494" sx={{ pt: 2, pb: 2 }}>
          {error}
        </Typography>
        <Typography variant="subtitle1" color="#00d170" sx={{ pt: 2, pb: 2 }}>
          {success}
        </Typography>
      </Box>
    </Box>
  );
}

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
