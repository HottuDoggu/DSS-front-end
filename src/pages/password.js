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
import styles from "../styles/css/user-login.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { serverApi } from "../utils/api";
export default function Userlogin() {
  const router = useRouter();
  const email = router.query.email;
  const errorMessage = (mes) => toast.error(mes);
  const initialValues = {
    cpass: "",
    pass: "",
  };

  const validationSchema = Yup.object().shape({
    cpass: Yup.string().required("*Required"),
    pass: Yup.string().required("*Required"),
  });

  const messageInitialState = {
    text: "",
    severity: "success",
  };

  const [message, setMessage] = useState(messageInitialState);
  const [open, setOpen] = useState(false);

  const onSubmit = (data, { resetForm }) => {
    if (data.cpass != data.pass) {
      errorMessage("Password do not match!");
      return;
    }

    if (!email) {
      router.push("/userlogin");
    }

    axios
      .post(`${serverApi}users/change/password/${email}`, data)
      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
          errorMessage(response.data.error);
          return;
        }
        console.log(response.data);

        router.push("/userlogin");

        // location
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        border: "1px solid black",
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
          height: "100vh",
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
                fontSize: "30px",
                fontFamily: "Poppins",
                textAlign: "center",
                color: "white",
              }}
            >
              Change Password for {email}
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
                      name="pass"
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
                  <div className={styles.input__box}>
                    <Field
                      name="cpass"
                      type="password"
                      placeholder="Confirm Password"
                      className={styles.input}
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      style={{ color: "red" }}
                    />
                  </div>
                  <div className={styles.button}>
                    <button type="submit" className={styles.submit__button}>
                      Confirm
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
        <div className={styles.text}>SPECIALIZATION TRACK ASSESSMENT</div>
        <div className={styles.logo1}>
          <img src="/assets/bsulogo.png" alt="logo" width={200} height={200} />
          <div className={styles.logo2}>
            <img
              src="/assets/bustoslogo.png"
              alt="logo"
              width={200}
              height={200}
            />
            <div className={styles.image1}>
              <img
                src="/assets/citelogo.png"
                alt="logo"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
