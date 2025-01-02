import React from "react";
import Box from "@mui/material/Box";
import AuthBackground from "../components/BlackGround";
import MenuTopBar from "../components/expense/MenuTopBar"
import MenuAction from "../components/expense/MenuAction"
import ExpenseList from "../components/expense/ExpenseList";
import DashBoard from "../components/expense/DashBoard";

const Auth: React.FC = () => {
  return (
    <AuthBackground>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "95%",
          height: "90%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#201c1c",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <MenuTopBar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            width: "100%", 
            height: "83%", 
            borderRadius: 2,
          }}
        >
          <MenuAction />
          <ExpenseList />
          {/* <DashBoard /> */}
        </Box>
        {/* <MenuAction />
        <MenuAction /> */}
      </Box>
    </AuthBackground>
  );
};

export default Auth;