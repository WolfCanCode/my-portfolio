import React from "react";
import styles from "./Window.module.css";

const Window = (props: { show: boolean }) => {
  const { show } = props;
  return (
    <div className={[styles.container, show ? styles.show : ""].join(" ")}>
      <div></div>
    </div>
  );
};

export default Window;
