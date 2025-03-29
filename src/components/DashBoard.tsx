import React, { useState } from "react";
import SearchBar from "../components/SearhBar";
import { Bell } from "lucide-react";
import Girl from "../assets/81.png";
import Vector from "../assets/Vector (5).png";
import picked from "../assets/Frame 56901.png";
import pending from "../assets/Frame 56902.png";
import delivered from "../assets/Frame 56903.png";
import orders from "./data/Orders";
import { BarChart } from "../components/BarChart";
import { ProgressCircle } from "../components/ProgressCircle"

// Define the Order interface
interface Order {
  date: string;
  client: string;
  owner: string;
  package: string;
  receiver: string;
  dropOffLocation: string;
  status: string;
}

const DashBoard: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter orders by status
  const filteredOrders = filterStatus
    ? orders.filter((order) => order.status === filterStatus)
    : orders;

  // Filter orders by search query (based on dropOffLocation)
  const searchedOrders = filteredOrders.filter((order) =>
    order.dropOffLocation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalOrders = orders.length;
  const totalDelivered = orders.filter((order) => order.status === "delivered").length;
  const totalPending = orders.filter((order) => order.status === "pending").length;
  const totalPicked = orders.filter((order) => order.status === "picked").length;

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen w-[1142]">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6 rounded-lg">
            <SearchBar onSearch={(query: string) => setSearchQuery(query)} />
            <div className="flex items-center gap-4 md:gap-6 mt-4 md:mt-0">
              <Bell size={24} className="text-gray-600 cursor-pointer" />
              <div className="flex items-center gap-2 md:gap-4">
                <img src={Girl} className="w-8 h-8 md:w-10 md:h-10 rounded-full" alt="Profile" />
                <div className="flex flex-col">
                  <h1 className="text-md md:text-lg font-semibold">Adanna Ogude</h1>
                  <h3 className="text-sm text-gray-500">adannaogude@gmail.com</h3>
                </div>
              </div>
              <img src={Vector} className="h-4 cursor-pointer" alt="Dropdown" />
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-8">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <h3 className="text-md md:text-lg font-semibold mt-2 md:mt-4">Total Orders</h3>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xl md:text-2xl font-bold">{totalOrders}</p>
                <p className="text-green-500 font-semibold">+10%</p>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <img src={picked} alt="Picked" className="w-8 h-8 md:w-10 md:h-10" />
              <h3 className="text-md md:text-lg font-semibold mt-2 md:mt-4">Pickup Packages</h3>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xl md:text-2xl font-bold">{totalPicked}</p>
                <p className="text-green-500 font-semibold">+21%</p>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <img src={pending} alt="Pending" className="w-8 h-8 md:w-10 md:h-10" />
              <h3 className="text-md md:text-lg font-semibold mt-2 md:mt-4">Pending Packages</h3>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xl md:text-2xl font-bold">{totalPending}</p>
                <p className="text-red-500 font-semibold">-0.6%</p>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <img src={delivered} alt="Delivered" className="w-8 h-8 md:w-10 md:h-10" />
              <h3 className="text-md md:text-lg font-semibold mt-2 md:mt-4">Delivered Packages</h3>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xl md:text-2xl font-bold">{totalDelivered}</p>
                <p className="text-green-500 font-semibold">+33%</p>
              </div>
            </div>
          </div>

    
          <div className="flex gap-4 md:gap-6 items-start">
  {/* BarChart with fixed height and improved styling */}
  <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mt-6 md:mt-8 w-3/4">
    <div className="flex justify-between items-center mb-2">
      <p className="text-md md:text-lg font-semibold">Earnings</p>
      <p className="text-sm md:text-md text-gray-500">Monthly</p>
    </div>
    <div className="h-[300px] w-full mt-4 mb-25"> {/* Increased height for better visibility */}
      <BarChart />
    </div>
  </div>

  {/* ProgressCircle with improved styling */}
  <div className="bg-white p-4 rounded-lg shadow-md mt-6 md:mt-8 flex flex-col items-center justify-center w-1/3">
    <ProgressCircle percentage={70} />
  </div>
</div>

         {/* Orders Table */}
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mt-6 md:mt-8">
  <div className="flex justify-between items-center mb-4 md:mb-6">
    <p className="text-md md:text-lg font-semibold">New Delivery Requests</p>
    <div className="flex gap-2">
      <button
        onClick={() => setFilterStatus(null)}
        className={`px-3 py-1 rounded-lg text-sm ${
          filterStatus === null ? "bg-[#D71F20] text-white" : "bg-gray-200 text-gray-700"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilterStatus("picked")}
        className={`px-3 py-1 rounded-lg text-sm ${
          filterStatus === "picked" ? "bg-[#D71F20] text-white" : "bg-gray-200 text-gray-700"
        }`}
      >
        Picked
      </button>
      <button
        onClick={() => setFilterStatus("pending")}
        className={`px-3 py-1 rounded-lg text-sm ${
          filterStatus === "pending" ? "bg-[#D71F20] text-white" : "bg-gray-200 text-gray-700"
        }`}
      >
        Pending
      </button>
      <button
        onClick={() => setFilterStatus("delivered")}
        className={`px-3 py-1 rounded-lg text-sm ${
          filterStatus === "delivered" ? "bg-[#D71F20] text-white" : "bg-gray-200 text-gray-700"
        }`}
      >
        Delivered
      </button>
    </div>
  </div>
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead className="bg-[#D71F20] text-white uppercase text-sm">
        <tr>
          <th className="py-2 px-3 md:py-3 md:px-4 text-left">Date</th>
          <th className="py-2 px-3 md:py-3 md:px-4 text-left">Client</th>
          <th className="py-2 px-3 md:py-3 md:px-4 text-left">Owner</th>
          <th className="py-2 px-3 md:py-3 md:px-4 text-left">Package</th>
          <th className="py-2 px-3 md:py-3 md:px-4 text-left">Receiver</th>
          <th className="py-2 px-3 md:py-3 md:px-4 text-left">Drop-Off Location</th>
          <th className="py-2 px-3 md:py-3 md:px-4 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {searchedOrders
          .filter(order => {
            if (filterStatus === null) return true;
            return order.status === filterStatus;
          })
          .map((order: Order) => (
            <tr key={order.date} className="border-b border-gray-200 text-gray-600 hover:bg-gray-50">
              <td className="py-2 px-3 md:py-3 md:px-4">{order.date}</td>
              <td className="py-2 px-3 md:py-3 md:px-4">{order.client}</td>
              <td className="py-2 px-3 md:py-3 md:px-4">{order.owner}</td>
              <td className="py-2 px-3 md:py-3 md:px-4">{order.package}</td>
              <td className="py-2 px-3 md:py-3 md:px-4">{order.receiver}</td>
              <td className="py-2 px-3 md:py-3 md:px-4">{order.dropOffLocation}</td>
              <td className={`py-2 px-3 md:py-3 md:px-4 font-semibold ${
                order.status === "delivered" ? "text-green-600" : 
                order.status === "picked" ? "text-blue-600" :
                "text-red-500"
              }`}>
                {order.status}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
  </div>
  </div>
      </div>
    </div>
  );
};

export default DashBoard;