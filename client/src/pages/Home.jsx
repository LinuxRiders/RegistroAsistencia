import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Home/NavBar";

export default function Home() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavBar />
      <Box component="main" sx={{ flexGrow: 1, backgroundColor: "#222" }}>
        <Outlet />
      </Box>
    </Box>
  );
}
