import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ExpenseList: React.FC = () => {
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
        width: "35%", // Set width to 60% of the screen width
        height: "100%", // Set height to 100% of the screen height
        margin: 1,
        marginTop: 5,
        backgroundColor: "rgba(78, 177, 111, 0.41)", 
        // backgroundColor: "blue",
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

export default ExpenseList;