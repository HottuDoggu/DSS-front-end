import React, { useEffect, useRef, useState } from "react";
import styles from "../css/result.module.css";
import { useReactToPrint } from "react-to-print";
import Pieresults from "./pieresult";

export default function UserResultPrint(props) {
  const {results,userData} = props;
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content:()=>componentRef.current,
    documentTitle:'Result',
    // onAfterPrint:()=>alert('success')
  });

 

  return (
    <>
      <div
      
        style={{ width: "100%", height: "100%",display:"flex",alignItems:"center",justifyContent:"center" }}
      >
       <div className={styles.profile__box} >
          <div   ref={componentRef} className={styles.profile} >
            <div className={styles.profile__box1}>
                <div className={styles.profile__img} >
                    <img src="/assets/usericon.png" />
                </div>
                <h4>{userData?.name}</h4>
                <h4>{userData?.studentnumber}</h4>

            </div>
            <div className={styles.profile__box2}>
                <div className={styles.recommendation} >
                  <h2>RECOMMENDATION</h2>
                  {results?.recommendation}
                </div>
                <div className={styles.result__content} >
                        <div className={styles.stats} >
                          <div className={styles.stats__webdev} >
                            <h1>{Number(results?.webdevave).toFixed(0)}%</h1>
                            <div className={styles.text} >WEBDEV</div>
                          </div>
                          <div className={styles.stats__service} >
                            <h1>{Number(results?.serviceave).toFixed(0)}%</h1>
                            <div className={styles.text} >SERVICE</div>
                          </div>
                          <div className={styles.stats__business} >
                            <h1>{Number(results?.businessave).toFixed(0)}%</h1>
                            <div className={styles.text} >BUSINESS</div>
                          </div>
                        </div>
                      <div className={styles.pie} >
                        <Pieresults  wave={results?.webdevave} save={results?.serviceave} bave={results?.businessave} />
                      </div> 
                        
                </div>
            </div>
          </div>
       </div>
      </div> 
      <button onClick={handlePrint} className={styles.print__btn}>Print</button>
    </>
  );
}
