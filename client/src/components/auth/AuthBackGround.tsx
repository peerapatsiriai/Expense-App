import React, { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

interface AuthBackgroundProps {
  children: ReactNode;
}

const AuthBackground: React.FC<AuthBackgroundProps> = ({ children }) => {
  return (
    <Box sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to right, white 50%, black 50%)",
            filter: "blur(8px)",
          },
        }}
      />
      <Grid container sx={{ height: "100vh" }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "white",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" sx={{ color: "black", fontSize: "7rem", width: "100%" }}>
              BACK
            </Typography>
            <Typography variant="h4" sx={{ color: "black", transform: "rotate(180deg)", fontSize: "6rem", width: "100%" }}>
              WRITE
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#100c0c",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" sx={{ color: "white", fontSize: "6rem", width: "100%" }}>
              WRITE
            </Typography>
            <Typography variant="h4" sx={{ color: "white", transform: "rotate(180deg)", fontSize: "7rem", width: "100%" }}>
              BACK
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {children}
    </Box>
  );
};

export default AuthBackground;