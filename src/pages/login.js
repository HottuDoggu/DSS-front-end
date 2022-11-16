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
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import styles from "../styles/css/admin-components/admin-login.module.css";
import Image from "next/image";
import axios from "axios";
import { serverApi } from "../utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const router = useRouter();
  const errorMessage = (mes) => toast.error(mes);
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("*Required"),
    password: Yup.string().required("*Required"),
  });

  const messageInitialState = {
    text: "",
    severity: "success",
  };

  const [message, setMessage] = useState(messageInitialState);
  const [open, setOpen] = useState(false);

  const goUser = () => {
    router.push("/userlogin");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data, { resetForm }) => {
    axios.post(`${serverApi}users/admin/login`, data).then((response) => {
      if (response.data.error) {
        console.log("error");
        errorMessage(response.data.error);
        return;
      }
      console.log(response.data);
      sessionStorage.setItem("__AID", 1);
      router.push("/admin");
    });
  };

  useEffect(() => {
    sessionStorage.removeItem("__UID");
    sessionStorage.removeItem("__AID");
  }, []);

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
                color: "white",
              }}
            >
              Admin Sign In
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
                    Sign In
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
        <div className={styles.text}>Specialization Track Assessment</div>
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
