import { Box, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box position={{ base: "relative" }}>
      <Navbar height={isMobile ? "10vh" : "15vh"} />
      <Box
        as="main"
        height={isMobile ? "90vh" : "85vh"}
        position="fixed"
        top={isMobile ? "10vh" : "15vh"}
        width="100%"
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
