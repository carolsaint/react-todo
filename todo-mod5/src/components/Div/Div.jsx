import React from "react";
import style from "./Div.module.css";

const Div = (props) => {
  return (
    <div className={style.div}>
      <div></div>
      <p>{props.text}</p>
      <div></div>
    </div>
  );
};

export default Div;