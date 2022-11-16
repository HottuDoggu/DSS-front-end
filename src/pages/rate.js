import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";
import styles from "../styles/css/general/userlayout.module.css";
import { Typography, Rating, Button } from "@mui/material";
import axios from "axios";
import { serverApi } from "../utils/api";
//../../styles/css/general/home.module.css
export default function Reviews() {
  const router = useRouter();
  const [value, setValue] = useState(0);

  const goLog = () => {
    router.push("/userlogin");
  };

  const goTest = () => {
    router.push("/userhome");
  };

  const goRate = () => {
    router.push("/rate");
  };

  const handlerate = () =>{
    console.log('submit')
    const id = sessionStorage.getItem("__UID");
    const data = {UserId:id,rate:value};
    axios.post(`${serverApi}rate/create`,data).then((response)=>{
     
      console.log(response.data);
      router.push('/user/display-result');
    }) 
  }

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
          {/* <button onClick={goHome} className={styles.login__button}>
            Home
          </button> */}
          <button onClick={goTest} className={styles.login__button}>
            Home
          </button>
          <button onClick={goLog} className={styles.register__button}>
            Logout
          </button>
        </div>
      </div>

      <Box
        sx={{
         backgroundColor: "white",
          border: "1px solid black",
          borderRadius: "50px",
          width: "1200px",
          height: "500px",
          textAlign: "center",
          marginTop: "50px",
          display: "flex",
        }}
      >
        <Box>
          <Box sx={{marginLeft: "100px"}}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "30px",
              marginTop: "100px",
            }}
          >
            Thank you for using our website.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "20px",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            Please give us a feedback
          </Typography>
          </Box>
        <Box
          sx={{
            width: "250px",
            marginLeft: "210px",
            display: "inherit",
            flexDirection: "column",
          
          }}
        >
          <Box
            sx={{
              "& > legend": { mt: 2 },
              marginTop: "70px",
              border: "none",
              borderRadius: "10px",
              backgroundColor: "#848489",
              height: "40px",
          
            }}
          >
            <Rating
              size="large"
              name="rating"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              //  console.log(newValue)
              }}
              sx={{
                alignItems: "center",
                justifyContent: "center",
                height: "40px",
            
              }}
            />
          </Box>
          <Button variant="contained" sx={{
            marginTop: "20px",
            fontSize: "15px",
            fontFamily: "Poppins"
          }}
          onClick={handlerate} >SUBMIT</Button>
        </Box>
        </Box>
        <div className={styles.bsu__logo}>
          <div className={styles.logo1}>
            <img
              src="/assets/bsulogo.png"
              alt="logo"
              width={200}
              height={200}
            />
            <div className={styles.logo2}>
              <img
                src="/assets/bustoslogo.png"
                alt="logo"
                width={200}
                height={200}
              />
              <img
                src="/assets/citelogo.png"
                alt="logo"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}
