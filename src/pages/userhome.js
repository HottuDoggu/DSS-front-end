import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../styles/css/general/userlayout.module.css";
import UserLayout from "../user-components/userLayout";
import DisplayUserResults from "./user/display-result";
import {Formik,Form,Field,ErrorMessage} from "formik"
import styled from "@emotion/styled";
import { Divider } from "@mui/material";
import { serverApi } from "../utils/api";
import Image from "next/image";
//../../styles/css/general/home.module.css
export default function UserPage() {
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

  const [userData,setUserData] = useState([]);
  const [isTest,setIsTest] = useState(false);
  const getUserData = () => {
    const uid = sessionStorage.getItem("__UID");
    if(!uid){
      router.push('/');
    }

    axios.get(`${serverApi}users/profile/${uid}`).then((response)=>{
   //   console.log(response.data);
      setUserData(response.data);
      setIsTest(response?.data?.test);
    });

  }

  useEffect(()=>{
    getUserData();
  },[]);

  
  const handleVisible = () => {
    setVisible(!visible);
  }

  const [visible,setVisible] = useState(false);

  return isTest? <DisplayUserResults/> : (
    <div className={styles.home__container}>
      <Head>
        <title>Assessment Form</title>
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <div className={styles.header1}>
       <UserLayout/>
      </div>
      <div className={styles.container__image__content1}>
        <div className={styles.text__content1}>
        <p>Specialization Track Decision Support System</p>
        </div>
      <div className={styles.image__content1}>
    <Image src="/assets/book.png" width={400} height={400} alt= "logo" />
      </div>
      <div className={styles.content1} >
            <button onClick={handleVisible} className={styles.content__button} >TAKE THE ASSESSMENT</button>
          
      </div>
      </div>
      {visible === true && (
        <OuterBox>
          <InnerBox>
            <SurveyInfo
              handleVisible={handleVisible}
             
            />
          </InnerBox>
        </OuterBox>
      )}
    </div>
  );
}


const SurveyInfo = (props) => {

  const router = useRouter();
  const {handleVisible} = props;
  const initialValues = {
    preffered:"",
    it102:"",
    it103:"",
    it104:"",
    it105:"",
    it106:"",
    it107:"",
  }

  const onSubmit = (data,{resetForm}) =>{
    const uid = sessionStorage.getItem("__UID");
    if(!uid){
      router.push('/');
    }
    console.log(data)
    axios.post(`${serverApi}users/save/info/${uid}`,data).then((response)=>{
      if(response.data.error){
        router.push('/user/assessment');
        return;
       }
      router.push('/user/assessment');
      console.log(response.data);
    })
  }

  return(
    <div className={styles.survey__container} >
      <h2>USER ADDITIONAL INFORMATION</h2>
      <Divider/>
      <p>FILL UP FORM:</p>
      <Formik initialValues={initialValues} onSubmit={onSubmit} >
        <Form className={styles.form} >
          <Field name="preffered" as="select" required className={styles.field} >
            <option value="" disabled selected hidden >Preffered Specialization</option>
            <option value="webdev" >Web and Mobile Development</option>
            <option value="service" >Service Management</option>
            <option value="business" >Business Analytics</option>
          </Field>
          <Field name="it102" as="select" required className={styles.field} >
            <option value="" disabled selected hidden >Grade:IT 102 - Introduction to Computing</option>
            <option value="1.00" >1.00</option>
            <option value="1.25" >1.25</option>
            <option value="1.50" >1.50</option>
            <option value="1.75" >1.75</option>
            <option value="2.00" >2.00</option>
            <option value="2.25" >2.25</option>
            <option value="2.50" >2.50</option>
            <option value="2.75" >2.75</option>
            <option value="3.00" >3.00</option>
            <option value="N/A" >Not Applicable</option>
          </Field>
          <Field name="it103" as="select" required className={styles.field} >
            <option value="" disabled selected hidden >Grade: IT 103 - Computer Programming 1</option>
            <option value="1.00" >1.00</option>
            <option value="1.25" >1.25</option>
            <option value="1.50" >1.50</option>
            <option value="1.75" >1.75</option>
            <option value="2.00" >2.00</option>
            <option value="2.25" >2.25</option>
            <option value="2.50" >2.50</option>
            <option value="2.75" >2.75</option>
            <option value="3.00" >3.00</option>
            <option value="N/A" >Not Applicable</option>
          </Field>
          <Field name="it104" as="select" required className={styles.field} >
            <option value="" disabled selected hidden >Grade:IT 104 - Hardware System and Servicing</option>
            <option value="1.00" >1.00</option>
            <option value="1.25" >1.25</option>
            <option value="1.50" >1.50</option>
            <option value="1.75" >1.75</option>
            <option value="2.00" >2.00</option>
            <option value="2.25" >2.25</option>
            <option value="2.50" >2.50</option>
            <option value="2.75" >2.75</option>
            <option value="3.00" >3.00</option>
            <option value="N/A" >Not Applicable</option>
          </Field>
          <Field name="it105" as="select" required className={styles.field} >
            <option value="" disabled selected hidden >Grade:IT 105 - Computer Programming 2</option>
            <option value="1.00" >1.00</option>
            <option value="1.25" >1.25</option>
            <option value="1.50" >1.50</option>
            <option value="1.75" >1.75</option>
            <option value="2.00" >2.00</option>
            <option value="2.25" >2.25</option>
            <option value="2.50" >2.50</option>
            <option value="2.75" >2.75</option>
            <option value="3.00" >3.00</option>
            <option value="N/A" >Not Applicable</option>
          </Field>
          <Field name="it106" as="select" required className={styles.field} >
            <option value="" disabled selected hidden >Grade:IT 106 - Networking 1</option>
            <option value="1.00" >1.00</option>
            <option value="1.25" >1.25</option>
            <option value="1.50" >1.50</option>
            <option value="1.75" >1.75</option>
            <option value="2.00" >2.00</option>
            <option value="2.25" >2.25</option>
            <option value="2.50" >2.50</option>
            <option value="2.75" >2.75</option>
            <option value="3.00" >3.00</option>
            <option value="N/A" >Not Applicable</option>
          </Field>
          <Field name="it107" as="select" required className={styles.field} >
            <option value="" disabled selected hidden >Grade:IT 107 - Discrete Structure for IT</option>
            <option value="1.00" >1.00</option>
            <option value="1.25" >1.25</option>
            <option value="1.50" >1.50</option>
            <option value="1.75" >1.75</option>
            <option value="2.00" >2.00</option>
            <option value="2.25" >2.25</option>
            <option value="2.50" >2.50</option>
            <option value="2.75" >2.75</option>
            <option value="3.00" >3.00</option>
            <option value="N/A" >Not Applicable</option>
          </Field>

          <div className={styles.survey__btn} >
              <button onClick={handleVisible} >BACK</button>
              <button type="submit" >PROCEED</button>
          </div>
        </Form>
      </Formik>

    </div>
  )
}


const OuterBox = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  backdrop-filter: blur(10px);
  display: flex;
  alignitems: center;
  justifycontent: center;
`;

const InnerBox = styled.div`
  margin: auto;
`;

