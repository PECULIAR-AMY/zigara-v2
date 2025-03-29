import React from "react";
import { Routes, Route } from "react-router-dom"; 
import DashBoard from "./components/DashBoard"; 
import Admin from "./components/Admin"; 
import NewOrder from "./components/NewOrder"; 
import Notification from "./components/Notification"; 
import NavBar from "./components/NavBar"; 
import LogOut from "./components/LogOut";

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-md">
        <NavBar />
      </div>
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/new-order" element={<NewOrder />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/logout" element={<LogOut />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;