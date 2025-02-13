import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DashBoard: React.FC = () => {
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
        width: "100%", // Set width to 60% of the screen width
        height: "100%", // Set height to 100% of the screen height
        margin: 1,
        marginTop: 5,
        // backgroundColor: "rgba(255, 255, 255, 0.2)", 
        backgroundColor: "yellow",
        backdropFilter: "blur(10px)", // Blur effect
        borderRadius: 2,
      }}
    >
      <Button onClick={handleLoginClick} disabled={loading}>
        {loading ? "Loading..." : "Go to Expense"}
      </Button>
    </Box>
  );
};

export default DashBoard;