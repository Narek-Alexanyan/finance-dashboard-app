import { Route, Routes } from "react-router-dom";
import Navbar from "@/component/navbar";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Dashboard</div>} />
        <Route path="/predictions" element={<div>Predictions</div>} />
      </Routes>
    </div>
  );
}

export default App;
