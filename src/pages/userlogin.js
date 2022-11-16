import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import {Formik, Form, ErrorMessage,Field} from "formik";
import * as Yup from "yup";
import styles from '../styles/css/user-login.module.css';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { serverApi } from "../utils/api";
export default function Userlogin() {
  const router = useRouter();
  const errorMessage = (mes) => toast.error(mes);
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('*Required'),
    password:Yup.string().required('*Required')

  });

  useEffect(()=>{
    sessionStorage.removeItem("__UID");
    sessionStorage.removeItem("__AID");
  },[])

  const messageInitialState = {
    text: "",
    severity: "success",
  };

  const [message, setMessage] = useState(messageInitialState);
  const [open, setOpen] = useState(false);
  
  
  const onSubmit = (data,{resetForm}) =>{
    axios.post(`${serverApi}users/login`,data).then((response)=>{
      if(response.data.error){
        console.log(response.data.error);
        errorMessage(response.data.error);
        return;
      }
      sessionStorage.setItem("__UID",response.data.uid);
      router.push('/userhome')
      
      // location
    });
  }

  const goAdmin = () => {
    router.push("/login");
  };

  const goBack = () => {
    router.push("/");
  };

  const goRegister = () => {
    router.push("/register");
  };
  
  const goForgot = () => {
    router.push("/forgot");
  };

  const goHome = () => {
    router.push("/")
  }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{
     
      display:"flex",
      flexDirection:"row"
    }}>
      <Head>
        <title>Assessment Form</title>
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <Box
        sx={{
          width: "60vw",
          height: "99.6vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Box elevation={10}
            sx={{
              padding: "80px",
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            <Typography
              sx={{
                fontSize: "40px",
                fontFamily: "Poppins",
                textAlign: "center",
                color:"white"
              }}
            >
             Sign In 
            </Typography>
            <Box sx={{ display: "flex" }}>
            
            <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit} >
              <Form style={{display: "flex", flexDirection: "column",alignItems:"center",justifyContent:"center"}}>
                <div className={styles.input__box} >
                  <p>Enter Email</p>
                <Field name="email" placeholder="Enter Email"  className={styles.input} />
                <ErrorMessage name="email" component="span" style={{color:"red"}} />
                </div>
                <div className={styles.input__box}>
                <p>Enter Password</p>
                <Field name="password" type="password" placeholder="Enter Password" className={styles.input} />
                <ErrorMessage name="password" component="span" style={{color:"red"}} />
                <button onClick={goForgot} type="button" className={styles.forgot__button} > Forgot password? </button>
                </div>
                <div className={styles.button}>
               <button type="submit" className={styles.submit__button} >Sign In</button>
               {/* <button onclick={goHome} type="return" className={styles.return__button} >Return</button> */}
               </div>
               <div className={styles.button1}>
               <p>Dont have an account? Please<button  onClick={goRegister} className={styles.register__button} >Sign Up</button></p>
               </div>
               <div className={styles.button2}>
               <button onClick={goAdmin}  type="button" className={styles.admin__button} > Login as Admin </button>
               </div>
              </Form>
            </Formik>
            </Box>

          </Box>
        </Box>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          onClose={handleClose}
          autoHideDuration={3000}
        >
          <Alert
            onClose={handleClose}
            severity={message.severity}
            sx={{ width: "100%" }}
          >
            {message.text}
          </Alert>
        </Snackbar>
      </Box>
     <div className={styles.bsu__logo}>
      <div className={styles.text}>
    Sign In <br></br><p>using your existing account</p>
     </div>
      <div className={styles.logo1}>
      <img src="/assets/bsulogo.png" alt="logo" width={200} height={200} />
      <div className={styles.logo2}>
        <div className={styles.pic1}>
      <img src="/assets/bustoslogo.png" alt="logo" width={200} height={200} />
      </div>
      <img src="/assets/citelogo.png" alt="logo" width={200} height={200} />
      </div>
      </div>
     </div>
     <ToastContainer/>
    </div>
  );
}
