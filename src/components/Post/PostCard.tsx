import React, { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
  TextField,
  Button,
  Drawer,
} from "@mui/material";
import { Favorite, ChatBubbleOutline, Send  } from "@mui/icons-material";
import ShareIcon from '@mui/icons-material/Share';
import { motion } from "framer-motion";

interface PostCardProps {
  image: string;
  title: string;
  user: string;
  location: string;
}

const PostCard: React.FC<PostCardProps> = ({
  image,
  title,
  user,
  location,
}) => {
  const [openComments, setOpenComments] = useState(false);
  const [comments, setComments] = useState<string[]>([
    "Nice post!",
    "Awesome click 📸",
  ]);
  const [newComment, setNewComment] = useState("");

  // External Styles using useMemo
  const styles = useMemo(
    () => ({
      card: { width: 350, margin: "20px auto", borderRadius: 5 , background: "#ccc"},
      userInfo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
      },
      media: { height: 300 },
      actions: {
        display: "flex",
        justifyContent: "start",
        padding: "10px",
      },
      commentSection: { width: 400, padding: 5 },
      comments_child: {
        padding: "5px 0",
        borderRadius: 5,
        backgroundColor: "#f5f5f5",
      },
    }),
    []
  );

  // Handle Add Comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <>
      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card sx={styles.card}>
          <Box sx={styles.userInfo}>
            <Typography variant="subtitle1">
              <strong>{user}</strong> - {location}
            </Typography>
          </Box>
          <CardMedia component="img" image={image} sx={styles.media} />
          <CardContent>
            <Typography variant="h6">{title}</Typography>
          </CardContent>
          <Box sx={styles.actions}>
            <IconButton>
              <Favorite />
            </IconButton>
            <IconButton onClick={() => setOpenComments(true)}>
              <ChatBubbleOutline />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
          </Box>
        </Card>
      </motion.div>

      {/* Comment Drawer */}
      <Drawer
        anchor="right"
        open={openComments}
        onClose={() => setOpenComments(false)}
      >
        <Box sx={styles.commentSection}>
          <Typography sx={styles.comments_child} variant="h6">
            Comments
          </Typography>
          {comments.map((comment, index) => (
            <Typography key={index} sx={{ marginY: 1 }}>
              {comment}
            </Typography>
          ))}
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            sx={{ marginY: 2 }}
          />
          <Button
            onClick={handleAddComment}
            variant="contained"
            endIcon={<Send />}
          >
            Post
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default PostCard;
