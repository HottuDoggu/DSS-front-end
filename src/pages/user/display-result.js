import axios from 'axios'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import UserLayout from '../../user-components/userLayout';
import { serverApi } from '../../utils/api';
import UserResultPrint from './components/user-result'
import styles from './css/result.module.css';
export default function DisplayUserResults() {
  const router = useRouter();
  const [results,setResults] = useState();
  const [userData,setUserData] = useState();
  useEffect(()=>{
    const uid = sessionStorage.getItem("__UID");

    if(!uid){
      router.push("/userlogin");
      return;
    }
    axios.get(`${serverApi}results/fetch/${uid}`).then((response)=>{
      console.log(response.data);
      setResults(response.data);
    });
    axios.get(`${serverApi}users/profile/${uid}`).then((response)=>{
      console.log(response.data);
      setUserData(response.data);
    });
  },[]);

  return (
    <div className={styles.container} >
      <div className={styles.header}>
        <UserLayout/>
      </div>
      <div className={styles.content} >
      <UserResultPrint results={results} userData={userData}  /> 
      </div>
    </div>
  )
}
