import { Box, Typography } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../styles/css/general/userlayout.module.css";
import AdminBar from "../admin-components/adminbar";
import AdminPie from "../admin-components/adminpie";
import { serverApi } from "../utils/api";
//../../styles/css/general/home.module.css


const SampleData = [
  {
    id:0,
    name:"1",
    rate:10
  },
  {
    id:1,
    name:"2",
    rate:10
  },
  {
    id:2,
    name:"3",
    rate:10
  },
  {
    id:3,
    name:"4",
    rate:10
  },
  {
    id:4,
    name:"5",
    rate:10
  },

  
];

export default function Dashboard() {


  const router = useRouter();
  const [isDone,setIsDone] = useState(false)
  const goLog = () => {
    router.push("/userlogin");
  };

  const goReg = () => {
    router.push("/register");
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

  const [stats,setStats] = useState([]);
  const [dataStats,setDataStats] = useState({
    labels: ['WEBDEV', 'SERVICE', 'BUSINESS',],
    datasets: [
      {
        label: '# of Votes',
        data: [0, 0, 0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
  
  
        ],
        borderWidth: 1,
      },
    ],
  });

  const [rateData,setRateData] = useState({
    labels:["1","2","3","4","5"],
    datasets: [{
      label: "Rate",
      data: SampleData.map((data)=>data.rate),
      backgroundColor:["#00D7FF","#F8F9D7"],
      borderColor:"black",
      borderWidth:2
    }]
  });
  useEffect((data)=>{

    const aid = sessionStorage.getItem("__AID");
    if(!aid){
      router.push('/login');
    }
    
   try{
     axios.get(`${serverApi}reports/stats/count`).then((response)=>{
      setStats(response.data);
      console.log(response.data)
      let temp = [];
      temp.push({name:"1",rateCount:response.data.rate1})
      temp.push({name:"2",rateCount:response.data.rate2})
      temp.push({name:"3",rateCount:response.data.rate3})
      temp.push({name:"4",rateCount:response.data.rate4})
      temp.push({name:"5",rateCount:response.data.rate5})
      
      setDataStats(temp)
      
    });
   }catch(err){

   }
setIsDone(true)
   
  },[]);

  const TryAdmin = () =>{
    try {
      return(
        
          <AdminBar chartData={rateData}/>
         
      )
    } catch (error) {
      console.log(error)
    }
  }

  

  return isDone? (
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
          height: "60vh",
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            width: "760px",
            height: "160px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <button className={styles.btn1}>
            <Image
              src="/assets/svg/user.svg"
              width={50}
              height={50}
              alt="user icon"
            />
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Poppins",
                marginTop: "20px",
                color: "black",
              }}
            >
              STUDENTS
            </Typography>
           <Box>
           <Typography
              variant="h5"
              sx={{
                fontFamily: "Poppins",
                marginTop: "40px",
                fontSize:"50px",
                width:"100%",
                color: "black",
              }}
            >
              {stats.students? stats.students : '0' }
            </Typography>
           </Box>
          </button>
          <button className={styles.btn2}>
            <Image
              src="/assets/svg/smiley.svg"
              width={50}
              height={50}
              alt="menu icon"
            />
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Poppins",
                marginTop: "20px",
                color: "black",
              }}
            >
              MATCH
            </Typography>
            <Box>
           <Typography
              variant="h5"
              sx={{
                fontFamily: "Poppins",
                marginTop: "40px",
                fontSize:"50px",
                width:"100%",
                color: "black",
              }}
            >
              {stats.match? stats.match : '0'}
            </Typography>
           </Box>
          </button>
          <button className={styles.btn4}>
            <Image
              src="/assets/svg/sad.svg"
              width={50}
              height={50}
              alt="menu icon"
            />
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Poppins",
                marginTop: "20px",
                color: "black",
              }}
            >
              UNMATCH
            </Typography>
            <Box>
           <Typography
              variant="h5"
              sx={{
                fontFamily: "Poppins",
                marginTop: "40px",
                fontSize:"50px",
                width:"100%",
                color: "black",
              }}
            >
              {stats.unmatch? stats.unmatch: '0'}
            </Typography>
           </Box>
          </button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "760px",
          height: "100px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <button className={styles.btn3}>
          {/* <ErrorBoundary> */}
         {
            stats?  <AdminPie dataStats={stats} /> : 'LOADING'
          }
         {/* </ErrorBoundary>  */}
         
        </button>
        <button className={styles.btn3}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Poppins",
              marginTop: "20px",
              color: "black",
              fontSize: "40px",
              marginBottom: "10px"
            }}
          >
            RATINGS
          </Typography>
          <Box sx={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center", marginBottom: "20px"}} >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Poppins",
              marginTop: "20px",
              fontSize:"40px",
              color: "black"
            }}
          >
             {stats.rate? Number(stats.rate).toFixed(2) : 0}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Poppins",
              marginTop: "20px",
              color: "black",
              marginLeft: "20px",
              fontSize:"20px"
            }}
          >
            ⭐
          </Typography>
          
          </Box>
         {/* <AdminBar/> */}

         {/* <ErrorBoundary>
        
         </ErrorBoundary> */}
         {/* {
          rateData?  : null
         } */}
         {
          isDone?  <AdminBar dataStats={dataStats}  rate1={stats?.rate1} rate2={stats?.rate2} rate3={stats?.rate3} rate4={stats?.rate4} rate5={stats?.rate5} /> : null
         }
        </button>
      </Box>
    </div>
  ):null;
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }
  
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }  
}
