import { Route, Routes } from "react-router-dom";
import Navbar from "@/component/navbar";
import Dashboard from "@/views/dashboard";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/predictions" element={<div>Predictions</div>} />
      </Routes>
    </div>
  );
}

export default App;
