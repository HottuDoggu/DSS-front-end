import React, { useState, useEffect } from "react";
import styles from "./css/manage-choices.module.css";
import { useRouter } from "next/router";
import AdminLayout from "../../admin-components/adminLayout";
import { Divider } from "@mui/material";
import styled from "@emotion/styled";
import {Formik,Form,Field} from 'formik'
import axios from "axios";
import { serverApi } from "../../utils/api";


export default function ManageChoices() {
  const router = useRouter();
  const id = router.query.questionId;
  const question = router.query.question;
  useEffect(() => {
    if(!id){
      goback();
      return;
    }
    getChoicesData();
  }, []);

  const handleVisible = () => {
    setVisible(!visible);
  }

  const [visible,setVisible] = useState(false);
  const [choicesData,setChoicesData] = useState([]);

  const getChoicesData = () => {
    axios.get(`http://localhost:3001/test/choice/fetch/${id}`).then((response)=>{
      console.log(response.data);
      setChoicesData(response.data);
    })
  }

  const handleChoiceDelete = (id) => {
    axios.post(`http://localhost:3001/test/choice/delete/${id}`).then((response)=>{
      console.log(response.data);
      getChoicesData();
    })
  }

  const goback = () => {
    router.push('/admin/manage-test') ;
  }
  return (
    <div className={styles.manage__container}>
      <div className={styles.header}>
        <AdminLayout />
      </div>
      <div className={styles.content}>
        <div className={styles.content__header}>
          <button onClick={goback} >Back</button>
        </div>
        <div className={styles.question__box} >
              <h2>Q. {question}</h2>
              <Divider/>
            <button onClick={handleVisible} className={styles.add__btn} >+ ADD CHOICES</button>
            <h3>CHOICES:</h3>
            <div>
              {
                choicesData.map((data)=>{
                  return(
                    <div key={data.id} className={styles.choice__box} >
                      <div className={styles.choice__value}>
                      {data.value} 
                        </div>
                       <div  className={styles.choice__btn}>
                       <button className={styles.delete__btn} onClick={()=>{handleChoiceDelete(data.id)}} >Delete</button>
                        </div>
                      </div>
                  )
                })
              }
            </div>

        </div>
      </div>

      {visible === true && (
        <OuterBox>
          <InnerBox>
            <AddChoice
              handleVisible={handleVisible}
              id={id}
              getChoicesData={getChoicesData}
            />
          </InnerBox>
        </OuterBox>
      )}

    </div>
  );
}

const AddChoice = (props) => {
  const {id,handleVisible,getChoicesData} = props;

const initialValues = {
  value:"",
  category:"",
  QuestionId:id
}

 const onSubmit = (data,{resetForm}) => {
  console.log(data);
  axios.post(`${serverApi}test/choice/save/${id}`,data).then((response)=>{
    console.log(response.data);
    {resetForm}
    getChoicesData();
    handleVisible();

  })
 }

const [isSaving,setIsSaving] = useState(false);

  return(
    <div className={styles.add__container} >
    <div className={styles.back__btn} >
      <button onClick={handleVisible} >BACK</button>
    </div>
    <Formik initialValues={initialValues} onSubmit={onSubmit} >
      <Form autoComplete="off" className={styles.add__form} >
        <Field name="value" placeholder="Choice Description" required className={styles.choices__input} />
        <Field as="select" name="category" required className={styles.choices__input1} >
          <option value="" disabled selected hidden >CATEGORY</option>
          <option value="webdev" >WEBDEV</option>
          <option value="business" >BUSINESS</option>
          <option value="service" >SERVICE</option>
        </Field>
        <button type="submit" > {isSaving? 'Saving...' : 'SAVE'} </button>
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

