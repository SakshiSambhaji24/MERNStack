import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  MenuItem,
} from "@mui/material";

function Students() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" textAlign="center">
        Student Registration
      </Typography>

      <Box
        component="form"
        sx={{ maxWidth: 600, mx: "auto", mt: 5 }}
      >
        <TextField
          fullWidth
          label="Student Name"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Email"
          type="email"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Mobile Number"
          margin="normal"
        />

        <TextField
          select
          fullWidth
          label="Year"
          margin="normal"
          defaultValue=""
        >
          <MenuItem value="First Year">
            First Year
          </MenuItem>

          <MenuItem value="Second Year">
            Second Year
          </MenuItem>

          <MenuItem value="Third Year">
            Third Year
          </MenuItem>

          <MenuItem value="Final Year">
            Final Year
          </MenuItem>
        </TextField>

        <TextField
          fullWidth
          label="Roll Number"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Skills"
          placeholder="Java, React, Python..."
          margin="normal"
        />

        <TextField
          fullWidth
          label="Message"
          multiline
          rows={4}
          margin="normal"
        />

        <Button
          variant="contained"
          fullWidth
          size="large"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default Students;