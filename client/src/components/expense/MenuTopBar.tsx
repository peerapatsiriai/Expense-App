import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";

const MenuTopBar: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const date = new Date();
      const formattedDate = `${date.getFullYear()}:${String(date.getMonth() + 1).padStart(2, "0")}:${String(date.getDate()).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
      setCurrentDateTime(formattedDate);
    };

    updateDateTime(); // Initial call to set the date and time immediately
    const intervalId = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const handleLogoutClick = () => {
    setLoading(true);
    setTimeout(() => {
      //! Add Logout Logic Here
      setLoading(false);
    }, 2000);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "end",
        width: "98%",
        height: "10%",
        borderBottom: "2px solid white",
        color: "white",
      }}
    >   
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "end",
        alignItems: "end",
        gap: 2,
      }}>
        {/* cspell: disable-next-line */}
        <Typography variant="h4">Peerapat Siriai</Typography>
        <Typography variant="h6">Data: {currentDateTime}</Typography>
      </Box>
      <Box>
        <Button onClick={handleLogoutClick} disabled={loading}>
            {loading ? "Logging out..." : "Logout"}
        </Button>
      </Box>
    </Box>
  );
};

export default MenuTopBar;