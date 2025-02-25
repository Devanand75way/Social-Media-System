import React, { useMemo } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Grid,
  Button,
  TextField,
  Modal,
  TextareaAutosize,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PostCard from "./PostCard";
import Header from "../Header/Header";

const posts = [
  {
    image: "https://via.placeholder.com/350",
    title: "The Extreme Kind of Good",
    user: "mahdyhasanhridoy",
    location: "Dhaka, Bangladesh",
  },
  {
    image: "https://via.placeholder.com/350",
    title: "Oppo Reno 13 Series",
    user: "tech_guru",
    location: "India",
  },
  {
    image: "https://via.placeholder.com/350",
    title: "Photography King",
    user: "photo_master",
    location: "USA",
  },
  {
    image: "https://via.placeholder.com/350",
    title: "Flash Sale! Don't Miss Out",
    user: "fashion_blog",
    location: "London",
  },
  {
    image: "https://via.placeholder.com/350",
    title: "Giveaway! Enter Now",
    user: "cosmetics_love",
    location: "Paris",
  },
  {
    image: "https://via.placeholder.com/350",
    title: "Skincare Tips from a Dermatologist",
    user: "skincare_expert",
    location: "Berlin",
  },
];

const Index: React.FC = () => {
  const [openSidebar, setOpenSidebar] = React.useState(false);
  
  const styles = useMemo(
    () => ({
      Sidebar: {
        listStyle: "none",
        margin: 0,
        padding: "30px",
        paddingTop: "20px",
        paddingBottom: "8px",
        height: "100vh",
        width: "200px",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "#fff",
        borderRight: "1px solid black",
        overflowY: "auto",
      },
      content: {
        // marginLeft: "50px", // Push content to the right
        padding: "80px 20px 20px", // Add top padding to prevent overlap with the fixed header
        flexGrow: 1,
      },
    }),
    []
  );

  //  Open modal for create post 
  const [open, setOpen] = React.useState(false);
  const [url, setUrl] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState(null);

  // useMemo to optimize data structure
  const postData = useMemo(
    () => ({
      url,
      description,
      image,
    }),
    [url, description, image]
  );

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleImageUpload = (event: any) => {
    setImage(event.target.files[0]);
  };

  const handleCreatePost = () => {
    console.log("Post Created:", postData);
    handleClose();
  };


  return (
    <>
      <Header />
      <Box sx={{ display: "flex" }}>
        {/* Sidebar */}
        <Drawer
          open={openSidebar}
          onClose={() => setOpenSidebar(false)}
          variant="permanent"
          sx={{ width: 250 }}
        >
          <List sx={styles.Sidebar}>
            {[
              "Home",
              "Logo Files",
              "Website",
              "Print Shop",
              "Social Media Kit",
              "Business Cards",
              "Email Signatures",
              "Business Docs",
              "Marketing",
            ].map((text) => (
              <ListItem key={text}>
                <Button variant="outlined" color="primary" fullWidth>
                  {text}
                </Button>
              </ListItem>
            ))}
            <ListItem>
              <Button variant="contained" color="primary" onClick={handleOpen} fullWidth>
                Create Post
              </Button>
            </ListItem>
          </List>
        </Drawer>


        <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 3,
            borderRadius: 2,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2" mb={2}>
            Create a New Post
          </Typography>

          <TextField
            fullWidth
            label="Enter URL (Optional)"
            variant="outlined"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            sx={{ mb: 2 }}
          />

          <TextareaAutosize
            minRows={4}
            placeholder="Write your post description..."
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Button variant="contained" component="label" fullWidth sx={{ mt: 2 }}>
            Upload Image
            <input type="file" hidden onChange={handleImageUpload} />
          </Button>

          {image && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              Selected: {image.name}
            </Typography>
          )}

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleCreatePost}
          >
            Create Post
          </Button>
        </Box>
      </Modal>

        {/* Main Content */}
        <Box sx={styles.content}>
          {/* Cards Grid Layout */}
          <Grid container direction="column" spacing={3}>
            {posts.map((post, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <PostCard {...post} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Index;
