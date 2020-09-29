import React, { useState } from "react";
// import "./main.css"
import style from "./main.module.css";
import SearchBar from "../SearchBar";

function Content() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className={style.container}>
      <div className={style.search}>
        <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
      </div>
      <div>{inputValue}</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
    </div>
  );
}
export default Content;
