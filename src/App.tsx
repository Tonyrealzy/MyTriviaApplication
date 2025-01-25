import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import LoadingPage from "./screens/LoadingPage";
const LandingPage = lazy(() => import("./screens/LandingPage"));
const GamePage = lazy(() => import("./screens/GamePage"));
const NotFound = lazy(() => import("./screens/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="" element={<Layout />}>
            {/* <Route path="/" element={<LoadingPage />} /> */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/start" element={<GamePage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
