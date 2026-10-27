import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

const PRIMARY = "#123B6D";
const ACCENT = "#1e88e5";

function Faculty() {
  const faculty = [
    {
      name: "Prof. Radhika Dhanal",
      designation: "Associate Professor & HOD",
      qualification: "M.E. (CSE), PhD (CSE)",
      specialization: "Automata Theory, Computer Algorithms",
    },
    {
      name: "Mr. K. T. Mane",
      designation: "Assistant Professor",
      qualification: "M.E. (CSE), PhD (Pursuing)",
      specialization:
        "Big Data Analytics, Cloud Computing, Full Stack Development",
    },
    {
      name: "Dr. Shobha B. Patil",
      designation: "Assistant Professor",
      qualification: "PhD (CSE), M.E. (CSE)",
      specialization: "Database Engineering, Web Usage Mining",
    },
    {
      name: "Dr. Sunny B. Mohite",
      designation: "Assistant Professor",
      qualification: "B.E., M.E. (CSE), PhD",
      specialization:
        "Full Stack Development, Cloud Computing, Agile Technology",
    },
    {
      name: "Mrs. Nandini N. Patil",
      designation: "Assistant Professor",
      qualification: "M.E. (CSE), PhD (Pursuing)",
      specialization: "Computer Networks, Blockchain Technology",
    },
    {
      name: "Dr. Kapil B. Kadam",
      designation: "Assistant Professor",
      qualification: "B.E. (CSE), M.Tech. (CSE), PhD – IIT Bombay",
      specialization:
        "Computer Science & Engineering, Educational Technology",
    },
  ];

  const getInitials = (name) =>
    name
      .replace("Prof. ", "")
      .replace("Dr. ", "")
      .replace("Mr. ", "")
      .replace("Mrs. ", "")
      .split(" ")
      .map((word) => word[0])
      .slice(0, 2)
      .join("");

  return (
    <Box sx={{ minHeight: "calc(100vh - 64px)", backgroundColor: "#f4f6f9", pb: 8 }}>
      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${PRIMARY} 0%, ${ACCENT} 100%)`,
          color: "white",
          py: { xs: 6, md: 9 },
          px: 2,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
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

        <Container maxWidth="lg" sx={{ position: "relative" }}>
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
            sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, mb: 2 }}
          >
            Our Faculty
          </Typography>

          <Typography
            sx={{
              maxWidth: 650,
              mx: "auto",
              opacity: 0.92,
              lineHeight: 1.7,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
            }}
          >
            Meet our experienced and dedicated faculty members who guide
            students through academic learning, innovation and professional
            development.
          </Typography>
        </Container>
      </Box>

      {/* =====================================================
          FACULTY SECTION
      ===================================================== */}
      <Container maxWidth="lg" sx={{ mt: { xs: -4, md: -6 }, position: "relative" }}>
        {/* Section header pill */}
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
            label="TEACHING FACULTY"
            size="small"
            sx={{ bgcolor: `${PRIMARY}1A`, color: PRIMARY, fontWeight: 700, mb: 1.5 }}
          />
          <Typography variant="h5" fontWeight="bold" color={PRIMARY} sx={{ mb: 1 }}>
            Meet Our Faculty
          </Typography>
          <Typography color="text.secondary" variant="body2" sx={{ lineHeight: 1.7 }}>
            Our faculty combines academic expertise, technical knowledge and
            industry-oriented perspectives to support student growth.
          </Typography>
        </Paper>

        {/* Faculty Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {faculty.map((member, index) => {
            const isHOD = index === 0;
            return (
              <Card
                key={member.name}
                sx={{
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
                    background: isHOD
                      ? `linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)`
                      : `linear-gradient(135deg, ${PRIMARY} 0%, ${ACCENT} 100%)`,
                    color: "white",
                    px: 2.5,
                    pt: 2.5,
                    pb: 4.5,
                  }}
                >
                  <Chip
                    size="small"
                    label={isHOD ? "Department Head" : "Teaching Faculty"}
                    sx={{
                      bgcolor: "rgba(255,255,255,0.22)",
                      color: "white",
                      fontWeight: 700,
                      mb: 1.5,
                    }}
                  />
                  <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 1.3, pr: 6 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5 }}>
                    {member.designation}
                  </Typography>

                  {/* Avatar badge */}
                  <Avatar
                    sx={{
                      position: "absolute",
                      right: 20,
                      bottom: -24,
                      width: 60,
                      height: 60,
                      bgcolor: "white",
                      color: isHOD ? "#2e7d32" : PRIMARY,
                      fontWeight: 800,
                      fontSize: "1.15rem",
                      boxShadow: 3,
                      border: "3px solid white",
                    }}
                  >
                    {getInitials(member.name)}
                  </Avatar>
                </Box>

                <CardContent sx={{ pt: 3.5 }}>
                  <Stack spacing={2}>
                    <Box sx={{ display: "flex", gap: 1.5 }}>
                      <Typography sx={{ fontSize: 18 }}>🎓</Typography>
                      <Box>
                        <Typography
                          variant="caption"
                          fontWeight={800}
                          color="text.secondary"
                          sx={{ display: "block", textTransform: "uppercase", letterSpacing: 0.6 }}
                        >
                          Qualification
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 0.5, lineHeight: 1.6 }}>
                          {member.qualification}
                        </Typography>
                      </Box>
                    </Box>

                    <Divider />

                    <Box sx={{ display: "flex", gap: 1.5 }}>
                      <Typography sx={{ fontSize: 18 }}>💻</Typography>
                      <Box>
                        <Typography
                          variant="caption"
                          fontWeight={800}
                          color="text.secondary"
                          sx={{ display: "block", textTransform: "uppercase", letterSpacing: 0.6 }}
                        >
                          Specialization
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 0.5, lineHeight: 1.6 }}>
                          {member.specialization}
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            );
          })}
        </Box>

        {/* =====================================================
            FACULTY MESSAGE
        ===================================================== */}
        <Paper
          elevation={0}
          sx={{
            mt: 8,
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            background: `linear-gradient(135deg, #071e49 0%, ${PRIMARY} 55%, ${ACCENT} 100%)`,
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontSize: 42, mb: 1 }}>👥</Typography>

          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ mb: 1.5, fontSize: { xs: "1.6rem", md: "2.1rem" } }}
          >
            Learn from Experience
          </Typography>

          <Typography
            sx={{
              maxWidth: 700,
              mx: "auto",
              opacity: 0.9,
              lineHeight: 1.7,
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            Our faculty members are committed to providing quality education,
            mentoring students and encouraging innovation in computer science
            and engineering.
          </Typography>
        </Paper>

        {/* =====================================================
            NAVIGATION
        ===================================================== */}
        <Box
          sx={{
            mt: 5,
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Button
            component={Link}
            to="/"
            sx={{ fontWeight: 600, textTransform: "none", color: PRIMARY }}
          >
            ← Back to Home
          </Button>

          <Button
            component={Link}
            to="/students"
            variant="contained"
            sx={{
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: 2,
              px: 2.5,
              bgcolor: PRIMARY,
              "&:hover": { bgcolor: "#0d2c52" },
            }}
          >
            Explore Students →
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Faculty;