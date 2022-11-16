import React, { useEffect, useState } from "react";
import styles from "../styles/css/admin-components/manage-test.module.css";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { useRouter } from "next/router";
import axios from "axios";
import { serverApi } from "../utils/api";
export default function DisplayTest(props) {
  const router = useRouter();

  const { data,render } = props;
  const [question, setQuestion] = useState();
  const [totalAns, setTotalAns] = useState();


  useEffect(() => {
    setQuestion(data.question+"?");
    setTotalAns(data.totalanswer);
  }, []);

  const viewChoices = (id) => {
    router.push({
      pathname:"/admin/manage-choices",
      query:{questionId:data.id,question:question}
    },"/admin/manage-choices")
  }

  const handleDelete = (id) => {
    axios.post(`${serverApi}test/questions/delete/${id}`).then((response)=>{
      console.log(response.data)
      render();
    })
  }

  const [changeBtn,setChangeBtn] = useState(true);

  const handleChange = (id) => {
        const data = {question:question,totalanswer:totalAns};

        axios.post(`${serverApi}test/questions/update/${id}`,data).then((response)=>{
          console.log(response.data);
          render();
        })
  }

  

  return (
    <div>
      <div className={styles.webdev__display}>
        <div className={styles.addtest__header_display}>
          <h2>QUESTION</h2>
          <div>
            <button onClick={()=>{handleChange(data.id)}} >SAVE CHANGES</button>
            <button onClick={viewChoices} >MANAGE CHOICES</button>
            <button onClick={()=>{handleDelete(data.id)}} >DELETE</button>
          </div>
        </div>
        <div className={styles.addtest__content}>
          <div>
            <div>
              <div className={styles.input__box}>
                <div>
                  <b>Q</b>
                </div>
                <input
                  name="question"
                  value={question}
                  onChange={(e)=>{
                    setQuestion(e.target.value)
                  }}
                  placeholder="Enter a Question (no question mark)"
                  className={styles.input__question}
                />
              </div>
              <div className={styles.choices__box}>
                <div className={styles.choices__box1}>
                  <div className={styles.input__box1}>
                    <div>
                      <b>ANS</b>
                    </div>
                    <input
                      name="answer"
                      className={styles.input__answer}
                      type="number"
                      value={totalAns}
                      onChange={(e)=>{
                        setTotalAns(e.target.value)
                      }}
                    ></input>
                  </div>
                </div>
                
              </div>
              <div className={styles.error__box}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
