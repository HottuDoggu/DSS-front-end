import {
  Paper,
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
import styles from "../styles/css/general/userlayout.module.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { serverApi } from "../utils/api";

export default function Respondents() {
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

  const goRes = () => {
    router.push("/result");
  };
const [users,setUsers] = useState([]);

useEffect(()=>{
  const aid = sessionStorage.getItem("__AID");
  if(!aid){
    router.push('/login');
  }
  axios.get(`${serverApi}users/fetch`).then((response)=>{
  setUsers(response.data)
  })
},[])

 const viewInfo = (id) => {
  router.push({
    pathname:"/admin/view-answers",
    query:{uid:id}
  },"/admin/view-answers")
 }

//  const Pagination = ({postsPerPage, totalPosts, paginate}) => {
//   console.log(totalPosts)

//   const PageNumbers =[]

//   const int = Math.ceil(totalPosts / postPerPage)
//   if (int ===1 ) return null
//   for (let i = 1; i<=int; i++)
//   PageNumbers.push(i)
//  }

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
          <button onClick={()=>{router.push('/admin/manage-test')}} className={styles.login__button}>
           Test
          </button>
          <button onClick={goLog} className={styles.register__button}>
            Logout
          </button>
        </div>
      </div>
      <Box
        sx={{
          width: "80vw",
          height: "80vh",
          marginTop: "100px",
        }}
      >
        <Paper elevation={4}>
          <Typography
            sx={{
              fontSize: "40px",
              fontFamily: "Poppins",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Respondents
          </Typography>
          <Table sx={{ maxWidth: 1250 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Student Number</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Test Result</TableCell>
            
              </TableRow>
            </TableHead>

            <TableBody>
            {
              users.map((value)=>{
                return(
                  <TableRow key={value.id} >
                <TableCell align="center">{value.studentnumber}</TableCell>
                <TableCell align="center">{value.name}</TableCell>
                <TableCell align="center"> {value.email} </TableCell>
                <TableCell align="center"> {value.test? <button onClick={()=>{viewInfo(value.id)}} >View</button> : 'No Data Yet'} </TableCell>
              </TableRow>
                )
              })
            }
            </TableBody>
          
         
          </Table>
         
        </Paper>
        {/* <ul className="pagination">
                {Pagination.map(number=> (
                    <li key={number} className="page-item">
                        <a onClick={ ()=> paginate(number)} href="!#" className="page-link">
                            {number} 
                        </a>
                    </li>
                ))}
            </ul> */}
      </Box>
    </div>
  );
}
