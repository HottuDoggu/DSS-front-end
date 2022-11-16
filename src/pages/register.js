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
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import styles from "../styles/css/register.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { serverApi } from "../utils/api";
export default function Register() {
  const router = useRouter();
  const errorMessage = (mes) => toast.error(mes);
  const initialValues = {
    email: "",
    password: "",
    studentnumber: "",
    name: "",
    test: false,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("*Required"),
    password: Yup.string().required("*Required"),
    name: Yup.string().required("Required"),
    studentnumber: Yup.string().required("Required"),
  });

  const messageInitialState = {
    text: "",
    severity: "success",
  };

  const [message, setMessage] = useState(messageInitialState);
  const [open, setOpen] = useState(false);

  const onSubmit = (data, { resetForm }) => {
    console.log(data);
    axios.post(`${serverApi}users/create`, data).then((response) => {
      if (response.data.status == 400) {
        errorMessage(response.data.message);
        console.log(response.data.message);
      } else {
        router.push("/userlogin");
      }
      return;
    });
  };

  const goUser = () => {
    router.push("/userlogin");
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Head>
        <title>Assessment Form</title>
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      
      <Box
        sx={{
          width: "50%",
          height: "99.6vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Box
            elevation={10}
            sx={{
              padding: "50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            <Typography
              sx={{
                fontSize: "50px",
                fontFamily: "Poppins",
                textAlign: "center",
                color: "white",
              }}
            >
              Sign Up
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={onSubmit}
              >
                <Form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className={styles.input__box}>
                    <p>Enter Name</p>
                    <Field
                      name="name"
                      placeholder="Enter Name"
                      className={styles.input}
                    />
                    <ErrorMessage
                      name="name"
                      component="span"
                      style={{ color: "red" }}
                    />
                  </div>
                  <div className={styles.input__box}>
                  <p>Enter Email</p>
                    <Field
                      name="email"
                      placeholder="Enter Email"
                      className={styles.input}
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      style={{ color: "red" }}
                    />
                  </div>
                  <div className={styles.input__box}>
                  <p>Enter Student Number</p>
                    <Field
                      name="studentnumber"
                      type="number"
                      placeholder="Enter Student Number"
                      className={styles.input}
                    />
                    <ErrorMessage
                      name="studentnumber"
                      component="span"
                      style={{ color: "red" }}
                    />
                  </div>
                  <div className={styles.input__box}>
                  <p>Enter Password</p>
                    <Field
                      name="password"
                      type="password"
                      placeholder="Enter Password"
                      className={styles.input}
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      style={{ color: "red" }}
                    />
                  </div>
                  <button type="submit" className={styles.submit__button}>
                    REGISTER
                  </button>
                  <div className={styles.button1}>
                    <button
                      onClick={goUser}
                      type="button"
                      className={styles.user__button}
                    >
                      {" "}
                      Login as User{" "}
                    </button>
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
          Create an Account <br></br><p> to continue using our website</p>
        </div>
        <div className={styles.logo1}>
          <img src="/assets/bsulogo.png" alt="logo" width={200} height={200} />
          <div className={styles.logo2}>
            <div className={styles.pic1}>
              <img
                src="/assets/bustoslogo.png"
                alt="logo"
                width={200}
                height={200}
              />
            </div>

            <img
              src="/assets/citelogo.png"
              alt="logo"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
