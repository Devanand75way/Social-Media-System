import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      navigate('/join');
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div>
      {" "}
      {/* Navbar */}
      <AppBar position="fixed"
      sx={{
        background: "#fff",
        color: "#000",
        top: 0,
        width: "100%",
        zIndex: 1100, // Ensure it's above other components
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          {isMobile ? (
            <Button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <MenuIcon />
            </Button>
          ) : (
            <>
              {isAuthenticated ? (
                <>
                  <Button color="inherit" onClick={() => navigate("/")}>
                    Home Feed
                  </Button>
                  <Button color="inherit" onClick={() => navigate("/posts")}>
                    Post
                  </Button>
                  <Button color="inherit" onClick={() => navigate("/profile")}>User Profile</Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button color="inherit" onClick={() => navigate("/posts")}>
                    Post
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ marginRight: 1 }}
                    onClick={() => navigate("/join")}
                  >
                    Join
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </Button>
                </>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
