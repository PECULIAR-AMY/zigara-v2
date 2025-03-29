import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center border border-gray-400 rounded-lg px-3 bg-white shadow-sm h-[40px] w-100">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search rider"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400 h-full"
      />
    </div>
  );
};

export default SearchBar;
