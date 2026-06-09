import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import ScreenLayout from "../components/ScreenLayout.jsx";
import Logo from "../components/Logo.jsx";

function Home() {
  const navigate = useNavigate();
  const [pendingPath, setPendingPath] = useState(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const openPasswordDialog = (path) => {
    setPendingPath(path);
    setPassword("");
    setError("");
  };

  const closeDialog = () => {
    setPendingPath(null);
    setPassword("");
    setError("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") submitPassword();
  };

  return (
    <ScreenLayout title="หน้าหลัก" onBack={() => {}} showBack={false} onHome={() => navigate("/")}>
      <Logo />
      <Box sx={{ display: "flex", gap: 5, width: "100%", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ flex: 1, borderRadius: "4px", py: 3.0 }}
          onClick={() => navigate("/order/robot")}
        >
        เครื่อง
        </Button>
        <Button
          variant="contained"
          color="inherit"
          sx={{ flex: 1, borderRadius: "4px", py: 3.0, bgcolor: "#c8c8c8" }}
          onClick={() => navigate("/cancel")}
        >
          stucker
        </Button>
      </Box>
      {/* <Button
        variant="contained"
        color="primary"
        sx={{ borderRadius: 999, width: "100%", py: 1.4 }}
        onClick={() => navigate("/history")}
      >
        ประวัติการสั่งงาน
      </Button>
      <Button
        variant="outlined"
        color="primary"
        sx={{ borderRadius: 999, width: "100%", py: 1.4 }}
        onClick={() => navigate("/status")}
      >
        สถานะหุ่นยนต์
      </Button> */}
    </ScreenLayout>
  );
}

export default Home;
