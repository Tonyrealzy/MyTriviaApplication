import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <Box>
      <Navbar />
      <Box as="main">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
