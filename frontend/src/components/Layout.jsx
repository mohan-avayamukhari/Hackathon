import { Box, Dialog, DialogContent, DialogTitle, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useIdleTimer } from "react-idle-timer";
import Navbar from "../Pages/global/Navbar";
import { useState, useEffect } from "react";
import { removeToken } from "../Services/Login";

const Layout = ({ children, setIsAuthenticated, preferredMode, sidebarOpen, setSidebarOpen, theme}) => {

  return (
  <Box className="app">
    <Box display="flex" flexDirection="column">
      <Navbar open={sidebarOpen} setOpen={setSidebarOpen} preferredMode={preferredMode} setIsAuthenticated={setIsAuthenticated} theme={theme}></Navbar>
      {children}
      </Box>
    </Box>
  );
};

export default Layout;
