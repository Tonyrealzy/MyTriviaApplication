import React, { ErrorInfo, ReactNode } from "react";
import LayeredBackground from "./layers/LayeredBackground";
import { GameBg } from "../assets/images";
import { Container, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { logger } from "../services/logger";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error: error,
      errorInfo: null,
    };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      errorInfo: errorInfo,
    });
    logger(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const navigate = useNavigate();

      return (
        <LayeredBackground url={`${GameBg}`}>
          <Container
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            h="full"
            w="100%"
          >
            <Text fontWeight="bold" fontSize="4xl" color="snowWhite">
              Ooppsss! An error occurred...
            </Text>
            <Button
              bg="orange"
              border="2px solid"
              borderColor="orange"
              color="white"
              fontSize="lg"
              marginTop="30px"
              width="320px"
              height="50px"
              _focus={{
                backgroundColor: "transparent",
                borderColor: "snowWhite",
                color: "snowWhite",
                boxShadow: "none",
              }}
              _hover={{
                backgroundColor: "transparent",
                borderColor: "snowWhite",
                color: "snowWhite",
                boxShadow: "none",
              }}
              onClick={() => navigate("/")}
            >
              Back to Home
            </Button>
          </Container>
        </LayeredBackground>
      );
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
