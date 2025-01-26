import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store, { persistor } from "./store/index.ts";
import { system } from "./styles/theme.ts";
import { Toaster } from "./components/ui/toaster.tsx";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider value={system}>
          <Toaster />
          <App />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
