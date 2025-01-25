import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <Box>
      <Navbar height="15vh" />
      <Box as="main" height="85vh" position="fixed" top="15vh" width="100%">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
