import React from "react";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, onSearchChange, onClear }) => {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={searchQuery} 
        onChange={onSearchChange} 
        placeholder="Search by name..." 
        className="search-input"
      />
      <button className="clear-button" onClick={onClear}>Clear Search</button>
    </div>
  );
};

export default SearchBar;
