import {
  Typography,
  Button,
  Container,
  Box,
  Grid,
  TextField,
} from "@mui/material";
import { motion } from "framer-motion";
import Footer from "../footer/footer";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";
export default function HomePage() {
  const features = [
    {
      title:
        "Stay connected with real-time updates on your favorite posts and interactions.",
      description:
        "Our responsive grid layout ensures your content looks great on any device.",
      buttonText: "Explore",
    },
    {
      title:
        "Engage effortlessly with likes and comments on posts that inspire you.",
      description:
        "Interact in real-time and watch your community grow with every click.",
      buttonText: "Join",
    },
    {
      title:
        "Discover a dynamic timeline filled with vibrant media and user-generated content.",
      description:
        "Stay updated with a continuous flow of posts from those you follow.",
      buttonText: "Start",
    },
  ];

  const navigate = useNavigate();
  const Registered = () => {
    navigate("/join");
  };

  const { isAuthenticated } = useAppSelector((state) => state.auth);
  console.log(isAuthenticated);


  return (
    <>
      {/* Header Imported */}

      <Header />

      {/* Hero Section */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginTop: "40px" }}
        >
          <Typography variant="h4" fontWeight="bold">
            Connect, Share, and Discover Your World
          </Typography>
          <Typography variant="subtitle1" sx={{ marginTop: "10px" }}>
            Join a vibrant community where your voice matters. Share your
            moments, engage with others, and explore trending content all in one
            place.
          </Typography>
          <Box sx={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              sx={{ marginRight: "10px" }}
              onClick={Registered}
            >
              Join
            </Button>
            <Button variant="outlined">Learn More</Button>
          </Box>
        </motion.div>
      </Container>

      {/* Image Placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{ marginTop: "40px", textAlign: "center" }}
      >
        <Box
          sx={{
            width: "90%",
            height: "500px",
            background: "#ddd",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/hero.jpg"
            alt="Post"
            style={{ width: "100%", maxHeight: "100%", objectFit: "cover" }}
          />
        </Box>
      </motion.div>

      {/*  Next section  */}

      <Container maxWidth="lg" sx={{ textAlign: "center", py: 5 }}>
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: 6,
            p: 4,
          }}
        >
          <Typography variant="h4" fontWeight={600} gutterBottom>
            Experience a seamless and engaging social media platform tailored
            for you.
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      boxShadow: 3,
                      textAlign: "center",
                      backgroundColor: "#fff",
                    }}
                  >
                    <Typography variant="h6" fontWeight={600}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ my: 2, color: "gray" }}>
                      {feature.description}
                    </Typography>
                    <Button variant="text">{feature.buttonText} →</Button>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Image Placeholder */}
      <Box
        sx={{
          width: "90%",
          height: "600px",
          background: "#ddd",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/exper.jpg"
          alt="Post"
          style={{ width: "100%", maxHeight: "100%", objectFit: "cover" }}
        />
      </Box>

      {/*  Neext section */}
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "80vh",
          py: 5,
        }}
      >
        {/* First Section - Centered */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 6,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Typography variant="h4" fontWeight="bold">
              Share Your Moments with Us
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Join the conversation and showcase your creativity today!
            </Typography>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
              <Button variant="contained" color="primary">
                Post
              </Button>
              <Button variant="outlined">Explore</Button>
            </Box>
          </motion.div>
        </Box>

        {/* Second Section - Bottom Left */}
        <Box
          sx={{
            alignSelf: "flex-start",
            textAlign: "left",
            marginBottom: "20px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography variant="h4" fontWeight="bold">
              Stay Updated with Our News
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Join our community and be the first to know about exciting updates
              and features!
            </Typography>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <TextField
                variant="outlined"
                placeholder="Enter your email"
                size="small"
              />
              <Button variant="contained" color="primary" onClick={Registered}>
                Sign Up
              </Button>
            </Box>
            <Typography variant="caption" sx={{ mt: 1 }}>
              By clicking Sign Up, you agree to our Terms and Conditions.
            </Typography>
          </motion.div>
        </Box>
      </Container>

      {/* Footer imported */}
      <Footer />
    </>
  );
}
