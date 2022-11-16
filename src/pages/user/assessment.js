import axios from "axios";
import React, { useEffect, useState } from "react";
import UserLayout from "../../user-components/userLayout";
import Questions from "./components/questions";
import styles from "./css/assessment.module.css";
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { serverApi } from "../../utils/api";
export default function Assessment() {
  const errorMessage = (mes) => toast.error(mes);
  const router = useRouter();
  let count = 1;
  const [size,setSize] = useState(0);
  const [questions, setQuestions] = useState([]);

  const getQuestion = () => {
    axios.get(`${serverApi}test/questions/fetch`).then((response) => {
      setQuestions(response.data);
      let n = 0;
      response.data.map((val)=>{
        n = n + Number(val.totalanswer);
      });
      setSize(n);
    });
    //  console.log(question);
  };
  useEffect(() => {
    const uid = sessionStorage.getItem("__UID");
    if(!uid){
      router.push('/userlogin');
    }
    getQuestion();
  }, []);

  const [useranswer, setUserAnswer] = useState([]);

  const removeAnswer = (cid,qid,ccategory) =>{
  //  console.log(cid,"cid");
    if(useranswer.length == 0){
      return;
    }
    else{
      
     let setData = [];
     useranswer.map((e)=>{
   //   console.log(e.cid,cid,"d");
      if(e.cid != cid ){
    setData.push({...e});
      }
     });
   
     const newData = {cid:cid,qid:qid,ccategory:ccategory};
      setUserAnswer([...setData]);
    }
  }
  
  const saveAnswer = (cid,qid,ccategory,description) =>{
    console.log(cid,"cid");
    if(useranswer.length == 0){
      const newData = {cid:cid,qid:qid,ccategory:ccategory,desc:description};
      setUserAnswer([newData])
    }
    else{
      
     let setData = [];
     useranswer.map((e)=>{
      console.log(e.cid,cid,"d");
      if(e.cid != cid ){
    setData.push({...e});
      }
     });
   
     const newData = {cid:cid,qid:qid,ccategory:ccategory,desc:description};
      setUserAnswer([...setData,newData]);
    }
  }

  const handleSubmit = () =>{

    if(useranswer.length != size){
        console.log("kulang");
        errorMessage("Incomplete Answer");
        return;
    }
    let webdevScore = 0;
    let webdevAverage = 0;
    let businessScore = 0;
    let businessAverage = 0;
    let serviceScore = 0;
    let serviceAverage = 0;

    if(useranswer.length < questions.length){
      console.log('incomplete answer');

      return;
    }

    useranswer.map((data)=>{

      if(data.ccategory == "webdev"){
        webdevScore+=1;
      }
      if(data.ccategory == "service"){
        serviceScore+=1;
      }
      if(data.ccategory == "business"){
        businessScore+=1;
      }
    });

    console.log("score",webdevScore,serviceScore,businessScore)
    webdevAverage = webdevScore / size * 100;
    serviceAverage = serviceScore / size * 100;
    businessAverage = businessScore / size * 100;
    let uid = sessionStorage.getItem("__UID");

    let rec = "";
    let num = "";

    if(webdevAverage > serviceAverage && webdevAverage >businessAverage){
      rec = "Web and Mobile Development"
      num = "webdev";
    }
    else if(webdevAverage < serviceAverage && serviceAverage >businessAverage){
      rec = "Service Management"
      num = "service";
      
    }
    else if(businessAverage > serviceAverage && webdevAverage < businessAverage){
      rec = "Business Analytics"
      num = "business";
    }
    else if(webdevAverage == serviceAverage && webdevAverage > businessAverage){
      rec = "WebDev and Service Management"
      num = "webdev";
    }
    else if(webdevAverage < serviceAverage && serviceAverage == businessAverage){
      rec = "Service and Business Analytics"
      num = "service";
    }
    else if(webdevAverage == businessAverage && serviceAverage < businessAverage){
      rec = "Webdev and Business Analytics"
      num = "business";
    }
    else if(webdevAverage == businessAverage && serviceAverage == businessAverage){
      rec = "Recommended All"
      num = "service";
    }
    console.log(useranswer);

    useranswer.map((val)=>{
      const uid = sessionStorage.getItem("__UID");
      let newData = {description:val.desc,QuestionId:val.qid,UserId:uid};
      axios.post(`${serverApi}answers/save`,newData).then((response)=>{
       console.log(response.data)
   })
    })

    const data = {webdevscore:webdevScore,servicescore:serviceScore,businessscore:businessScore,webdevave:webdevAverage,serviceave:serviceAverage,businessave:businessAverage,recommendation:rec,total:size,UserId:uid}
    axios.post(`${serverApi}results/create/${num}`,data).then((response)=>{
      console.log(response.data)
    })
    console.log("average",webdevAverage,serviceAverage,businessAverage);
    router.push('/rate')
  }
                       
  return (
    <div className={styles.container}>
      
      <div className={styles.header}>
        <UserLayout />
      </div>
      <div className={styles.content}>
       
        <div className={styles.question__box}>
        <h1>SPECIALIZATION ASSESSMENT</h1>
        {/* <button onClick={()=>{console.log(useranswer)}} >sad</button> */}
         <div>
         {questions
            .map((data) => {
              return (
                <div key={data.id} >
                  <div className={styles.question__box2}>
                  {count++}.
                 <Questions data={data} saveAnswer={saveAnswer} removeAnswer={removeAnswer} />
                </div>
                </div>
              );
            })}
         </div>
        </div>
        <button onClick={handleSubmit} className={styles.submit__btn} >Submit</button>
       
      </div>
     

    <ToastContainer/>
    </div>
  );
}
