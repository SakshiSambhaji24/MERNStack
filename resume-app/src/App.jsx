import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Chip,
  Link,
  Divider,
} from "@mui/material";

const Section = ({ title, children }) => (
  <Box sx={{ mb: 3 }}>
    <Typography variant="h6" color="primary" fontWeight="bold">
      {title}
    </Typography>
    <Divider sx={{ my: 1 }} />
    {children}
  </Box>
);

export default function App() {
  const skills = [
    "C++", "Java", "JavaScript", "React.js", "Node.js",
    "Express.js", "MongoDB", "MySQL", "HTML5", "CSS3", "Bootstrap"
  ];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={5} sx={{ p: { xs: 3, md: 5 } }}>

        {/* Header */}
        <Box textAlign="center" mb={3}>
          <Typography variant="h3" fontWeight="bold">
            SAKSHI KIRAN SAMBHAJI
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 1 }}>
            Kolhapur | 9561461697 | sakshiksambhaji24@gmail.com
          </Typography>

          <Link
            href="https://www.linkedin.com/in/sakshi-sambhaji-a49539300"
            target="_blank"
          >
            LinkedIn Profile
          </Link>
        </Box>

        {/* Education */}
        <Section title="EDUCATION">
          <Typography fontWeight="bold">
            D.Y. Patil College of Engineering and Technology, Kolhapur
          </Typography>
          <Typography color="text.secondary">
            B.Tech in Computer Science and Engineering | 2023–2027 |
            Percentage: 84.65%
          </Typography>

          <Typography fontWeight="bold" sx={{ mt: 2 }}>
            Sadhana Junior College Of Science, Gadhinglaj
          </Typography>
          <Typography color="text.secondary">
            XII (HSC) | 2023 | Percentage: 86.67%
          </Typography>

          <Typography fontWeight="bold" sx={{ mt: 2 }}>
            Jagruti High School, Gadhinglaj
          </Typography>
          <Typography color="text.secondary">
            X (SSC) | 2021 | Percentage: 95.80%
          </Typography>
        </Section>

        {/* Skills */}
        <Section title="TECHNICAL SKILLS">
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {skills.map((skill) => (
              <Chip key={skill} label={skill} color="primary" />
            ))}
          </Stack>
        </Section>

        {/* Project */}
        <Section title="PROJECTS">
          <Typography variant="h6" fontWeight="bold">
            Wanderlust
          </Typography>

          <Typography color="text.secondary">
            React.js | Node.js | Express.js | MongoDB | JWT
          </Typography>

          <Typography sx={{ mt: 1 }}>
            • Built a full-stack travel website using React.js, Node.js,
            Express.js and MongoDB.
          </Typography>
          <Typography>
            • Implemented authentication, travel listings and CRUD operations.
          </Typography>
          <Typography>
            • Added reviews and listing management functionality.
          </Typography>
          <Typography>
            • Designed a responsive interface using HTML, CSS and Bootstrap.
          </Typography>

          <Link
            href="https://github.com/SakshiSambhaji24/wanderlust.git"
            target="_blank"
            sx={{ display: "block", mt: 1 }}
          >
            GitHub Project
          </Link>
        </Section>

        {/* Certifications */}
        <Section title="CERTIFICATIONS">
          <Typography fontWeight="bold">
            Full Stack Web Development — Apna College
          </Typography>
          <Typography color="text.secondary">
            MERN Stack | GitHub
          </Typography>

          <Typography sx={{ mt: 1 }}>
            • Learned full-stack development using the MERN stack.
          </Typography>
          <Typography>
            • Built a travel website with authentication and CRUD operations.
          </Typography>

          <Typography fontWeight="bold" sx={{ mt: 2 }}>
            Metaverse Workshop — Institute of Futuristic Technologies
          </Typography>
          <Typography>
            • Completed a 3-day workshop on VR, AR and Metaverse technologies.
          </Typography>
        </Section>

        {/* Internship */}
        <Section title="INTERNSHIP">
          <Typography fontWeight="bold">
            AI-ML Virtual Internship — EduSkills
          </Typography>

          <Typography sx={{ mt: 1 }}>
            • Completed a 10-week virtual internship in Artificial Intelligence
            and Machine Learning.
          </Typography>
          <Typography>
            • Learned data analysis and basic machine learning model
            development.
          </Typography>
          <Typography>
            • Gained practical exposure to AI/ML applications.
          </Typography>
        </Section>

      </Paper>
    </Container>
  );
}