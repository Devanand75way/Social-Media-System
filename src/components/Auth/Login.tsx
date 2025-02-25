import React, { useMemo } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { useLoginMutation } from "../../services/api";
import { toast } from "react-toastify";
import PasswordInput from "./PasswordInput";


type FormData = typeof schema.__outputType;

// Validation Schema using Yup
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const [Authuser] = useLoginMutation();
  
  const onSubmit = async (data: FormData) => {
    try {
      await Authuser(data).unwrap();
      toast.success("Logged in successfully");
      navigate("/");
    } catch (error: any) {
      console.error("Error Response:", error); // Log the entire error object
  
      // Check different possible structures
      const errorMessage =
        error?.data?.message ||  
        error?.error ||          
        "An error occurred";     
  
      toast.error(errorMessage);
    }
  };
  
  


  const Register = () => {
    navigate("/register")
  }

  // Memoized styles to prevent unnecessary re-renders
 const styles = useMemo(
     () => ({
       container: {
         height: "100vh",
         display: "flex",
         justifyContent: "center",
         alignItems: "flex-start",
         paddingTop: "2%",
       },
       content: {
         display: "flex",
         alignItems: "center",
         justifyContent: "space-around",
         width: "100%",
       },
       image: {
         width: "50%",
         height: "auto",
       },
       paper: {
         p: 4,
         borderRadius: 3,
         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
         border: "1px solid #ddd",
         width: "100%",
         maxWidth: 500,
         textAlign: "center",
       },
       form: {
         display: "flex",
         flexDirection: "column",
         gap: 2,
       },
       avatarUpload: {
         width: 80,
         height: 80,
         mx: "auto",
         mb: 2,
         cursor: "pointer",
         border: "2px solid #ddd",
       },
     }),
     []
   );

  return (
   <>
      {/* Header Imported */}
      <Header/>
      
      <Container maxWidth="xl" sx={styles.container}>
    <Box sx={styles.content}>
      {/* Image Section */}
      <img src="/signup.gif" alt="Signup Illustration" style={styles.image} />

      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper elevation={3} sx={styles.paper}>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Login
          </Typography>

      
          {/* Form */}
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={styles.form}
          >
           
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
  
           {/* Password Field with Show/Hide Icon */}
          <PasswordInput
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
             login
            </Button>
            <Typography mt={2}>
              Don't have an account?{" "}
              <Button variant="text" color="primary" onClick={Register}>
                Sign In
              </Button>
            </Typography>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  </Container>
   </>
  );
};

export default LoginForm;
