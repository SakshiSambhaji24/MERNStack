import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

function Labs() {
  const labs = [
    "Programming Laboratory",
    "Database Management Laboratory",
    "Computer Networks Laboratory",
    "Artificial Intelligence & ML Laboratory",
    "Web Technology Laboratory",
    "Project Laboratory",
  ];

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" textAlign="center" mb={5}>
        CSE Laboratories
      </Typography>

      <Grid container spacing={3}>
        {labs.map((lab) => (
          <Grid item xs={12} sm={6} md={4} key={lab}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  {lab}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{ mt: 2 }}
                >
                  Modern computers, software and practical
                  facilities are available for students.
                </Typography>

                <Typography sx={{ mt: 2 }}>
                  Capacity: 30 Students
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Labs;