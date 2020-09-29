import React from "react";
// import "./main.css"
import style from "./main.module.css";
import Button from "../Button";

function Footer() {
  return (
    <div className={style.container}>
      <div className={style.text}>coppy right [walauck]</div>
      <div className={style.button}>
        <Button>login</Button>
      </div>
    </div>
  );
}

export default Footer;
