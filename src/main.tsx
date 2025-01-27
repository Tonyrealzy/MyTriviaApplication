import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store, { persistor } from "./store/index.ts";
import { system } from "./styles/theme.ts";
import { Toaster } from "./components/ui/toaster.tsx";
import disableDevtool from "disable-devtool";
import { PersistGate } from "redux-persist/integration/react";
import ErrorBoundary from "./screens/ErrorBoundary.tsx";

if (import.meta.env.VITE_APP_ENV !== "development") {
  disableDevtool();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider value={system}>
          <Toaster />
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
