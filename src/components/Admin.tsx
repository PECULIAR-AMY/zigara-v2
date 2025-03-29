import React from "react";
import SearchBar from "../components/SearhBar";
import { Bell } from "lucide-react";
import Girl from "../assets/81.png";
import Vector from "../assets/Vector (5).png";
import orders from "./data/Orders";

const Admin: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 md:p-10">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-40">
        {/* Main Content */}
        <div className="w-full">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-20">
            <div className="w-full md:w-auto">
              <SearchBar />
            </div>
            <div className="flex items-center gap-4">
              <Bell size={24} className="cursor-pointer" />
              <div className="flex items-center gap-2 md:gap-5">
                <img src={Girl} className="w-10 h-10 md:w-16 md:h-16 rounded-full" alt="Profile" />
                <div className="flex flex-col text-center md:text-left">
                  <h1 className="text-sm md:text-lg font-semibold">Adanna Ogude</h1>
                  <h3 className="text-xs md:text-sm text-gray-600">adannaogude@gmail.com</h3>
                </div>
              </div>
              <img src={Vector} className="h-4 md:h-5 cursor-pointer" alt="Vector" />
            </div>
          </div>

          {/* Orders Table */}
          <div className="p-4 md:p-5 mt-4 md:mt-6 rounded-lg shadow">
            <p className="text-lg font-semibold mb-4 md:mb-10">New Delivery Request</p>
            <div className="overflow-x-auto">
              {/* Filters and Buttons */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4 md:mb-10">
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm md:text-base bg-white text-gray-600 rounded-lg border border-gray-200">
                    Active riders
                  </button>
                  <button className="px-3 py-1 text-sm md:text-base bg-white text-gray-600 rounded-lg border border-gray-200 flex items-center gap-1">
                    Filter <span>+</span>
                  </button>
                </div>
                <button className="px-3 py-1 text-sm md:text-base bg-white text-gray-600 rounded-lg border border-gray-200 flex items-center gap-1">
                  Add rider <span>+</span>
                </button>
              </div>

              {/* Table */}
              <table className="w-full bg-white shadow-lg rounded-lg">
                <thead className="bg-[#D71F20] text-[#FFFFFF] uppercase text-sm">
                  <tr>
                    <th className="py-2 px-3 md:py-3 md:px-4 text-left">Date</th>
                    <th className="py-2 px-3 md:py-3 md:px-4 text-left">Client</th>
                    <th className="py-2 px-3 md:py-3 md:px-4 text-left">Owner</th>
                    <th className="py-2 px-3 md:py-3 md:px-4 text-left">Package</th>
                    <th className="py-2 px-3 md:py-3 md:px-4 text-left">Receiver</th>
                    <th className="py-2 px-3 md:py-3 md:px-4 text-left">Drop-Off</th>
                    <th className="py-2 px-3 md:py-3 md:px-4 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.date} className="border-b border-gray-200 text-gray-600"> {/* Added faint grey border */}
                      <td className="py-2 px-3 md:py-3 md:px-4">{order.date}</td>
                      <td className="py-2 px-3 md:py-3 md:px-4">{order.client}</td>
                      <td className="py-2 px-3 md:py-3 md:px-4">{order.owner}</td>
                      <td className="py-2 px-3 md:py-3 md:px-4">{order.package}</td>
                      <td className="py-2 px-3 md:py-3 md:px-4">{order.receiver}</td>
                      <td className="py-2 px-3 md:py-3 md:px-4">{order.dropOffLocation}</td>
                      <td className={`py-2 px-3 md:py-3 md:px-4 font-semibold ${order.status === "delivered" ? "text-green-600" : "text-red-500"}`}>
                        {order.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div> {/* End of Main Content */}
      </div> {/* End of Flex Container */}
    </div>
  );
};

export default Admin;