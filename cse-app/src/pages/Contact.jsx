import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Chip,
  Stack,
  Alert,
} from "@mui/material";
import { useState } from "react";

const PRIMARY = "#123B6D";
const ACCENT = "#1e88e5";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ name: "", email: "", subject: "", message: "" });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      text: "D. Y. Patil College of Engineering & Technology, Kasaba Bawada, Kolhapur",
      color: PRIMARY,
    },
    { icon: "📞", title: "Phone", text: "+91 231 260 1300", color: ACCENT },
    { icon: "✉️", title: "Email", text: "cse@dypcet.ac.in", color: "#2e7d32" },
    { icon: "🕒", title: "Office Hours", text: "Mon – Sat, 9:00 AM – 5:00 PM", color: "#6a1b9a" },
  ];

  return (
    <Box sx={{ width: "100%", overflowX: "hidden", bgcolor: "#f4f6f9" }}>
      {/* Hero */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          background: `linear-gradient(135deg, ${PRIMARY} 0%, ${ACCENT} 100%)`,
          color: "white",
          py: { xs: 6, md: 9 },
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 220,
            height: 220,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,0.08)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -80,
            left: -40,
            width: 260,
            height: 260,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,0.06)",
          }}
        />

        <Container maxWidth={false} sx={{ position: "relative", px: { xs: 3, sm: 5, md: 8 } }}>
          <Chip
            label="GET IN TOUCH"
            sx={{
              color: "white",
              border: "1px solid rgba(255,255,255,0.35)",
              backgroundColor: "rgba(255,255,255,0.12)",
              fontWeight: 700,
              mb: 2,
            }}
          />
          <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" } }}>
            Contact CSE Department
          </Typography>
          <Typography
            sx={{
              mt: 2,
              opacity: 0.92,
              maxWidth: 600,
              mx: "auto",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.7,
            }}
          >
            D. Y. Patil College of Engineering & Technology, Kasaba Bawada, Kolhapur
          </Typography>
        </Container>
      </Box>

      <Container
        maxWidth={false}
        sx={{ px: { xs: 3, sm: 5, md: 8 }, mt: { xs: -4, md: -6 }, position: "relative", pb: { xs: 6, md: 8 } }}
      >
        {/* Contact info cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(4, 1fr)",
            },
            gap: 3,
            mb: { xs: 6, md: 8 },
          }}
        >
          {contactInfo.map((c) => (
            <Paper
              key={c.title}
              elevation={3}
              sx={{
                borderRadius: 4,
                textAlign: "center",
                p: 3.5,
                transition: "0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 16px 32px rgba(18,59,109,0.18)",
                },
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  mx: "auto",
                  mb: 2,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 26,
                  bgcolor: `${c.color}1A`,
                }}
              >
                {c.icon}
              </Box>
              <Typography variant="subtitle1" fontWeight="bold" color={PRIMARY}>
                {c.title}
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1, fontSize: "0.88rem", lineHeight: 1.6 }}>
                {c.text}
              </Typography>
            </Paper>
          ))}
        </Box>

        {/* Form + Map */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.4fr 1fr" },
            gap: 4,
            alignItems: "stretch",
          }}
        >
          {/* Form */}
          <Paper elevation={4} sx={{ borderRadius: 4, p: { xs: 3, sm: 4, md: 5 } }}>
            <Stack alignItems="center" spacing={1} sx={{ mb: 3 }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  bgcolor: `${PRIMARY}1A`,
                }}
              >
                💬
              </Box>
              <Typography variant="h5" fontWeight="bold" color={PRIMARY} textAlign="center">
                Send Us a Message
              </Typography>
              <Typography color="text.secondary" textAlign="center" variant="body2">
                We'd love to hear from you. Fill out the form below.
              </Typography>
            </Stack>

            <Box component="form" onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: 2.5,
                }}
              >
                <TextField
                  fullWidth
                  required
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />

                <TextField
                  fullWidth
                  required
                  type="email"
                  label="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />

                <Box sx={{ gridColumn: { xs: "1", sm: "1 / -1" } }}>
                  <TextField
                    fullWidth
                    required
                    label="Subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </Box>

                <Box sx={{ gridColumn: { xs: "1", sm: "1 / -1" } }}>
                  <TextField
                    fullWidth
                    required
                    multiline
                    rows={4}
                    label="Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                  />
                </Box>

                <Box sx={{ gridColumn: { xs: "1", sm: "1 / -1" } }}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                      py: 1.5,
                      bgcolor: PRIMARY,
                      fontWeight: 600,
                      borderRadius: 2,
                      textTransform: "none",
                      "&:hover": { bgcolor: "#0d2c52" },
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Box>

              {success && (
                <Alert severity="success" sx={{ mt: 3, borderRadius: 2 }}>
                  Message sent successfully!
                </Alert>
              )}
            </Box>
          </Paper>

          {/* Map */}
          <Paper
            elevation={4}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              minHeight: 380,
            }}
          >
            <Box
              sx={{
                background: `linear-gradient(135deg, ${PRIMARY} 0%, ${ACCENT} 100%)`,
                color: "white",
                px: 3,
                py: 2.5,
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Find Us Here
              </Typography>
            </Box>

            <Box
              component="iframe"
              title="DYPCET Location"
              src="https://www.google.com/maps?q=D.Y.Patil+College+of+Engineering+and+Technology+Kolhapur&output=embed"
              sx={{
                border: 0,
                flexGrow: 1,
                width: "100%",
                minHeight: 320,
              }}
              loading="lazy"
            />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;