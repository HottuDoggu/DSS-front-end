import React from 'react'
import Image from "next/image";
import { useRouter } from "next/router";
import Head from 'next/head';
import styles from "../styles/css/general/userlayout.module.css"

export default function AdminLayout() {
  const router = useRouter();
  const goLog = () => {
    router.push("/userlogin");
  };

  const goHome = () => {
    router.push("/admin");
  };

  const goProf = () => {
    router.push("/respondents");
  };

  const goRes = () => {
    router.push("/result");
  };

  return (
    <div className={styles.header__container}>
      <Head>
        <title>Assessment Form</title>
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      
      <div className={styles.header__box}>
        <div className={styles.header__logo}>
          <Image src="/assets/bsulogo.png" width={70} height={70} alt="logo" />
          <h3>Bulacan State University</h3>
        </div>
        <span className={styles.flexspace} />
        <div className={styles.nav__bar}>
          <button onClick={goHome} className={styles.login__button}>
            Home
          </button>
          <button onClick={goProf} className={styles.login__button}>
            Users
          </button>
          <button onClick={()=>{router.push('/admin/manage-test')}} className={styles.login__button}>
           Test
          </button>
          <button onClick={goLog} className={styles.register__button}>
            Logout
          </button>
        </div>
      </div>
      </div>
  )
}
