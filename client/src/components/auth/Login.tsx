import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { Link,useNavigate } from "react-router-dom";
const Login: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  const handleLoginClick = () => {    
    setLoading(true);
    setTimeout(() => {
        //! Add Login Logic Here
        navigate("/expense");
      setLoading(false);
    }, 2000); 
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#ffffff",
          borderRadius: 4,
          boxShadow: 5,
          width: 350,
          padding: 4,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 80,
            background: "#000",
            clipPath: "polygon(0 0, 110% -200%, 30% 70%, 0% 100%)",
            color: "#fff",
            display: "flex",
            paddingLeft: 1,
            justifyContent: "start",
            alignItems: "center",
            borderTopLeftRadius: 4,
          }}
        > 
          <Typography variant="h6" sx={{ fontWeight: "bold" }} className="bellZa">
            Alpha 0.0
          </Typography>
        </Box>

        <Box sx={{ marginTop: 8, textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 3 }}>
            Sign-in
          </Typography>

          <Typography
            variant="body2"
            sx={{ textAlign: "left", marginBottom: 1 }}
          >
            Email
          </Typography>
          <TextField
            placeholder="peerapat@gmail.com"
            variant="outlined"
            fullWidth
            sx={{
              marginBottom: 2,
              backgroundColor: "#f8f8f8",
              "&:hover": { backgroundColor: "#f8f8f8" },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#000000", 
                },
              },
            }}
          />

          <Typography
            variant="body2"
            sx={{ textAlign: "left", marginBottom: 1 }}
          >
            Password
          </Typography>
          <TextField
            placeholder="********"
            type="password"
            variant="outlined"
            fullWidth
            sx={{
              marginBottom: 2,
              backgroundColor: "#f8f8f8",
              "&:hover": { backgroundColor: "#f8f8f8" },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                    borderColor: "#000000", 
                },
              },
            }}
          />

        <Button
            variant="contained"
            color="primary"
            onClick={handleLoginClick}
            disabled={loading}
            sx={{
              width: 50,
              height: 33,
              backgroundColor: "#000",
              "&:hover": {
                backgroundColor: "#000",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)", 
              },
              marginBottom: 2,
            }}
          >
            {loading ? (
              <img src="/loader.gif" alt="Loading..." style={{ width: "20px", height: "20px" }} />
            ) : (
              <span style={{ color: "#fff", fontSize: "20px" }}>→</span>
            )}
          </Button>

          <Typography
            variant="body2"
            sx={{
              color: "#000",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            <Link to="/register" style={{ textDecoration: "none", color: "inherit" }}>
              Create a new account
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
