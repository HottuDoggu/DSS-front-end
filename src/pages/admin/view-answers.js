import {
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/css/general/userlayout.module.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { serverApi } from "../../utils/api";

export default function UserAnswer() {
  const router = useRouter();
  const uid = router.query.uid;

  const goLog = () => {
    router.push("/userlogin");
  };

  const goHome = () => {
    router.push("/admin");
  };

  const goProf = () => {
    router.push("/respondents");
  };

  const goRes = () => {
    router.push("/result");
  };

  const [userData, setUserData] = useState([]);
  const [general, setGeneral] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    if (!uid) {
      router.push("/");
    }

    axios.get(`${serverApi}users/profile/${uid}`).then((response) => {
      // console.log(response.data);
      setUserData(response.data);
    });
    axios.get(`${serverApi}reports/general/${uid}`).then((response) => {
      //console.log(response.data);
      setGeneral(response.data);
    });
    axios.get(`${serverApi}reports/questions`).then((response) => {
      //console.log(response.data);
      setQuestions(response.data);
    });
  };

  return (
    <div className={styles.header__container}>
      <Head>
        <title>Assessment Form</title>
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <div className={styles.header__box}>
        <div className={styles.header__logo}>
          <Image src="/assets/bsulogo.png" width={70} height={70} alt="logo" />
          <h3>Bulacan State University</h3>
        </div>
        <span className={styles.flexspace} />
        <div className={styles.nav__bar}>
          <button onClick={goHome} className={styles.login__button}>
            Home
          </button>
          <button onClick={goProf} className={styles.login__button}>
            Users
          </button>
          <button
            onClick={() => {
              router.push("/admin/manage-test");
            }}
            className={styles.login__button}
          >
            Test
          </button>
          <button onClick={goLog} className={styles.register__button}>
            Logout
          </button>
        </div>
      </div>
      <div className={styles.ans_content}>
        <div className={styles.ans_profile}>
          <div className={styles.back__button}>
            <button onClick={()=>{router.push("/respondents")}} >Back</button>
          </div>
          <div className={styles.user__icon}>
            <img src="/assets/usericon.png" alt="User Icon" />
          </div>
          <div className={styles.user__icon}>{userData?.name}</div>
          <div className={styles.user__icon}>{userData?.studentnumber}</div>
          <div className={styles.user__icon}>{userData?.email}</div>
        </div>
        <div className={styles.ans__info}>
          <div className={styles.grade}>
            <h2>GRADES</h2>
            <div className={styles.grade__box}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Grades</TableCell>
                    <TableCell>Subject Code</TableCell>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{general?.it102}</TableCell>
                    <TableCell>IT 102</TableCell>
                    <TableCell>Introduction to Computing</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{general?.it103}</TableCell>
                    <TableCell>IT 103</TableCell>
                    <TableCell>Computer Programming 1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{general?.it104}</TableCell>
                    <TableCell>IT 104</TableCell>
                    <TableCell>Hardware System and Servicing</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{general?.it105}</TableCell>
                    <TableCell>IT 105</TableCell>
                    <TableCell>Computer Programming 2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{general?.it106}</TableCell>
                    <TableCell>IT 106</TableCell>
                    <TableCell>Networking 1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{general?.it107}</TableCell>
                    <TableCell>IT 107</TableCell>
                    <TableCell>Discrete Structure for IT</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          <div className={styles.answers__container}>
            <h2>Student Answers</h2>

            <div>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Questions</TableCell>
                    <TableCell>Answers</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {questions.map((data) => {
                    return (
                      <TableRow key={data.id}>
                        <TableCell>{data.question}?</TableCell>
                        <TableCell>
                          <Answer qid={data.id} uid={uid} />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Answer = (props) => {
  const { qid, uid } = props;
  const [answers,setAnswers] = useState([]);
  const getAnswers = () => {
    axios.get(`${serverApi}reports/useranswers/${uid}/${qid}`).then((response) => {
      console.log(response.data);
      setAnswers(response.data);
    });
  };

  useEffect(()=>{
      getAnswers();
  },[])

  return(
    <div className={styles.answers__info} >
      <ul>

     
      {
        answers.map((data)=>{
          return(
            <li key={data.id} >
                {data?.description}
            </li>
          )
        })
      }
       </ul>
    </div>
  )
};
