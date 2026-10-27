import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Box,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";

import { Link, useLocation } from "react-router-dom";

const PRIMARY = "#123B6D";
const ACCENT = "#1e88e5";

const NAV_LINKS = [
  ["Home", "/", "🏠"],
  ["About", "/about", "🏛️"],
  ["Faculty", "/faculty", "🎓"],
  ["Events", "/events", "📅"],
  ["Placements", "/placements", "💼"],
  ["Feedback", "/feedback", "📝"],
  ["Contact", "/contact", "📞"],
];

function Navbar() {
  const [drawer, setDrawer] = useState(false);
  const [menu, setMenu] = useState(null);
  const location = useLocation();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: `linear-gradient(90deg, ${PRIMARY} 0%, #0d2c52 100%)`,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Toolbar sx={{ px: { xs: 2, md: 4 } }}>
        {/* Menu button — now visible on ALL screen sizes */}
        <IconButton
          color="inherit"
          onClick={() => setDrawer(true)}
          sx={{ mr: 1.5 }}
        >
          <Box component="span" sx={{ fontSize: 22 }}>☰</Box>
        </IconButton>

        {/* Brand */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.2,
            flexGrow: 1,
            textDecoration: "none",
            color: "white",
          }}
        >
          <Avatar
            sx={{
              width: 36,
              height: 36,
              bgcolor: "rgba(255,255,255,0.15)",
              border: "1.5px solid rgba(255,255,255,0.4)",
              fontSize: "0.85rem",
              fontWeight: 800,
            }}
          >
            CSE
          </Avatar>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1rem", md: "1.15rem" },
              letterSpacing: 0.3,
            }}
          >
            DYPCET · CSE
          </Typography>
        </Box>

        {/* Desktop nav links (still shown alongside the menu button, as a shortcut) */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5, mr: 2 }}>
          {NAV_LINKS.map(([name, path]) => {
            const active = location.pathname === path;
            return (
              <Button
                key={name}
                component={Link}
                to={path}
                sx={{
                  color: "white",
                  fontWeight: active ? 700 : 500,
                  textTransform: "none",
                  px: 1.75,
                  borderRadius: 2,
                  position: "relative",
                  bgcolor: active ? "rgba(255,255,255,0.12)" : "transparent",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                }}
              >
                {name}
              </Button>
            );
          })}
        </Box>

        {/* Notifications */}
        <IconButton color="inherit" sx={{ mr: 0.5 }}>
          <Badge
            badgeContent={3}
            color="error"
            sx={{ "& .MuiBadge-badge": { fontSize: "0.65rem", height: 16, minWidth: 16 } }}
          >
            <Box component="span" sx={{ fontSize: 20 }}>🔔</Box>
          </Badge>
        </IconButton>

        {/* Avatar menu */}
        <IconButton onClick={(e) => setMenu(e.currentTarget)} sx={{ p: 0.4 }}>
          <Avatar
            sx={{
              width: 34,
              height: 34,
              bgcolor: ACCENT,
              fontWeight: 700,
              fontSize: "0.9rem",
              border: "2px solid rgba(255,255,255,0.4)",
            }}
          >
            S
          </Avatar>
        </IconButton>

        <Menu
          anchorEl={menu}
          open={Boolean(menu)}
          onClose={() => setMenu(null)}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          PaperProps={{
            elevation: 4,
            sx: { mt: 1, borderRadius: 2, minWidth: 180 },
          }}
        >
          <MenuItem onClick={() => setMenu(null)}>
            <ListItemIcon sx={{ fontSize: 18, minWidth: 32 }}>🎓</ListItemIcon>
            Student
          </MenuItem>
          <MenuItem onClick={() => setMenu(null)}>
            <ListItemIcon sx={{ fontSize: 18, minWidth: 32 }}>👤</ListItemIcon>
            Profile
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => setMenu(null)} sx={{ color: "error.main" }}>
            <ListItemIcon sx={{ fontSize: 18, minWidth: 32 }}>🚪</ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>

      {/* Drawer — opens on click of the ☰ button, any screen size */}
      <Drawer
        anchor="left"
        open={drawer}
        onClose={() => setDrawer(false)}
        PaperProps={{ sx: { width: 270 } }}
      >
        <Box
          sx={{
            background: `linear-gradient(135deg, ${PRIMARY} 0%, ${ACCENT} 100%)`,
            color: "white",
            px: 3,
            py: 3.5,
          }}
        >
          <Avatar
            sx={{
              width: 48,
              height: 48,
              bgcolor: "rgba(255,255,255,0.18)",
              border: "2px solid rgba(255,255,255,0.4)",
              fontWeight: 800,
              mb: 1.5,
            }}
          >
            CSE
          </Avatar>
          <Typography variant="h6" fontWeight="bold">
            CSE Department
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.85, mt: 0.3 }}>
            DYPCET, Kolhapur
          </Typography>
        </Box>

        <Box sx={{ p: 1.5 }}>
          {NAV_LINKS.map(([name, path, icon]) => {
            const active = location.pathname === path;
            return (
              <Button
                key={name}
                fullWidth
                component={Link}
                to={path}
                onClick={() => setDrawer(false)}
                startIcon={<span style={{ fontSize: 17 }}>{icon}</span>}
                sx={{
                  justifyContent: "flex-start",
                  mt: 0.5,
                  py: 1.1,
                  px: 2,
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: active ? 700 : 500,
                  color: active ? PRIMARY : "text.primary",
                  bgcolor: active ? `${PRIMARY}1A` : "transparent",
                  "&:hover": { bgcolor: `${PRIMARY}0D` },
                }}
              >
                {name}
              </Button>
            );
          })}
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;