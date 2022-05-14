import React, { useState } from "react";
import DarkButton from "../buttons/darkButton";

const SearchForm = ({onSubmit },ref) => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    ref.current=e.target.value;
    setSearch(e.target.value);
  };
  return (
    <div className="flex flex-wrap items-center gap-4">
      <input
        value={search}
        placeholder="search title"
        onChange={handleChange}
        type="text"
        className="outline-none p-4 h-9 border-1 rounded-md border-solid border-cyan-900 bg-cyan-100 w-[300px] focus:border-none focus:outline-none "
      />
      <DarkButton onClick={onSubmit}>Search</DarkButton>
    </div>
  );
};

export default React.forwardRef(SearchForm);
