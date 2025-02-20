import React, { useState, useEffect, useMemo } from "react";
import {
  Container,
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Modal,
  TextField,
} from "@mui/material";
import {
  Favorite,
  Comment,
  Share,
  Star,
  People,
  PostAdd,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import Skeleton from "@mui/material/Skeleton";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Header from "../Header/Header";
import { useCreatePostMutation, useGetAllPostsQuery } from "../../services/api";
import { toast } from "react-toastify";

const sidebarItems = [
  "All Posts",
  "Create Posts",
  "Liked Posts",
  "Fav Posts ",
  "My post",
];

const PostPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [followStatus, setFollowStatus] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [newPost, setNewPost] = useState({
    description: "",
    image: "",
    userId: "1",
  });

  const [createPost] = useCreatePostMutation();
  const { data: getPosts } = useGetAllPostsQuery({});

  const handleCreatePost = async () => {
    if (!newPost.description || !newPost.image) {
      alert("Please provide a description and an image.");
      return;
    }
    try {
      const response = await createPost(newPost).unwrap();
      toast.success("Post created Successfully.");
      setNewPost({ description: "", image: "", userId: "1" });
      setOpenModal(false);
    } catch (error) {
      console.error("Failed to create post", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const allPosts = [
        {
          id: 1,
          image: "https://picsum.photos/200/300",
          description: "A beautiful view of nature.",
          category: "All Posts",
        },
        {
          id: 2,
          image: "https://picsum.photos/200/300",
          description: "Exploring the city streets!",
          category: "Fav Posts",
        },
        {
          id: 3,
          image: "https://picsum.photos/200/300",
          description: "A beautiful view of nature.",
          category: "All Posts",
        },
        {
          id: 4,
          image: "https://picsum.photos/200/300",
          description: "Exploring the city streets!",
          category: "Fav Posts",
        },
        {
          id: 5,
          image: "https://picsum.photos/200/300",
          description: "A beautiful view of nature.",
          category: "All Posts",
        },
        {
          id: 6,
          image: "https://picsum.photos/200/300",
          description: "Exploring the city streets!",
          category: "Fav Posts",
        },
        {
          id: 7,
          image: "https://picsum.photos/200/300",
          description: "A beautiful view of nature.",
          category: "All Posts",
        },
        {
          id: 8,
          image: "https://picsum.photos/200/300",
          description: "Exploring the city streets!",
          category: "Fav Posts",
        },
      ];
      setPosts(allPosts);
      setLoading(false);
    }, 2000);
  }, [selectedCategory]);

  const filteredPosts = posts.filter(
    (post) =>
      selectedCategory === "All Posts" || post.category === selectedCategory
  );

  const styles = useMemo(
    () => ({
      container: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      },
      skeletonContainer: {
        width: "80%",
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "20px",
      },
      button: {
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "5px",
        border: "none",
        background: "#007bff",
        color: "white",
      },
      modalBox: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        borderRadius: "8px",
        outline: "none",
      },
    }),
    []
  );
  return (
    <>
      <Header />
      <Container
        maxWidth="xl"
        sx={{ display: "flex", height: "100vh", width: "100%" }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            width: "250px",
            padding: "1rem",
            background: "#f4f4f4",
            position: "fixed",
            left: 0,
            height: "100vh",
            overflowY: "auto",
          }}
        >
          <Typography variant="h5" fontWeight="bold" mb={2} textAlign="center">
            Menu
          </Typography>
          <List>
            {sidebarItems.map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={() => {
                  if (item === "Create Posts") setOpenModal(true);
                  else setSelectedCategory(item);
                }}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" textAlign="center">
            Stats
          </Typography>
          <List>
            <ListItem sx={styles.sidebarItem}>
              <People color="primary" sx={{ mr: 1 }} />
              <ListItemText primary="Followers: 1.2K" />
            </ListItem>
            <ListItem sx={styles.sidebarItem}>
              <PersonAddAltIcon color="success" sx={{ mr: 1 }} />
              <ListItemText primary="Following: 200" />
            </ListItem>
            <ListItem sx={styles.sidebarItem}>
              <PostAdd color="secondary" sx={{ mr: 1 }} />
              <ListItemText primary="Total Posts: 50" />
            </ListItem>
          </List>
        </Box>

        {/* Posts Section */}
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "scroll",
            padding: "5px",
            maxHeight: "100vh",
            marginTop: "30px",
            marginBottom: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Centers both skeleton and posts horizontally
          }}
        >
          {loading
            ? [1, 2, 3].map((index) => (
                <Skeleton
                  key={index}
                  variant="rectangular"
                  width={400}
                  height={300}
                  sx={{
                    mb: 2,
                    alignSelf: "center", // Ensures skeletons are centered
                  }}
                />
              ))
            : filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Card
                    sx={{
                      Width: "600px",
                      marginBottom: "1rem",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={post.image}
                    />
                    <CardContent>
                      <Typography>{post.description}</Typography>
                      <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                        <IconButton color="error">
                          <Favorite />
                        </IconButton>
                        <IconButton>
                          <Comment />
                        </IconButton>
                        <IconButton>
                          <Share />
                        </IconButton>
                        <IconButton color="warning">
                          <Star />
                        </IconButton>
                      </Box>
                      <Button
                        variant="contained"
                        color={followStatus[post.id] ? "error" : "primary"}
                        fullWidth
                        sx={{ mt: 1 }}
                        startIcon={
                          followStatus[post.id] ? (
                            <PersonRemoveIcon />
                          ) : (
                            <PersonAddAltIcon />
                          )
                        }
                        onClick={() => toggleFollow(post.id)}
                      >
                        {followStatus[post.id] ? "Unfollow" : "Follow"}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
        </Box>
      </Container>

      {/* Create Post Modal */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Box sx={styles.modalBox}>
            <Typography variant="h6" mb={2}>
              Create a Post
            </Typography>
            <Button
              variant="contained"
              component="label"
              fullWidth
              startIcon={<AddPhotoAlternateIcon />}
            >
              Upload Image
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) =>
                  setNewPost({
                    ...newPost,
                    image: URL.createObjectURL(e.target.files[0]),
                  })
                }
              />
            </Button>
            {newPost.image && (
              <CardMedia
                component="img"
                height="200"
                image={newPost.image}
                sx={{ mt: 2 }}
              />
            )}
            <TextField
              fullWidth
              label="Description"
              variant="outlined"
              multiline
              rows={3}
              sx={{ mt: 2 }}
              value={newPost.description}
              onChange={(e) =>
                setNewPost({ ...newPost, description: e.target.value })
              }
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={handleCreatePost}
            >
              Post
            </Button>
          </Box>
        </motion.div>
      </Modal>
    </>
  );
};

export default PostPage;
