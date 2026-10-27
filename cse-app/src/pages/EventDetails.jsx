import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Chip,
  Paper,
  Stack,
  Divider,
} from "@mui/material";

const PRIMARY = "#123B6D";
const ACCENT = "#1e88e5";

const typeColors = {
  Workshop: "#ef6c00",
  Seminar: "#6a1b9a",
  Competition: "#c62828",
  Hackathon: "#00838f",
  "Guest Lecture": "#2e7d32",
};

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const events = {
    1: {
      name: "AI & ML Workshop",
      date: "25 August 2026",
      venue: "CSE Seminar Hall",
      type: "Workshop",
      description:
        "A workshop covering Artificial Intelligence, Machine Learning and their real-world applications.",
      images: [],
    },
    2: {
      name: "Coding Competition",
      date: "15 July 2026",
      venue: "Programming Lab",
      type: "Competition",
      description:
        "Students participated in a coding competition to improve their programming and problem-solving skills.",
      images: ["/images/coding1.jpg", "/images/coding2.jpg", "/images/coding3.jpg"],
    },
    3: {
      name: "Web Development Seminar",
      date: "20 June 2026",
      venue: "Seminar Hall",
      type: "Seminar",
      description:
        "An expert seminar covering modern web development technologies and career opportunities.",
      images: ["/images/web1.jpg", "/images/web2.jpg"],
    },
  };

  const event = events[id];

  // =====================================================
  // NOT FOUND STATE
  // =====================================================
  if (!event) {
    return (
      <Box sx={{ width: "100%", overflowX: "hidden", bgcolor: "#f4f6f9", minHeight: "70vh" }}>
        <Container maxWidth={false} sx={{ px: { xs: 3, sm: 5, md: 8 }, py: 10, textAlign: "center" }}>
          <Typography sx={{ fontSize: 56, mb: 2 }}>🔍</Typography>
          <Typography variant="h4" fontWeight="bold" color={PRIMARY} sx={{ mb: 1 }}>
            Event Not Found
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            The event you're looking for doesn't exist or may have been removed.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/events")}
            sx={{
              bgcolor: PRIMARY,
              textTransform: "none",
              fontWeight: 600,
              px: 4,
              py: 1.2,
              borderRadius: 2,
              "&:hover": { bgcolor: "#0d2c52" },
            }}
          >
            ← Back to Events
          </Button>
        </Container>
      </Box>
    );
  }

  const typeColor = typeColors[event.type] || ACCENT;

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
          background: `linear-gradient(135deg, ${typeColor} 0%, ${ACCENT} 100%)`,
          color: "white",
          py: { xs: 5, md: 7 },
        }}
      >
        <Box sx={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.08)" }} />
        <Box sx={{ position: "absolute", bottom: -80, left: -40, width: 260, height: 260, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.06)" }} />

        <Container maxWidth={false} sx={{ position: "relative", px: { xs: 3, sm: 5, md: 8 } }}>
          <Button
            onClick={() => navigate("/events")}
            sx={{
              color: "white",
              textTransform: "none",
              fontWeight: 600,
              mb: 3,
              pl: 0,
              "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
            }}
          >
            ← Back to Events
          </Button>

          <Chip
            label={event.type}
            sx={{ bgcolor: "rgba(255,255,255,0.22)", color: "white", fontWeight: 700, mb: 2 }}
          />

          <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { xs: "1.9rem", sm: "2.4rem", md: "2.9rem" } }}>
            {event.name}
          </Typography>

          <Stack direction="row" spacing={3} sx={{ mt: 3 }} flexWrap="wrap" useFlexGap>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography sx={{ fontSize: 18 }}>📅</Typography>
              <Typography sx={{ fontWeight: 500 }}>{event.date}</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography sx={{ fontSize: 18 }}>📍</Typography>
              <Typography sx={{ fontWeight: 500 }}>{event.venue}</Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <Container
        maxWidth={false}
        sx={{ px: { xs: 3, sm: 5, md: 8 }, py: { xs: 5, md: 7 }, mt: { xs: -3, md: -4 }, position: "relative" }}
      >
        <Paper
          elevation={4}
          sx={{
            borderRadius: 4,
            p: { xs: 3, sm: 4, md: 5 },
            maxWidth: 950,
            mx: "auto",
          }}
        >
          <Typography variant="h6" fontWeight="bold" color={PRIMARY} sx={{ mb: 1.5 }}>
            About This Event
          </Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.8, fontSize: "1rem" }}>
            {event.description}
          </Typography>

          {event.images.length > 0 && (
            <>
              <Divider sx={{ my: 4 }} />

              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
                <Typography sx={{ fontSize: 22 }}>🖼️</Typography>
                <Typography variant="h6" fontWeight="bold" color={PRIMARY}>
                  Event Gallery
                </Typography>
                <Chip
                  size="small"
                  label={`${event.images.length} photo${event.images.length > 1 ? "s" : ""}`}
                  sx={{ bgcolor: `${PRIMARY}1A`, color: PRIMARY, fontWeight: 600 }}
                />
              </Stack>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                  },
                  gap: 2.5,
                }}
              >
                {event.images.map((image, idx) => (
                  <Box
                    key={image}
                    sx={{
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(18,59,109,0.12)",
                      transition: "0.3s ease",
                      "&:hover": {
                        transform: "scale(1.03)",
                        boxShadow: "0 12px 28px rgba(18,59,109,0.22)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={image}
                      alt={`${event.name} photo ${idx + 1}`}
                      sx={{
                        width: "100%",
                        height: 220,
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </>
          )}

          {event.images.length === 0 && (
            <>
              <Divider sx={{ my: 4 }} />
              <Box sx={{ textAlign: "center", py: 4 }}>
                <Typography sx={{ fontSize: 36, mb: 1 }}>📷</Typography>
                <Typography color="text.secondary">
                  No photos available for this event yet.
                </Typography>
              </Box>
            </>
          )}
        </Paper>
      </Container>
    </Box>
  );
}

export default EventDetails;