import React, { useEffect, useState } from "react";
import styles from "../styles/css/admin-components/manage-test.module.css";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DisplayTest from "./display-test";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { serverApi } from "../utils/api";
export default function TestManagement() {
  const [testData, setTestData] = useState([]);
  // const [testTotal, setTestTotal] = useState(0);
  const success = () => toast.success("SUCCESSULly ADDED QUESTIONS!");
  const initialValues = {
    question: "",
    totalanswer:""
  };

  const validationSchema = Yup.object().shape({
    question: Yup.string().required("Question is required"),
    totalanswer: Yup.string().required("Total Answer required"),
  });

  const onSubmit = (data, { resetForm }) => {
  
    axios
      .post(`${serverApi}test/questions/create`, data)
      .then((response) => {
        console.log(response.data);
        success();
        renderQuestions();
      });
    resetForm();
  };

  useEffect(() => {
    renderQuestions();
  }, []);

  const renderQuestions = () => {
    axios.get(`${serverApi}test/questions/fetch`).then((response) => {
      console.log(response.data);
      setTestData(response.data);
    });
  };
  return (
    <div className={styles.webdev__container}>
      <div className={styles.webdev__addtest}>
        <div className={styles.addtest__header}>
          <h2>SPECIALIZATION ASSESSMENT</h2>
          <div>
            <b>{testData.length}/15</b> <button>RESET</button>{" "}
          </div>
        </div>
        <div className={styles.addtest__content}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form autoComplete="off">
              <div className={styles.input__box}>
                <div>
                  <b>Q</b>
                </div>
                <Field
                  name="question"
                  placeholder="Enter a Question (Note. Do not add question mark)"
                  className={styles.input__question}
                />
              </div>
              <div className={styles.choices__box}>
                
                <div className={styles.choices__box1}>
                  <div className={styles.input__box2}>
                    <div>
                      <b>TOTAL ANSWER</b>
                    </div>
                    <Field
                      name="totalanswer"
                      className={styles.input__answer}
                      type="number"
                    >
                     
                    </Field>
                  </div>
                  <div className={styles.input__box1}>
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </div>
              <div className={styles.error__box}>
                <ErrorMessage name="question" component="span" />
                <ErrorMessage name="totalanswer" component="span" />
                <ErrorMessage name="category" component="span" />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      

    <div className={styles.display__box} >
      <h1>{testData.length > 0? 'TEST' : null}  </h1>
      {
        testData.map((data)=>{
          return(
            <div key={data.id} >
            <DisplayTest data={data} render={renderQuestions} />
              </div>
          )
        })
      }
      </div>
     
      <ToastContainer/>
    </div>
  );
}
