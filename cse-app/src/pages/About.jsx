import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Paper,
} from "@mui/material";

const PRIMARY = "#123B6D";
const ACCENT = "#1e88e5";
const SUCCESS = "#2e7d32";

function About() {
  const sections = [
    {
      icon: "🏛️",
      title: "Department Overview",
      text: "The Department of Computer Science & Engineering provides quality education in programming, software development, artificial intelligence, data science and emerging technologies.",
      color: PRIMARY,
    },
    {
      icon: "🎯",
      title: "Vision",
      text: "To develop skilled and innovative computer science professionals.",
      color: ACCENT,
    },
    {
      icon: "🚀",
      title: "Mission",
      text: "To provide quality education, practical knowledge, research opportunities and industry exposure.",
      color: SUCCESS,
    },
  ];

  const values = [
    { icon: "📚", title: "Academics", text: "Structured curriculum aligned with industry needs." },
    { icon: "🔬", title: "Research", text: "Encouraging innovation and applied problem solving." },
    { icon: "🤝", title: "Industry Ties", text: "Collaborations, internships and expert sessions." },
    { icon: "🌱", title: "Growth", text: "Continuous learning through workshops and projects." },
  ];

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
            label="CSE DEPARTMENT"
            sx={{
              color: "white",
              border: "1px solid rgba(255,255,255,0.35)",
              backgroundColor: "rgba(255,255,255,0.12)",
              fontWeight: 700,
              mb: 2,
            }}
          />

          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" } }}
          >
            About CSE Department
          </Typography>

          <Typography
            sx={{
              mt: 2,
              opacity: 0.92,
              maxWidth: 650,
              mx: "auto",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.7,
            }}
          >
            Building skilled, innovative and industry-ready computer science
            professionals through quality education and hands-on experience.
          </Typography>
        </Container>
      </Box>

      {/* =====================================================
          OVERVIEW / VISION / MISSION
      ===================================================== */}
      <Container
        maxWidth={false}
        sx={{ px: { xs: 3, sm: 5, md: 8 }, py: { xs: 6, md: 8 }, mt: { xs: -4, md: -6 }, position: "relative" }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {sections.map((s) => (
            <Card
              key={s.title}
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 2px 12px rgba(18,59,109,0.08)",
                transition: "0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 16px 32px rgba(18,59,109,0.18)",
                },
              }}
            >
              <Box
                sx={{
                  background: `linear-gradient(135deg, ${s.color} 0%, ${ACCENT} 100%)`,
                  color: "white",
                  px: 3,
                  py: 3,
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    mx: "auto",
                    mb: 1.5,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 26,
                    bgcolor: "rgba(255,255,255,0.18)",
                  }}
                >
                  {s.icon}
                </Box>
                <Typography variant="h6" fontWeight="bold">
                  {s.title}
                </Typography>
              </Box>

              <CardContent sx={{ flexGrow: 1, py: 3 }}>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8, fontSize: "0.95rem" }}>
                  {s.text}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      {/* =====================================================
          WHAT WE FOCUS ON
      ===================================================== */}
      <Box sx={{ py: { xs: 6, md: 8 }, width: "100%" }}>
        <Container maxWidth={false} sx={{ px: { xs: 3, sm: 5, md: 8 } }}>
          <Paper
            elevation={3}
            sx={{
              borderRadius: 5,
              py: 2,
              px: 3,
              mb: 6,
              maxWidth: 700,
              mx: "auto",
              textAlign: "center",
            }}
          >
            <Chip
              label="WHAT WE FOCUS ON"
              size="small"
              sx={{ bgcolor: `${PRIMARY}1A`, color: PRIMARY, fontWeight: 700, mb: 1.5 }}
            />
            <Typography variant="h5" fontWeight="bold" color={PRIMARY} sx={{ mb: 1 }}>
              Our Focus Areas
            </Typography>
            <Typography color="text.secondary" variant="body2" sx={{ lineHeight: 1.7 }}>
              A well-rounded approach combining academics, research, industry
              exposure and continuous growth.
            </Typography>
          </Paper>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 3,
            }}
          >
            {values.map((v) => (
              <Card
                key={v.title}
                sx={{
                  borderRadius: 4,
                  textAlign: "center",
                  boxShadow: "0 2px 12px rgba(18,59,109,0.08)",
                  transition: "0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 16px 32px rgba(18,59,109,0.18)",
                  },
                }}
              >
                <CardContent sx={{ py: 4 }}>
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
                      bgcolor: `${PRIMARY}1A`,
                    }}
                  >
                    {v.icon}
                  </Box>
                  <Typography variant="h6" fontWeight="bold">
                    {v.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 1.5, fontSize: "0.88rem", lineHeight: 1.6 }}>
                    {v.text}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* =====================================================
          CLOSING BANNER
      ===================================================== */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          background: `linear-gradient(135deg, #071e49 0%, ${PRIMARY} 55%, ${ACCENT} 100%)`,
          color: "white",
          textAlign: "center",
          py: { xs: 6, md: 7 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -60,
            left: -60,
            width: 220,
            height: 220,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,0.06)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -80,
            right: -40,
            width: 260,
            height: 260,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,0.06)",
          }}
        />

        <Container maxWidth={false} sx={{ position: "relative", px: { xs: 3, sm: 5, md: 8 } }}>
          <Typography sx={{ fontSize: 40, mb: 1 }}>🎓</Typography>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ mb: 1.5, fontSize: { xs: "1.6rem", md: "2.1rem" } }}
          >
            Shaping Future Engineers
          </Typography>
          <Typography sx={{ maxWidth: 650, mx: "auto", opacity: 0.9, lineHeight: 1.7, fontSize: { xs: "0.9rem", md: "1rem" } }}>
            Committed to academic excellence, innovation and holistic
            development of every CSE student.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default About;