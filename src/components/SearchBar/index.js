import React from "react";
import Botton from "../Button";

function SearchBar({ inputValue, setInputValue }) {
  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <form>
        <input
          type="text"
          inputValue={inputValue}
          onChange={handleInputValue}
        />
        <Botton>search</Botton>
      </form>
    </>
  );
}

export default SearchBar;
