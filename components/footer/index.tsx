import React from "react";
import styles from "./Footer.module.css";

const Footer = (props: { onAppRun: (appName: string) => void }) => {
  const { onAppRun } = props;
  return (
    <div className={styles.container}>
      <div className={styles.overlay} />
      <div className={styles.appContainer}>
        <div
          onClick={() => onAppRun("personal")}
          className={[styles.appIcon, styles.personalApp].join(" ")}
        />
        <div
          onClick={() => onAppRun("info")}
          className={[styles.appIcon, styles.info].join(" ")}
        />
      </div>
    </div>
  );
};

export default Footer;
 