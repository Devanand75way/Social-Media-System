import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{ bgcolor: "#f5f5f5", py: 10, px: 2, width: "100%" }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold">
              Logo
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Subscribe to our newsletter for the latest features and updates.
            </Typography>
            <Box display="flex" mt={2}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Your email here"
                fullWidth
              />
              <Button variant="contained" sx={{ ml: 1 }}>
                Join
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" fontWeight="bold">
              Quick Links
            </Typography>
            {["About Us", "Contact Us", "Support", "Careers", "Blog"].map(
              (text) => (
                <Typography
                  key={text}
                  variant="body2"
                  sx={{ mt: 1, cursor: "pointer" }}
                >
                  {text}
                </Typography>
              )
            )}
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" fontWeight="bold">
              Resources
            </Typography>
            {["Help Center", "Community", "Privacy", "Terms", "Feedback"].map(
              (text) => (
                <Typography
                  key={text}
                  variant="body2"
                  sx={{ mt: 1, cursor: "pointer" }}
                >
                  {text}
                </Typography>
              )
            )}
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold">
              Connect With Us
            </Typography>
            <Box display="flex" gap={2} mt={1}>
              {[Facebook, Instagram, Twitter, LinkedIn, YouTube].map(
                (Icon, index) => (
                  <Icon key={index} sx={{ cursor: "pointer" }} />
                )
              )}
            </Box>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="space-between" mt={5}>
          <Typography variant="body2">
            © 2024. All rights reserved.
          </Typography>
          <Box display="flex" gap={2}>
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
              (text) => (
                <Typography
                  key={text}
                  variant="body2"
                  sx={{ cursor: "pointer" }}
                >
                  {text}
                </Typography>
              )
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
