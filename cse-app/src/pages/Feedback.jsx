import { useState } from "react";

import {
  Container,
  Typography,
  TextField,
  Button,
  Rating,
  Slider,
  Switch,
  Checkbox,
  FormControlLabel,
  Snackbar,
  Alert,
  CircularProgress,
  Box,
  Paper,
  Chip,
  Stack,
  Divider,
} from "@mui/material";

const PRIMARY = "#123B6D";
const ACCENT = "#1e88e5";
const SUCCESS = "#2e7d32";

function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(4);
  const [quality, setQuality] = useState(70);
  const [agree, setAgree] = useState(false);
  const [notify, setNotify] = useState(true);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const submit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setOpen(true);
      setName("");
      setEmail("");
      setRating(4);
      setQuality(70);
      setAgree(false);
    }, 1000);
  };

  const qualityLabel = (val) => {
    if (val >= 85) return { text: "Excellent", color: SUCCESS };
    if (val >= 60) return { text: "Good", color: ACCENT };
    if (val >= 35) return { text: "Average", color: "#ef6c00" };
    return { text: "Needs Improvement", color: "#c62828" };
  };

  const q = qualityLabel(quality);

  return (
    <Box sx={{ width: "100%", overflowX: "hidden", bgcolor: "#f4f6f9" }}>
      {/* =====================================================
          HERO
      ===================================================== */}
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
        <Box sx={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.08)" }} />
        <Box sx={{ position: "absolute", bottom: -80, left: -40, width: 260, height: 260, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.06)" }} />

        <Container maxWidth={false} sx={{ position: "relative", px: { xs: 3, sm: 5, md: 8 } }}>
          <Chip
            label="WE VALUE YOUR VOICE"
            sx={{
              color: "white",
              border: "1px solid rgba(255,255,255,0.35)",
              backgroundColor: "rgba(255,255,255,0.12)",
              fontWeight: 700,
              mb: 2,
            }}
          />
          <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" } }}>
            Student Feedback
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
            Help us improve — share your thoughts on academics, faculty and
            department experience.
          </Typography>
        </Container>
      </Box>

      {/* =====================================================
          FORM
      ===================================================== */}
      <Container
        maxWidth={false}
        sx={{ px: { xs: 3, sm: 5, md: 8 }, py: { xs: 4, md: 6 }, mt: { xs: -4, md: -6 }, position: "relative" }}
      >
        <Paper
          elevation={4}
          sx={{
            maxWidth: 720,
            mx: "auto",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          {/* Form header strip */}
          <Box
            sx={{
              background: `linear-gradient(135deg, ${PRIMARY} 0%, ${ACCENT} 100%)`,
              color: "white",
              px: { xs: 3, md: 4 },
              py: 3,
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                width: 52,
                height: 52,
                mx: "auto",
                mb: 1.5,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                bgcolor: "rgba(255,255,255,0.18)",
              }}
            >
              📝
            </Box>
            <Typography variant="h6" fontWeight="bold">
              Share Your Feedback
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.85, mt: 0.5 }}>
              Takes less than 2 minutes
            </Typography>
          </Box>

          <Box sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
            {/* Personal details */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 2.5,
              }}
            >
              <TextField
                fullWidth
                label="Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                fullWidth
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Overall experience */}
            <Box
              sx={{
                p: 2.5,
                borderRadius: 3,
                bgcolor: `${PRIMARY}08`,
                border: "1px solid",
                borderColor: `${PRIMARY}22`,
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
                <Typography sx={{ fontSize: 20 }}>⭐</Typography>
                <Typography fontWeight="bold" color={PRIMARY}>
                  Overall Experience
                </Typography>
              </Stack>
              <Rating
                value={rating}
                onChange={(e, value) => setRating(value)}
                size="large"
                sx={{ color: "#FFC107" }}
              />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                {rating}/5 — {["Poor", "Fair", "Good", "Very Good", "Excellent"][rating - 1] || "Not rated"}
              </Typography>
            </Box>

            {/* Teaching quality slider */}
            <Box
              sx={{
                mt: 3,
                p: 2.5,
                borderRadius: 3,
                bgcolor: `${ACCENT}08`,
                border: "1px solid",
                borderColor: `${ACCENT}22`,
              }}
            >
              <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography sx={{ fontSize: 20 }}>🎯</Typography>
                  <Typography fontWeight="bold" color={PRIMARY}>
                    Teaching Quality
                  </Typography>
                </Stack>
                <Chip
                  size="small"
                  label={`${quality}% · ${q.text}`}
                  sx={{ bgcolor: `${q.color}1A`, color: q.color, fontWeight: 700 }}
                />
              </Stack>
              <Slider
                value={quality}
                onChange={(e, value) => setQuality(value)}
                sx={{
                  color: ACCENT,
                  mt: 1,
                  "& .MuiSlider-thumb": {
                    boxShadow: "0 2px 8px rgba(30,136,229,0.4)",
                  },
                }}
              />
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Toggles */}
            <Stack spacing={1.5}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 2,
                  py: 1.5,
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: "grey.200",
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Typography sx={{ fontSize: 18 }}>🔔</Typography>
                  <Box>
                    <Typography fontWeight={600} sx={{ fontSize: "0.92rem" }}>
                      Department Notifications
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Get updates on events and announcements
                    </Typography>
                  </Box>
                </Stack>
                <Switch checked={notify} onChange={(e) => setNotify(e.target.checked)} />
              </Box>

              <FormControlLabel
                control={<Checkbox checked={agree} onChange={(e) => setAgree(e.target.checked)} />}
                label={
                  <Typography variant="body2" color="text.secondary">
                    I agree to submit this feedback and understand it may be shared with the department for improvement purposes.
                  </Typography>
                }
                sx={{ px: 1, alignItems: "flex-start", mt: 1 }}
              />
            </Stack>

            {/* Submit */}
            <Box textAlign="center" sx={{ mt: 4 }}>
              <Button
                variant="contained"
                disabled={!agree || loading}
                onClick={submit}
                size="large"
                sx={{
                  px: 5,
                  py: 1.3,
                  borderRadius: 2,
                  fontWeight: 600,
                  textTransform: "none",
                  bgcolor: PRIMARY,
                  minWidth: 200,
                  "&:hover": { bgcolor: "#0d2c52" },
                  "&.Mui-disabled": { bgcolor: "grey.300" },
                }}
              >
                {loading ? <CircularProgress size={22} sx={{ color: "white" }} /> : "Submit Feedback"}
              </Button>
              {!agree && (
                <Typography variant="caption" display="block" sx={{ mt: 1.5, color: "text.secondary" }}>
                  Please agree to the terms above to submit
                </Typography>
              )}
            </Box>
          </Box>
        </Paper>
      </Container>

      {/* Success snackbar */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setOpen(false)}
          sx={{ borderRadius: 2 }}
        >
          Feedback submitted successfully! 🎉
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Feedback;