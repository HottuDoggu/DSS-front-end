import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import styles from "../../styles/css/general/home.module.css"

export default function GeneralHeader() {
  const router = useRouter();

  const goLog = () => {
    router.push("/userlogin")
  }

  const goReg = () => {
    router.push("/register")
  }

  return (
    <div className={styles.header__container}>
     <div className={styles.header__box}>
      <div className={styles.header__logo}>
        <Image src="/assets/bsulogo.png" width={70} height={70} alt="logo" />
        <h3>Bulacan State University</h3>
      </div>
      <span className={styles.flexspace} />
      <div className={styles.nav__bar}>
      <button className={styles.about__button} href="#about" >About Us</button>
      <button className={styles.contacts__button} href="#contact">Contacts</button>
      <button onClick={goLog} className={styles.login__button} >Login</button>
      <button onClick={goReg} className={styles.register__button}>Register</button>
      </div>
      </div> 
    </div>
  )
}
