import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const LandingPage = lazy(() => import("./screens/LandingPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
