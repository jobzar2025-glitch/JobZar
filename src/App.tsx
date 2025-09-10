import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ForWorkersPage from "./components/ForWorkersPage";
import ForClientsPage from "./components/ForClientsPage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/for-workers" element={<ForWorkersPage />} />
        <Route path="/for-clients" element={<ForClientsPage />} />
        {/* Redirect any other routes to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;