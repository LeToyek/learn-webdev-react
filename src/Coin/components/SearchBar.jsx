import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({onSearch}) => {
  const [words, setWords] = useState();
  return (
    <div className="search-bar">
      <input
      placeholder="ex = bitcoin, ethereum, etc"
        type="text"
        onChange={(e) => {
          setWords(e.target.value)
          if (e.key === "Enter") {
            onSearch(words)
          }
        }}
        value={words}
      />
      <button onClick={()=>onSearch(words)}>
        <SearchIcon className="icon"/>
      </button>
    </div>
  );
};

export default SearchBar;
