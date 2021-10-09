import React from "react";
import styles from "./Popup.module.css";

const Popup = (props: { show: boolean }) => {
  const { show } = props;
  return (
    <div className={[styles.container, show ? styles.show : ""].join(" ")}>
      <div></div>
    </div>
  );
};

export default Popup;
