import axios from "axios";
import React, { useEffect, useState } from "react";
import { serverApi } from "../../../utils/api";
import styles from "../css/assessment.module.css";
export default function Questions(props) {
  const { data, saveAnswer, removeAnswer } = props;

  

  const [choicesData, setChoicesData] = useState([]);
  
  useEffect(() => {
    getChoicesData();
  }, []);
  const getChoicesData = () => {
    axios
      .get(`${serverApi}test/choice/fetch/${data.id}`)
      .then((response) => {
        // console.log(response.data);
        setChoicesData(response.data);
      });
      setTotalAnswer(data.totalanswer);
  };

  const [answerCount,setAnswerCount] = useState(1);
  const [totalAnswer,setTotalAnswer] = useState(1);

  const handleCount = (action,cid,ccategory,description) => {
   // console.log(Number(data.totalanswer)+Number(answerCount))
   
   console.log(Number(totalAnswer));
    if(action == 1){
      if(Number(totalAnswer) >=  Number(answerCount)){
        setAnswerCount(Number(answerCount) + 1);
        saveAnswer(cid,data.id,ccategory,description);
          return true;
      }
      else if (Number(totalAnswer) <  Number(answerCount)){
        console.log(answerCount,"hsh");
        return false;
      }
    }
    if(action == 2){
      setAnswerCount(Number(answerCount) - 1)
      console.log(Number(answerCount) - 1);
      console.log('-');
      removeAnswer(cid,data?.id,ccategory,description);
      return;
    }
   
  }

  return (
    <div>
      <div className={styles.test__question}>
        <h3>Q. {data?.question}?</h3>{" "}
        <div> Required Answer: {data?.totalanswer}</div>
      </div>
      <div className={styles.test__choices}>
        {choicesData.map((data) => {
          return <div key={data.id} ><ChoiceInfo data={data} handleCount={handleCount} /></div>;
        })}
      </div>
    </div>
  );
}

const ChoiceInfo = (props) => {
  const {data, handleCount} = props;
  const [isSelected,setIsSelected] = useState(false);
  const [buttonColor,setButtonColor] = useState('white');
  const handleSelected = () => {


    if(isSelected){
      
      setButtonColor('gray');
      setIsSelected(false);
     const temp = handleCount(2,data.id,data.category,data.value);

      return
    }
    if(!isSelected)  {
      const temp = handleCount(1,data.id,data.category,data.value);
      if(!temp){
        console.log(temp)
        return;
      }
      setButtonColor('white');
      setIsSelected(true);
    }
  }
  return (
    <div className={styles.choice__box} >
      <button onClick={handleSelected} style={{backgroundColor: isSelected? 'gray': 'white'}} ></button><div>{data.value}</div>
    </div>
  )
};
