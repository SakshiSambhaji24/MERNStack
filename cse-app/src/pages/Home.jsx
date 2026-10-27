import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Avatar,
  Chip,
  Paper,
  Badge,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
} from "@mui/material";

const PRIMARY = "#123B6D";
const ACCENT = "#1e88e5";
const SUCCESS = "#2e7d32";

function Home() {
  const highlights = [
    {
      icon: "🖥️",
      title: "Modern Labs",
      text: "Advanced computer laboratories equipped with the latest hardware and software tools.",
      color: PRIMARY,
    },
    {
      icon: "🎓",
      title: "Expert Faculty",
      text: "Experienced teaching professionals dedicated to student growth and mentorship.",
      color: ACCENT,
    },
    {
      icon: "🚀",
      title: "Industry Ready",
      text: "Structured training and placement support to launch strong careers.",
      color: SUCCESS,
    },
  ];

  const stats = [
    { icon: "🌍", number: "16,000+", title: "Alumni Network", color: PRIMARY, badge: true },
    { icon: "🏛️", number: "1984", title: "Established", color: ACCENT },
    { icon: "🏆", number: "NAAC A", title: "Accreditation", color: SUCCESS },
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
          minHeight: { xs: 460, md: 560 },
          display: "flex",
          alignItems: "center",
          color: "white",
          backgroundImage: `linear-gradient(135deg, rgba(18,59,109,0.92) 0%, rgba(30,136,229,0.85) 100%), url('/images/campus.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 260,
            height: 260,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,0.08)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -100,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,0.06)",
          }}
        />

        <Container maxWidth={false} sx={{ position: "relative", px: { xs: 3, sm: 5, md: 8 }, textAlign: "center" }}>
          <Avatar
            sx={{
              width: 90,
              height: 90,
              mx: "auto",
              bgcolor: "rgba(255,255,255,0.15)",
              border: "3px solid rgba(255,255,255,0.4)",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            CSE
          </Avatar>

          <Chip
            label="DYPCET · CSE DEPARTMENT"
            sx={{
              mt: 3,
              color: "white",
              border: "1px solid rgba(255,255,255,0.35)",
              backgroundColor: "rgba(255,255,255,0.12)",
              fontWeight: 700,
            }}
          />

          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ mt: 2, fontSize: { xs: "2rem", sm: "2.6rem", md: "3.3rem" } }}
          >
            Computer Science & Engineering
          </Typography>

          <Typography
            variant="h6"
            sx={{ mt: 2, opacity: 0.92, fontWeight: 400, fontSize: { xs: "1rem", md: "1.2rem" } }}
          >
            D. Y. Patil College of Engineering & Technology, Kolhapur
          </Typography>

          <Button
            component="a"
            href="/about"
            variant="contained"
            size="large"
            sx={{
              mt: 4,
              bgcolor: "#FFC107",
              color: "#000",
              fontWeight: "bold",
              px: 4,
              py: 1.3,
              borderRadius: 2,
              textTransform: "none",
              "&:hover": { bgcolor: "#e6ac00" },
            }}
          >
            Explore Department →
          </Button>
        </Container>
      </Box>

      {/* =====================================================
          DEPARTMENT HIGHLIGHTS
      ===================================================== */}
      <Box sx={{ py: { xs: 6, md: 8 }, width: "100%" }}>
        <Container maxWidth={false} sx={{ px: { xs: 3, sm: 5, md: 8 } }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Chip
              label="WHY CHOOSE US"
              size="small"
              sx={{ bgcolor: `${PRIMARY}1A`, color: PRIMARY, fontWeight: 700, mb: 1.5 }}
            />
            <Typography
              variant="h3"
              fontWeight="bold"
              color={PRIMARY}
              sx={{ fontSize: { xs: "1.9rem", md: "2.5rem" } }}
            >
              Department Highlights
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
              gap: 3,
            }}
          >
            {highlights.map((item) => (
              <Card
                key={item.title}
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
                <Box
                  sx={{
                    height: 6,
                    background: `linear-gradient(90deg, ${item.color}, ${ACCENT})`,
                  }}
                />
                <CardContent sx={{ py: 4, textAlign: "center" }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      mx: "auto",
                      mb: 2,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 28,
                      bgcolor: `${item.color}1A`,
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography variant="h6" fontWeight="bold">
                    {item.title}
                  </Typography>

                  <Typography color="text.secondary" sx={{ mt: 1.5, fontSize: "0.92rem", lineHeight: 1.6 }}>
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* =====================================================
          DYPCET AT A GLANCE
      ===================================================== */}
      <Container maxWidth={false} sx={{ py: { xs: 6, md: 8 }, px: { xs: 3, sm: 5, md: 8 } }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Chip
            label="DYPCET"
            size="small"
            sx={{ bgcolor: `${PRIMARY}1A`, color: PRIMARY, fontWeight: 700, mb: 1.5 }}
          />
          <Typography
            variant="h3"
            fontWeight="bold"
            color={PRIMARY}
            sx={{ fontSize: { xs: "1.9rem", md: "2.5rem" } }}
          >
            DYPCET at a Glance
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {stats.map((s) => {
            const card = (
              <Paper
                elevation={0}
                sx={{
                  textAlign: "center",
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "grey.200",
                  bgcolor: "white",
                  transition: "0.3s ease",
                  height: "100%",
                  "&:hover": {
                    borderColor: s.color,
                    boxShadow: "0 12px 28px rgba(18,59,109,0.12)",
                    transform: "translateY(-6px)",
                  },
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
                    bgcolor: `${s.color}1A`,
                  }}
                >
                  {s.icon}
                </Box>

                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{
                    fontSize: { xs: "1.6rem", md: "2.1rem" },
                    background: `linear-gradient(135deg, ${s.color}, ${ACCENT})`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.number}
                </Typography>

                <Typography sx={{ mt: 1, fontWeight: 600, color: "text.secondary", fontSize: "0.92rem" }}>
                  {s.title}
                </Typography>
              </Paper>
            );

            return (
              <Box key={s.title}>
                {s.badge ? (
                  <Badge
                    badgeContent="+"
                    color="primary"
                    sx={{
                      width: "100%",
                      "& .MuiBadge-badge": {
                        right: 24,
                        top: 24,
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        height: 22,
                        minWidth: 22,
                      },
                    }}
                  >
                    <Box sx={{ width: "100%" }}>{card}</Box>
                  </Badge>
                ) : (
                  card
                )}
              </Box>
            );
          })}
        </Box>
      </Container>

      {/* =====================================================
          CAMPUS IMAGE
      ===================================================== */}
      <Box sx={{ py: { xs: 6, md: 8 }, width: "100%" }}>
        <Container maxWidth={false} sx={{ px: { xs: 3, sm: 5, md: 8 } }}>
          <Box sx={{ textAlign: "center", mb: 5 }}>
            <Chip
              label="CAMPUS LIFE"
              size="small"
              sx={{ bgcolor: `${PRIMARY}1A`, color: PRIMARY, fontWeight: 700, mb: 1.5 }}
            />
            <Typography
              variant="h3"
              fontWeight="bold"
              color={PRIMARY}
              sx={{ fontSize: { xs: "1.9rem", md: "2.5rem" } }}
            >
              Our Campus
            </Typography>
          </Box>

          <Box
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: { xs: "4 / 3", sm: "16 / 9", md: "21 / 9" },
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: "0 20px 45px rgba(18,59,109,0.22)",
            }}
          >
            <Box
              component="img"
              src="/images/campus2.jpg"
              alt="DYPCET Campus"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 25%",
                display: "block",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background:
                  "linear-gradient(to top, rgba(7,30,73,0.85) 0%, rgba(7,30,73,0.35) 45%, transparent 80%)",
                px: { xs: 3, md: 5 },
                py: { xs: 2.5, md: 4 },
              }}
            >
              <Typography
                sx={{ color: "white", fontWeight: 700, fontSize: { xs: "1.2rem", md: "1.7rem" }, mb: 0.5 }}
              >
                Life at DYPCET
              </Typography>
              <Typography
                sx={{ color: "rgba(255,255,255,0.85)", fontSize: { xs: "0.82rem", md: "0.95rem" }, maxWidth: 500 }}
              >
                A vibrant community of learners, innovators and future engineers.
              </Typography>
            </Box>

            <Chip
              label="📍 Kolhapur, Maharashtra"
              size="small"
              sx={{
                position: "absolute",
                top: 16,
                left: 16,
                bgcolor: "rgba(255,255,255,0.92)",
                color: PRIMARY,
                fontWeight: 700,
                backdropFilter: "blur(4px)",
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* =====================================================
          SPEED DIAL — QUICK ACTIONS
      ===================================================== */}
      <SpeedDial
        ariaLabel="Quick actions"
        sx={{
          position: "fixed",
          bottom: 25,
          right: 25,
          "& .MuiSpeedDial-fab": {
            bgcolor: PRIMARY,
            "&:hover": { bgcolor: "#0d2c52" },
          },
        }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
          icon={<span style={{ fontSize: 18 }}>📅</span>}
          tooltipTitle="Events"
          href="/events"
        />
        <SpeedDialAction
          icon={<span style={{ fontSize: 18 }}>✉️</span>}
          tooltipTitle="Email"
          href="mailto:cse@dypcet.ac.in"
        />
        <SpeedDialAction
          icon={<span style={{ fontSize: 18 }}>📞</span>}
          tooltipTitle="Contact"
          href="/contact"
        />
      </SpeedDial>
    </Box>
  );
}

export default Home;