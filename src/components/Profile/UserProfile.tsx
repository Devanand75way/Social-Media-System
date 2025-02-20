import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Header from "../Header/Header";

// Styled Components using useMemo
const useStyles = () => {
  return useMemo(
    () => ({
      profileContainer: {
        textAlign: "center",
        padding: "2rem",
        background: "linear-gradient(to right, #e3f2fd, #fce4ec)",
        borderRadius: "12px",
      },
      avatar: {
        width: 120,
        height: 120,
        margin: "auto",
        border: "4px solid white",
      },
      infoBox: {
        textAlign: "left",
        padding: "1rem",
        borderRadius: "8px",
      },
      experienceCard: {
        padding: "1rem",
        margin: "1rem 0",
        borderRadius: "8px",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
      },
      followButton: {
        marginLeft: "8px",
        textTransform: "none",
        fontWeight: "bold",
      },
    }),
    []
  );
};

// Framer Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const UserProfile: React.FC = () => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <>
      {/* Imported Header */}
      <Header />

      <Box sx={{ maxWidth: "80%", margin: "auto", mt: 4 }}>
        {/* Profile Header with Fade-In Animation */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <Box sx={classes.profileContainer}>
            {/* Avatar with Scaling Effect */}
            <motion.div whileHover={{ scale: 1.1 }}>
              <Avatar
                src="https://source.unsplash.com/random"
                alt="User Avatar"
                sx={classes.avatar}
              />
            </motion.div>

            <Typography variant="h5" fontWeight="bold" mt={2}>
              {user.fullName || "Olivia Rhye"}
            </Typography>
            <Typography variant="subtitle1" color="gray">
              {user.email || "@oliviarhye"}
            </Typography>

            <Box mt={2}>
             
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={classes.followButton}
                >
                  Follow
                </Button>
              </motion.div>
            </Box>
          </Box>
        </motion.div>

        {/* Experience & About Section with Motion Effects */}
        <Grid container spacing={3} mt={3}>
          {/* Experience Section */}
          <Grid item xs={12} md={8}>
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              {/* About Me Section */}
              <Typography variant="h6" fontWeight="bold" mt={3}>
                About Me
              </Typography>
              <Typography variant="body2" color="gray">
                I’m a Product Designer based in Melbourne, specializing in UI/UX,
                brand strategy, and creative solutions.
              </Typography>
            </motion.div>
          </Grid>

          {/* User Details Card */}
          <Grid item xs={12} md={4}>
            <motion.div variants={scaleUp} initial="hidden" animate="visible">
              <Card sx={classes.infoBox}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    Location
                  </Typography>
                  <Typography variant="body2" color="gray">
                    Melbourne, Australia
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="h6" fontWeight="bold">
                    Website
                  </Typography>
                  <Typography variant="body2" color="gray">
                    oliviarhye.com
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="h6" fontWeight="bold">
                    Email
                  </Typography>
                  <Typography variant="body2" color="gray">
                    hello@oliviarhye.com
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="h6" fontWeight="bold">
                    Socials
                  </Typography>
                  <Typography variant="body2" color="gray">
                    Twitter, LinkedIn
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default UserProfile;
