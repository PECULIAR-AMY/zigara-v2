import React, { useState, useEffect } from "react";

import AdminData from "../components/data/AdminData.tsx"; // Ensure the path is correct
import Girl from "../assets/81.png";
import Vector from "../assets/Vector (5).png";
import SearchBar from "../components/SearhBar.tsx"; // Corrected typo in import
import { Trash2, Plus, Loader, AlertCircle } from "lucide-react"; // Import icons
import Modal from "../components/Modal.tsx"; // Assume you have a Modal component
import ConfirmationDialog from "../components/ConfirmationDialog.tsx"; // Assume you have a ConfirmationDialog component

interface AdminItem {
  name: string;
  contact: string;
  address: string;
  status: string;
}

const NewOrder: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<AdminItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState<{ key: keyof AdminItem; direction: string } | null>(null);
  const [filter, setFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all"); // New state for status filter
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedRider, setSelectedRider] = useState<AdminItem | null>(null);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      try {
        setData(AdminData);
        setLoading(false);
      } catch (err) {
        // Handle the error properly
        if (err instanceof Error) {
          setError(err.message); // Use the error message
        } else {
          setError("An unknown error occurred"); // Fallback for non-Error types
        }
        setLoading(false);
      }
    }, 1000);
  }, []);

  const handleSort = (key: keyof AdminItem) => {
    let direction = "ascending";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    if (sortConfig !== null) {
      return [...data].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return data;
  }, [data, sortConfig]);

  const filteredData = sortedData.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase()) &&
    (statusFilter === "all" || item.status === statusFilter)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleDelete = (rider: AdminItem) => {
    setSelectedRider(rider);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (selectedRider) {
      setData(data.filter((item) => item !== selectedRider));
      setIsDeleteDialogOpen(false);
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 md:p-6 rounded-lg shadow-md">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <SearchBar onSearch={(value) => setFilter(value)} />
            </div>
            <div className="flex items-center gap-4">
              <img src={Girl} className="w-8 h-8 md:w-10 md:h-10 rounded-full" alt="Profile" />
              <div className="flex flex-col">
                <h1 className="text-sm md:text-lg font-semibold">Adanna Ogude</h1>
                <h3 className="text-xs md:text-sm text-gray-500">adannaogude@gmail.com</h3>
              </div>
              <img src={Vector} className="h-3 md:h-4 cursor-pointer" alt="Dropdown" />
            </div>
          </div>

          {/* Orders Table */}
          <div className="mt-6 md:mt-8 bg-white p-4 md:p-6 rounded-lg shadow-md">
            {/* Filters and Search Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-6">
              <div className="flex gap-2 md:gap-4 mb-4 md:mb-0">
                <button 
                  className={`px-3 py-1 md:px-4 md:py-2 ${
                    statusFilter === "all" ? "bg-[#D71F20] text-white" : "bg-white text-[#666666]"
                  } rounded-lg`}
                  onClick={() => setStatusFilter("all")}
                >
                  All Riders
                </button>
                <button 
                  className={`px-3 py-1 md:px-4 md:py-2 ${
                    statusFilter === "active" ? "bg-[#D71F20] text-white" : "bg-white text-[#666666]"
                  } rounded-lg`}
                  onClick={() => setStatusFilter("active")}
                >
                  Active Riders
                </button>
                <button 
                  className={`px-3 py-1 md:px-4 md:py-2 ${
                    statusFilter === "inactive" ? "bg-[#D71F20] text-white" : "bg-white text-[#666666]"
                  } rounded-lg`}
                  onClick={() => setStatusFilter("inactive")}
                >
                  Inactive Riders
                </button>
              </div>
              <div className="flex gap-2 md:gap-4">
                <button
                  className="px-3 py-1 md:px-4 md:py-2 bg-white text-[#666666] border border-gray-200 rounded-lg flex items-center gap-1 md:gap-2"
                  onClick={() => setIsModalOpen(true)}
                >
                  Add Rider <Plus size={16} />
                </button>
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center items-center h-64">
                <Loader className="animate-spin" size={32} />
              </div>
            ) : error ? (
              <div className="flex justify-center items-center h-64">
                <AlertCircle size={32} className="text-red-500" />
                <p className="text-red-500 ml-2">{error}</p>
              </div>
            ) : (
              <>
                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100 text-gray-600">
                        <th className="py-2 px-3 md:py-3 md:px-4 text-left cursor-pointer" onClick={() => handleSort("name")}>
                          Name {sortConfig?.key === "name" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </th>
                        <th className="py-2 px-3 md:py-3 md:px-4 text-left cursor-pointer" onClick={() => handleSort("contact")}>
                          Contact {sortConfig?.key === "contact" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </th>
                        <th className="py-2 px-3 md:py-3 md:px-4 text-left cursor-pointer" onClick={() => handleSort("address")}>
                          Address {sortConfig?.key === "address" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </th>
                        <th className="py-2 px-3 md:py-3 md:px-4 text-left cursor-pointer" onClick={() => handleSort("status")}>
                          Status {sortConfig?.key === "status" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </th>
                        <th className="py-2 px-3 md:py-3 md:px-4 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.map((admin: AdminItem, index: number) => (
                        <tr
                          key={index}
                          className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                          <td className="py-2 px-3 md:py-3 md:px-4">{admin.name}</td>
                          <td className="py-2 px-3 md:py-3 md:px-4">{admin.contact}</td>
                          <td className="py-2 px-3 md:py-3 md:px-4">{admin.address}</td>
                          <td
                            className={`py-2 px-3 md:py-3 md:px-4 font-semibold ${
                              admin.status === "active"
                                ? "text-green-600"
                                : "text-red-500"
                            }`}
                          >
                            {admin.status}
                          </td>
                          <td className="py-2 px-3 md:py-3 md:px-4">
                            <button
                              className="text-gray-500 hover:text-red-700"
                              onClick={() => handleDelete(admin)}
                            >
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-4">
                  {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => paginate(i + 1)}
                      className={`mx-1 px-3 py-1 rounded ${
                        currentPage === i + 1 ? "bg-[#D71F20] text-white" : "bg-white text-gray-700"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Modal for Adding Riders */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-semibold mb-4">Add New Rider</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Contact</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-[#D71F20] text-white px-4 py-2 rounded-md"
              onClick={() => setIsModalOpen(false)}
            >
              Add Rider
            </button>
          </div>
        </form>
      </Modal>

      {/* Confirmation Dialog for Deleting Riders */}
      <ConfirmationDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Rider"
        message="Are you sure you want to delete this rider?"
      />
    </div>
  );
};

export default NewOrder;