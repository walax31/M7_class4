import React from "react";
// import "./main.css"
import style from "./main.module.css";
import Button from "../Button";

function Navbar() {
  return (
    <div className={style.container}>
      <div className={style.logo}>LOGO</div>
      <div className={style.button}>
        <Button>sign up</Button>
      </div>
    </div>
  );
}

export default Navbar;
