import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Redirect any other routes to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;