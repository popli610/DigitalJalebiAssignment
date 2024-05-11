import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form className="flex justify-center text-lg" onSubmit={handleSubmit}>
      <input
        className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-gray-200 focus:shadow-gray-300 mx-2"
        type="text"
        placeholder="Search Users"
        value={query}
        onChange={handleChange}
      />
      <button
        className=" bg-white/75 p-3 rounded-full shadow-lg shadow-gray-200 "
        type="submit"
      >
        <CiSearch size={30} />
      </button>
    </form>
  );
};

export default SearchBar;
