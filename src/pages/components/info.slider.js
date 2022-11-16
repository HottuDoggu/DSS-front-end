import React, { useEffect,useState } from 'react'
import styles from '../../styles/css/general/home.module.css';
import Image from 'next/image';
import {webInfo} from '../../admin-components/information-data';
import { useRouter } from 'next/router';

export default function InfoSlider(props) {

  const [step, setStep] = useState(0);

  const router = useRouter();
  
  var interval;
  useEffect (()=>{
    interval = setInterval(()=> {
      let temp = step + 1;

      if (temp == 5){
        setStep(0);
      } else {
        setStep(temp);
      }
    }, 5000);
    return()=> clearInterval(interval);
  },[step]);

  const handleNext = () => {
    let temp = step + 1;
    if (temp == 5) {
      setStep(0);
    } else {
      setStep(temp);
    }
  }
  const handleBack = () => {
    let temp = step - 1;
     if (temp == 0) {
       setStep(4);
     } else {
       setStep(temp);
     }
  }

  const goInfo = () => {
    router.push("/moreinfo");
  };

  const displayItems = webInfo.slice(step,step + 1).map((val)=>{
    return(
      <div className={styles.info__box} key={val.id} style={{backgroundImage:`url(${val.image})`}} >
          <div className={styles.info__title}>
            <h1>{val.title}</h1>
          </div>
          <div className={styles.info__description} >
           <p> {
              val.description
            }
          </p>
          <div className={styles.info__button} >
            <button onClick={goInfo}>Read More...</button>
          </div>
          </div>
      </div>
    )
  })

  return (
    <div className={styles.container} >
        <div className={styles.button__box} >
            <button onClick={handleBack} ><Image src="/assets/svg/arrow1.svg" width={50} height={80}/> </button>
        </div>
      <div className={styles.content}>
      {displayItems}
      </div>
      <div className={styles.button__box} >
            <button onClick={handleNext} ><Image src="/assets/svg/arrow.svg" width={50} height={80}/> </button>
        </div>
    </div>
  )
}
