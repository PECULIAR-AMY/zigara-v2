import React, { useState } from "react";
import { SearchNormal1 } from "iconsax-react"; // Importing the search icon

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleSearchSubmit = () => {
    if (query.trim()) {
      onSearch?.(query); // Pass the query to the parent component
    } else {
      setIsModalOpen(true); // Show modal if the query is empty
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex items-center border border-gray-400 rounded-2xl px-3 bg-white shadow-sm h-[40px] w-200 ">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by location"
          value={query}
          onChange={handleSearch}
          onKeyPress={handleKeyPress}
          className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400 h-full"
        />

        {/* Search Icon on the Right */}
        <button onClick={handleSearchSubmit}>
          <SearchNormal1 size={20} color="red" className="ml-2" />
        </button>
      </div>

      {/* Modal for empty query */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Location Not Found</h2>
            <p>Please enter a valid location.</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;