import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Snackbar,
  Alert,
  IconButton,
  Menu,
  Chip,
  Paper,
  Stack,
  Avatar,
  Divider,
} from "@mui/material";

const PRIMARY = "#123B6D";
const ACCENT = "#1e88e5";
const SUCCESS = "#2e7d32";

const typeColors = {
  Workshop: "#ef6c00",
  Seminar: "#6a1b9a",
  Competition: "#c62828",
  Hackathon: "#00838f",
  "Guest Lecture": "#2e7d32",
};

function Events() {
  const navigate = useNavigate();

  const [events, setEvents] = useState([
    { id: 1, name: "AI & ML Workshop", date: "2026-08-25", type: "Workshop", venue: "CSE Seminar Hall" },
    { id: 2, name: "Coding Competition", date: "2026-07-15", type: "Competition", venue: "Programming Lab" },
    { id: 3, name: "Web Development Seminar", date: "2026-06-20", type: "Seminar", venue: "Seminar Hall" },
  ]);

  const [filter, setFilter] = useState("All");
  const [dialog, setDialog] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const [menu, setMenu] = useState(null);
  const [activeEventId, setActiveEventId] = useState(null);

  const [form, setForm] = useState({ name: "", date: "", type: "", venue: "", description: "" });

  const eventTypes = ["Workshop", "Seminar", "Competition", "Hackathon", "Guest Lecture"];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const resetForm = () => setForm({ name: "", date: "", type: "", venue: "", description: "" });

  const openAddDialog = () => {
    setEditingId(null);
    resetForm();
    setDialog(true);
  };

  const openEditDialog = () => {
    const ev = events.find((e) => e.id === activeEventId);
    if (ev) {
      setForm({ name: ev.name, date: ev.date, type: ev.type, venue: ev.venue, description: ev.description || "" });
      setEditingId(ev.id);
      setDialog(true);
    }
    setMenu(null);
  };

  const handleDelete = () => {
    setEvents(events.filter((e) => e.id !== activeEventId));
    setSnackbar({ open: true, message: "Event deleted successfully!", severity: "info" });
    setMenu(null);
  };

  const handleSubmit = () => {
    if (!form.name || !form.date || !form.type) {
      setSnackbar({ open: true, message: "Please fill in all required fields.", severity: "error" });
      return;
    }

    if (editingId) {
      setEvents(events.map((e) => (e.id === editingId ? { ...e, ...form } : e)));
      setSnackbar({ open: true, message: "Event updated successfully!", severity: "success" });
    } else {
      setEvents([...events, { id: Date.now(), ...form }]);
      setSnackbar({ open: true, message: "Event added successfully!", severity: "success" });
    }

    setDialog(false);
    resetForm();
    setEditingId(null);
  };

  const getDateParts = (dateStr) => {
    const d = new Date(dateStr);
    if (isNaN(d)) return { day: "--", month: "---" };
    return { day: d.getDate(), month: d.toLocaleString("en-US", { month: "short" }).toUpperCase() };
  };

  const filteredEvents = filter === "All" ? events : events.filter((e) => e.type === filter);

  return (
    <Box sx={{ width: "100%", overflowX: "hidden", bgcolor: "#f4f6f9", minHeight: "100vh" }}>
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
            label="STAY UPDATED"
            sx={{ color: "white", border: "1px solid rgba(255,255,255,0.35)", backgroundColor: "rgba(255,255,255,0.12)", fontWeight: 700, mb: 2 }}
          />
          <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" } }}>
            CSE Events
          </Typography>
          <Typography sx={{ mt: 2, opacity: 0.92, maxWidth: 600, mx: "auto", fontSize: { xs: "0.95rem", md: "1.05rem" }, lineHeight: 1.7 }}>
            Workshops, seminars, competitions and everything happening in the department.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 5, md: 8 }, py: { xs: 4, md: 6 }, mt: { xs: -4, md: -6 }, position: "relative" }}>
        {/* Filter chips */}
        <Paper elevation={3} sx={{ borderRadius: 5, py: 1.5, px: 2, mb: 5, maxWidth: 620, mx: "auto" }}>
          <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" useFlexGap>
            {["All", ...eventTypes].map((f) => (
              <Chip
                key={f}
                label={f}
                clickable
                onClick={() => setFilter(f)}
                sx={{
                  px: 1.2,
                  fontWeight: 600,
                  transition: "0.2s",
                  ...(filter === f ? { bgcolor: PRIMARY, color: "white" } : { bgcolor: "transparent", color: "text.secondary" }),
                  "&:hover": { bgcolor: filter === f ? PRIMARY : "grey.100" },
                }}
              />
            ))}
          </Stack>
        </Paper>

        {/* Event cards — CSS Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {filteredEvents.map((event) => {
            const { day, month } = getDateParts(event.date);
            const typeColor = typeColors[event.type] || ACCENT;

            return (
              <Card
                key={event.id}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(18,59,109,0.08)",
                  transition: "0.3s ease",
                  "&:hover": { transform: "translateY(-8px)", boxShadow: "0 16px 32px rgba(18,59,109,0.18)" },
                }}
              >
                {/* Header strip */}
                <Box
                  sx={{
                    position: "relative",
                    background: `linear-gradient(135deg, ${typeColor} 0%, ${ACCENT} 100%)`,
                    color: "white",
                    px: 2.5,
                    pt: 2.5,
                    pb: 4,
                  }}
                >
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                    <Chip
                      size="small"
                      label={event.type}
                      sx={{ bgcolor: "rgba(255,255,255,0.22)", color: "white", fontWeight: 700 }}
                    />
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        setMenu(e.currentTarget);
                        setActiveEventId(event.id);
                      }}
                      sx={{ color: "white", mt: -0.5, mr: -1 }}
                    >
                      <Box component="span" sx={{ fontSize: 18 }}>⋮</Box>
                    </IconButton>
                  </Stack>

                  <Typography variant="h6" fontWeight="bold" sx={{ mt: 1.5, lineHeight: 1.3, pr: 6 }}>
                    {event.name}
                  </Typography>

                  <Avatar
                    variant="rounded"
                    sx={{
                      position: "absolute",
                      right: 20,
                      bottom: -22,
                      width: 56,
                      height: 56,
                      bgcolor: "white",
                      color: PRIMARY,
                      borderRadius: 2,
                      boxShadow: 3,
                      flexDirection: "column",
                      lineHeight: 1,
                    }}
                  >
                    <Typography sx={{ fontSize: 18, fontWeight: 800, lineHeight: 1 }}>{day}</Typography>
                    <Typography sx={{ fontSize: 10, fontWeight: 700, letterSpacing: 0.5 }}>{month}</Typography>
                  </Avatar>
                </Box>

                <CardContent sx={{ flexGrow: 1, pt: 3.5 }}>
                  <Stack spacing={1}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography sx={{ fontSize: 15 }}>📍</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {event.venue}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography sx={{ fontSize: 15 }}>📅</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {event.date}
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>

                <CardActions sx={{ px: 2.5, pb: 2.5 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => navigate(`/events/${event.id}`)}
                    sx={{
                      bgcolor: PRIMARY,
                      borderRadius: 2,
                      fontWeight: 600,
                      textTransform: "none",
                      "&:hover": { bgcolor: "#0d2c52" },
                    }}
                  >
                    View Details →
                  </Button>
                </CardActions>
              </Card>
            );
          })}

          {filteredEvents.length === 0 && (
            <Box sx={{ gridColumn: "1 / -1" }}>
              <Paper variant="outlined" sx={{ py: 6, textAlign: "center", borderRadius: 4, borderStyle: "dashed" }}>
                <Typography sx={{ fontSize: 40, mb: 1 }}>🗓️</Typography>
                <Typography color="text.secondary">No events found for this filter.</Typography>
              </Paper>
            </Box>
          )}
        </Box>
      </Container>

      {/* Card options menu */}
      <Menu anchorEl={menu} open={Boolean(menu)} onClose={() => setMenu(null)} PaperProps={{ sx: { borderRadius: 2, minWidth: 160 } }}>
        <MenuItem onClick={openEditDialog}>✏️ &nbsp; Edit Event</MenuItem>
        <Divider />
        <MenuItem onClick={handleDelete} sx={{ color: "error.main" }}>🗑️ &nbsp; Delete Event</MenuItem>
      </Menu>

      {/* Floating add button */}
      <Fab
        onClick={openAddDialog}
        sx={{
          position: "fixed",
          bottom: 25,
          right: 25,
          bgcolor: PRIMARY,
          color: "white",
          "&:hover": { bgcolor: "#0d2c52" },
        }}
      >
        <Box component="span" sx={{ fontSize: 26, fontWeight: 300, lineHeight: 1 }}>+</Box>
      </Fab>

      {/* Add / Edit dialog */}
      <Dialog open={dialog} onClose={() => setDialog(false)} fullWidth maxWidth="sm" PaperProps={{ sx: { borderRadius: 4 } }}>
        <Box sx={{ background: `linear-gradient(135deg, ${PRIMARY} 0%, ${ACCENT} 100%)`, color: "white", px: 3, py: 2.5 }}>
          <DialogTitle sx={{ p: 0, color: "white", fontWeight: "bold" }}>
            {editingId ? "Edit Event" : "Add New Event"}
          </DialogTitle>
        </Box>

        <DialogContent sx={{ pt: 3 }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2.5, mt: 0.5 }}>
            <Box sx={{ gridColumn: { xs: "1", sm: "1 / -1" } }}>
              <TextField fullWidth required label="Event Name" name="name" value={form.name} onChange={handleChange} />
            </Box>

            <TextField
              fullWidth
              required
              type="date"
              label="Event Date"
              name="date"
              value={form.date}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />

            <TextField select fullWidth required label="Event Type" name="type" value={form.type} onChange={handleChange}>
              {eventTypes.map((t) => (
                <MenuItem key={t} value={t}>
                  {t}
                </MenuItem>
              ))}
            </TextField>

            <Box sx={{ gridColumn: { xs: "1", sm: "1 / -1" } }}>
              <TextField fullWidth label="Venue" name="venue" value={form.venue} onChange={handleChange} />
            </Box>

            <Box sx={{ gridColumn: { xs: "1", sm: "1 / -1" } }}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Event Description"
                name="description"
                value={form.description}
                onChange={handleChange}
              />
            </Box>
          </Box>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={() => setDialog(false)} sx={{ textTransform: "none", color: "text.secondary" }}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ bgcolor: PRIMARY, textTransform: "none", fontWeight: 600, px: 3, borderRadius: 2, "&:hover": { bgcolor: "#0d2c52" } }}
          >
            {editingId ? "Save Changes" : "Add Event"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={snackbar.severity} variant="filled" sx={{ borderRadius: 2 }} onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Events;