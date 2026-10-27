import {
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  Box,
  Chip,
  Divider,
  Paper,
  Stack,
} from "@mui/material";

const PRIMARY = "#123B6D";
const ACCENT = "#1e88e5";
const SUCCESS = "#2e7d32";

function Placements() {
  // Testimonials are illustrative placeholders — replace with real,
  // consented student quotes from your T&P Cell when available.
  const students = [
    {
      name: "CSE Graduate, Batch 2025",
      company: "TCS",
      role: "Software Developer",
      package: "6 LPA",
      year: "2025",
      experience:
        "The placement training helped me improve my coding, aptitude and interview skills. Mock interviews gave me confidence during the actual interview.",
      rating: 5,
    },
    {
      name: "CSE Graduate, Batch 2025",
      company: "Infosys",
      role: "System Engineer",
      package: "5 LPA",
      year: "2025",
      experience:
        "Faculty members continuously guided us throughout the placement process. The technical sessions were very useful for preparing for interviews.",
      rating: 4,
    },
    {
      name: "CSE Graduate, Batch 2025",
      company: "Tech Mahindra",
      role: "Software Engineer",
      package: "5.5 LPA",
      year: "2025",
      experience:
        "Regular coding practice and aptitude sessions helped me prepare for company recruitment tests. I would recommend juniors to start preparation early.",
      rating: 5,
    },
  ];

  const recruiters = [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Capgemini",
    "Cognizant",
    "Tech Mahindra",
    "Mahindra & Mahindra",
    "Tata Technologies",
    "L&T Infotech",
    "Persistent",
    "Deloitte",
  ];

  // Institution-wide figures (partial 2026 data, released by DYPCET T&P Cell)
  const stats = [
    { value: "415", title: "Job Offers (2026, partial)" },
    { value: "65", title: "Recruiting Companies (2026)" },
    { value: "₹8.5 LPA", title: "Highest Package (2026)" },
    { value: "₹5.2 LPA", title: "Average Package (2026)" },
  ];

  const tips = [
    "Practice coding problems regularly.",
    "Build strong technical projects.",
    "Prepare aptitude and logical reasoning.",
    "Create a good resume.",
    "Practice mock interviews.",
    "Improve communication skills.",
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
            label="CAREER SUCCESS"
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
            CSE Placements
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
            Placement opportunities, student experiences and career success
            stories.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 5, md: 8 } }}>
        {/* =====================================================
            STATISTICS
        ===================================================== */}
        <Box sx={{ mt: { xs: -4, md: -6 }, position: "relative", pb: { xs: 6, md: 8 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr 1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 3,
            }}
          >
            {stats.map((s) => (
              <Paper
                key={s.title}
                elevation={3}
                sx={{
                  textAlign: "center",
                  p: { xs: 2.5, md: 3.5 },
                  borderRadius: 4,
                  transition: "0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 16px 32px rgba(18,59,109,0.18)",
                  },
                }}
              >
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "2.1rem" },
                    background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.value}
                </Typography>
                <Typography sx={{ mt: 1, fontWeight: 600, color: "text.secondary", fontSize: { xs: "0.75rem", md: "0.85rem" }, lineHeight: 1.4 }}>
                  {s.title}
                </Typography>
              </Paper>
            ))}
          </Box>

          <Typography
            sx={{
              mt: 3,
              textAlign: "center",
              color: "text.secondary",
              fontSize: "0.78rem",
              fontStyle: "italic",
            }}
          >
            Figures reflect partially released 2026 institution-wide placement data. Contact the T&P Cell for branch-wise CSE figures.
          </Typography>
        </Box>

        {/* =====================================================
            RECRUITERS
        ===================================================== */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <Box sx={{ textAlign: "center", mb: 5 }}>
            <Chip
              label="TOP EMPLOYERS"
              size="small"
              sx={{ bgcolor: `${PRIMARY}1A`, color: PRIMARY, fontWeight: 700, mb: 1.5 }}
            />
            <Typography
              variant="h3"
              fontWeight="bold"
              color={PRIMARY}
              sx={{ fontSize: { xs: "1.9rem", md: "2.5rem" } }}
            >
              Our Recruiters
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr 1fr",
                sm: "repeat(3, 1fr)",
                md: "repeat(6, 1fr)",
              },
              gap: 2,
            }}
          >
            {recruiters.map((company) => (
              <Paper
                key={company}
                elevation={0}
                sx={{
                  textAlign: "center",
                  p: 2.5,
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "grey.200",
                  transition: "0.3s ease",
                  "&:hover": {
                    borderColor: ACCENT,
                    boxShadow: "0 12px 28px rgba(18,59,109,0.12)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Typography fontWeight="bold" color={PRIMARY} sx={{ fontSize: "0.85rem" }}>
                  {company}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>

        {/* =====================================================
            STUDENT EXPERIENCES
        ===================================================== */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <Box sx={{ textAlign: "center", mb: 5 }}>
            <Chip
              label="TESTIMONIALS"
              size="small"
              sx={{ bgcolor: `${PRIMARY}1A`, color: PRIMARY, fontWeight: 700, mb: 1.5 }}
            />
            <Typography
              variant="h3"
              fontWeight="bold"
              color={PRIMARY}
              sx={{ fontSize: { xs: "1.9rem", md: "2.5rem" }, mb: 1 }}
            >
              Student Placement Experiences
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 600, mx: "auto" }}>
              Experiences and advice from our placed students.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 4,
            }}
          >
            {students.map((student, idx) => (
              <Card
                key={idx}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(18,59,109,0.08)",
                  transition: "0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 16px 32px rgba(18,59,109,0.18)",
                  },
                }}
              >
                {/* Header strip */}
                <Box
                  sx={{
                    position: "relative",
                    background: `linear-gradient(135deg, ${PRIMARY} 0%, ${ACCENT} 100%)`,
                    color: "white",
                    px: 2.5,
                    pt: 2.5,
                    pb: 4.5,
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar
                      sx={{
                        width: 56,
                        height: 56,
                        bgcolor: "rgba(255,255,255,0.2)",
                        fontWeight: 800,
                        fontSize: "1.3rem",
                        border: "2px solid rgba(255,255,255,0.4)",
                      }}
                    >
                      🎓
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold" sx={{ fontSize: "0.95rem" }}>
                        {student.name}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.85 }}>
                        Batch {student.year}
                      </Typography>
                    </Box>
                  </Stack>

                  {/* Company chip badge overlapping bottom */}
                  <Chip
                    label={student.company}
                    sx={{
                      position: "absolute",
                      right: 20,
                      bottom: -16,
                      bgcolor: "white",
                      color: PRIMARY,
                      fontWeight: 700,
                      boxShadow: 3,
                    }}
                  />
                </Box>

                <CardContent sx={{ flexGrow: 1, pt: 3.5 }}>
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }} flexWrap="wrap" useFlexGap>
                    <Chip
                      size="small"
                      label={student.package}
                      sx={{ bgcolor: `${SUCCESS}1A`, color: SUCCESS, fontWeight: 700 }}
                    />
                  </Stack>

                  <Typography variant="body2" sx={{ mb: 2 }}>
                    <b>Role:</b> {student.role}
                  </Typography>

                  <Divider sx={{ mb: 2 }} />

                  <Typography
                    color="text.secondary"
                    sx={{ lineHeight: 1.7, fontSize: "0.9rem", fontStyle: "italic" }}
                  >
                    "{student.experience}"
                  </Typography>

                  <Box sx={{ mt: 2.5 }}>
                    <Rating value={student.rating} readOnly size="small" />
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* =====================================================
            PLACEMENT TIPS
        ===================================================== */}
        <Paper
          elevation={0}
          sx={{
            mb: { xs: 8, md: 10 },
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            background: `linear-gradient(135deg, #071e49 0%, ${PRIMARY} 55%, ${ACCENT} 100%)`,
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontSize: 38, mb: 1 }}>💡</Typography>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ mb: 4, fontSize: { xs: "1.6rem", md: "2.1rem" } }}
          >
            Placement Tips from Students
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2,
              maxWidth: 900,
              mx: "auto",
            }}
          >
            {tips.map((tip, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  textAlign: "left",
                  bgcolor: "rgba(255,255,255,0.08)",
                  borderRadius: 2,
                  px: 2,
                  py: 1.5,
                }}
              >
                <Typography sx={{ fontSize: 18 }}>✅</Typography>
                <Typography sx={{ fontSize: "0.92rem", opacity: 0.95 }}>{tip}</Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Placements;