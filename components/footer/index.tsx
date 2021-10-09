import React from "react";
import styles from "./Footer.module.css";

const Footer = (props: { onAppRun: (appName: string) => void }) => {
  const { onAppRun } = props;
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
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
        <div className={styles.systemCenter}>
          <div className={styles.time}>
            <div>
              {new Date().getHours() > 12
                ? new Date().getHours() - 12
                : new Date().getHours()}
              :{new Date().getMinutes()}{" "}
              {new Date().getHours() > 12 ? "PM" : "AM"}
            </div>
            <div>
              {new Date().getDate()}/{new Date().getMonth()+1}/{new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
