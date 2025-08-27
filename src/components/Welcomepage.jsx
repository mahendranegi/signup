import React from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Welcomepage() {
  const navigate = useNavigate();

  return (
    <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        height: "100vh" 
      }}>
      <Typography variant="h3" gutterBottom>
        Welcome to My App
      </Typography>
      
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => navigate("/login")}
        sx={{ mt: 3 }}
      >
        Logout
      </Button>
    </div>
  );
}

export default Welcomepage;
