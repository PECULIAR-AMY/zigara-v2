import React from 'react';
import { useNavigate } from 'react-router-dom';
import ZigLogo from "../assets/Logo (1).png";
import ZigText from "../assets/Vector (1).png";
import DashImage from "../assets/Icon - Dashboard.png";
import DeliveryImage from "../assets/Group 237566.png";
import User from "../assets/user 1 (1).png";
import Logout from "../assets/Icon - Logout.png";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="w-full h-full p-4 md:p-6 mt-10">
      <div className="flex gap-4 items-center">
        <img src={ZigLogo} alt="Zig Logo" className="w-12 h-12" />
        <img src={ZigText} alt="Zig Text" className="w-12 h-12" />
      </div>

      <div className="mt-6 md:mt-10 space-y-4 md:space-y-6">
        <div
          className="flex items-center gap-4 p-3 rounded-lg bg-[#D71F20] cursor-pointer"
          onClick={() => handleNavigation('/dashboard')}
        >
          <img src={DashImage} alt="Dashboard" className="w-6 h-6" />
          <h1 className="text-lg font-semibold text-[#FFFFFF]">Dashboard</h1>
        </div>

        <div
          className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
          onClick={() => handleNavigation('/admin')}
        >
          <img src={DeliveryImage} alt="Delivery" className="w-6 h-6" />
          <h1 className="text-lg text-gray-700">Delivery Orders</h1>
        </div>

        <div
          className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
          onClick={() => handleNavigation('/new-order')}
        >
          <img src={User} alt="User" className="w-6 h-6" />
          <h1 className="text-lg text-gray-700">Employees</h1>
        </div>

        <div
          className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
          onClick={() => handleNavigation('/logout')}
        >
          <img src={Logout} alt="Logout" className="w-6 h-6" />
          <h1 className="text-lg text-gray-700">Logout</h1>
        </div>
      </div>
    </div>
  );
};

export default NavBar;