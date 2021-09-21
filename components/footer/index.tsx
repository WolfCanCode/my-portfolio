import React from "react"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div  className={styles.container}>
      <div className={styles.overlay}/>
      <div className={styles.appContainer}>
        <div className={[styles.appIcon,styles.personalApp].join(" ")}/>
      </div>
    </div>
  )
}

export default Footer;