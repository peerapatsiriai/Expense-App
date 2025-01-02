import React from "react";
import Box from "@mui/material/Box";
import AuthBackground from "../components/auth/AuthBackGround";
import Login from "../components/auth/Login";

const Auth: React.FC = () => {
  return (
    <AuthBackground>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Login />
      </Box>
    </AuthBackground>
  );
};

export default Auth;