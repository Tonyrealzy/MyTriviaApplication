import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import LoadingPage from "./screens/LoadingPage";
import ProtectedRoute from "./components/protectedRoutes/ProtectedRoute";
const LandingPage = lazy(() => import("./screens/LandingPage"));
const GamePage = lazy(() => import("./screens/GamePage"));
const NotFound = lazy(() => import("./screens/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route element={<ProtectedRoute />}>
              <Route path="/start" element={<GamePage />} />
            </Route>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      z
    </BrowserRouter>
  );
}

export default App;
