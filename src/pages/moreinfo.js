import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography, Grid, TextField, Button } from "@mui/material";
import TabPanel from "../pages/components/TabPanel";
import { useState } from "react";
import styles from "../styles/css/general/home.module.css";
import GeneralHeader from "../pages/components/general.header";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function MoreInfo(props) {
  const { children, value, index, ...other } = props;

  const [selected, setSelected] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelected(newValue);
  };
  const router = useRouter();

  const goLog = () => {
    router.push("/userlogin")
  }

  const goReg = () => {
    router.push("/register")
  }
  return (
    <div className={styles.home__container}>
      <Head>
        <title>Assessment Form</title>
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <div className={styles.header}>
      <div className={styles.header__box}>
      <div className={styles.header__logo}>
        <Image src="/assets/bsulogo.png" width={70} height={70} alt="logo" />
        <h3>Bulacan State University</h3>
      </div>
      <span className={styles.flexspace} />
      <div className={styles.nav__bar}>
      <button onClick={goLog} className={styles.login__button} >Login</button>
      <button onClick={goReg} className={styles.register__button}>Register</button>
      </div>
      </div> 
      </div>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          height: 600,
          marginTop: "1  0px",
          color: "white"
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={selected}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            fontSize: "20px",
            fontFamily: "Poppins",
            color: "#fff",
          }}
        >
          <Typography sx={{color:"green"}} >

          <Tab label="Specilation Track is About"/>
          </Typography>
         
          <Tab label="Bachelor of Science in Information Technology Specialized in Web and Mobile Development" />
          <Tab label="Bachelor of Science in Information Technology Specialized in Business Analytics" />
          <Tab label="Bachelor of Science in Information Technology Specialized in Service Management" />
        </Tabs>

        <TabPanel value={selected} index={1} other={other}>
          <Grid
            style={{
              width: "160vh",
              height: "78vh",
              border: "none",
            }}
          >
            <Typography
              variant="h2"
              style={{
                margin: "3vh 0vh",
                textAlign: "center",
                fontSize: "30px",
                fontFamily: "Poppins",
                textTransform: "uppercase",
                fontWeight: "bold",
                color: "white"
              }}
            >
              Bachelor of Science in Information Technology Specialized in Web
              and Mobile Development
            </Typography>

            <Typography
              sx={{
                margin: "3vh 0vh",
                textAlign: "left",
                fontSize: "20px",
                fontFamily: "Poppins",
                marginLeft: "50px",
                marginTop: "50px",
                fontWeight: "Bolder",
                color: "white"
              }}
            >
              Overview
              <Typography
                sx={{
                  margin: "3vh 0vh",
                  textAlign: "justify",
                  fontSize: "18px",
                  fontFamily: "Poppins",
                  marginTop: "50px",
                  marginRight: "20px",
                  textIndent: "50px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "left",
                    alignItems: "center",
                    marginBottom: "20px",
                    marginRight: "20px",
                    color: "white"
                  }}
                >
                  <Image
                    src="/assets/coding.gif"
                    width={1800}
                    height={1600}
                    alt="coding"

                    sx={{marginRight: "20px"}}
                  />
                  The Web and Mobile Development specialization under the BSIT
                  course aims to equip students with the knowledge and skills
                  necessary in creating web applications and native mobile apps
                  for Android and iOS. The web is a very big place, and people
                  visit several websites every day, whether for business,
                  entertainment, or education. A web developer is needed to
                  develop websites and make them look great, work fast, and
                  perform well with a seamless user experience. To answer that
                  need, CITE aims to provide students with the skills necessary
                  to succeed in such a role. These skillsets include:
                </Box>
              </Typography>
            </Typography>

            <Typography
              sx={{
                margin: "3vh 0vh",
                textAlign: "justify",
                fontSize: "18px",
                fontFamily: "Poppins",
                marginTop: "50px",
                marginRight: "20px",
                color: "white"
              }}
            >
              ⦿ Website Design and Development<br></br>⦿ UI/UX design <br></br>⦿
              Computer Programming/Scripting <br></br>⦿ Technical Communication{" "}
              <br></br>⦿ Cybersecurity<br></br>⦿ Graphic Design <br></br>⦿
              Database Administration <br></br>⦿ Mobile Application Development
              <br></br>
              <Typography
                sx={{
                  margin: "3vh 0vh",
                  textAlign: "justify",
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  marginTop: "50px",
                  marginRight: "20px",
                  fontWeight: "Bolder",
                  color: "white"
                }}
              >
                Essential Learning Experience
              </Typography>
              <Typography
                sx={{
                  margin: "3vh 0vh",
                  textAlign: "justify",
                  fontSize: "18px",
                  fontFamily: "Poppins",
                  marginTop: "50px",
                  marginRight: "20px",
                  color: "white"
                }}
              >
                ⦿ Lectures <br></br>⦿ Hands-on Laboratory Activities <br></br>⦿
                Seminars and Technical Trainings <br></br>⦿ Cloudswyft Learning
                Platform <br></br>⦿ Live Demonstrations <br></br>⦿ OJT<br></br>
              </Typography>
              <Typography
                sx={{
                  margin: "3vh 0vh",
                  textAlign: "justify",
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  marginTop: "50px",
                  marginRight: "20px",
                  color: "white"
                }}
              >
                Career Opportunities for Graduates of BSIT Specialized in Web
                and Mobile Development
              </Typography>
              <Typography
                sx={{
                  margin: "3vh 0vh",
                  textAlign: "justify",
                  fontSize: "18px",
                  fontFamily: "Poppins",
                  marginTop: "50px",
                  marginRight: "20px",
                  color: "white"
                }}
              >
                ⦿ Web Developer<br></br>⦿ Front-End Developer<br></br>⦿ Back-End
                Developer<br></br>⦿ Full-stack Developer<br></br>⦿ UI Designer
                <br></br>⦿ UX Designer<br></br>⦿ Multimedia Artist<br></br>⦿
                Graphic Artist/Designer<br></br>
              </Typography>
            </Typography>

            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10vh",
                marginBottom: "5vh",
                color: "white"
              }}
            ></Grid>
            <div id="footer" className={styles.footer__container1}>
              <div className={styles.footer__content1}>
                <div className={styles.footer__container__info1}>
                  <div className={styles.footer__info1}>
                    <Image
                      src="/assets/bsulogo.png"
                      width={200}
                      height={200}
                      alt="logo"
                    />
                    <Image
                      src="/assets/bustoslogo.png"
                      width={200}
                      height={200}
                      alt="logo"
                    />
                    <Image
                      src="/assets/citelogo.png"
                      width={200}
                      height={200}
                      alt="logo"
                    />
                  </div>
                  <div className={styles.footer__info__text1}>
                    <h1>Bulacan State University - Bustos Campus</h1>
                    <h1>College of Information Technology and Engineering</h1>
                    <h1>Copyright © 2022 BulSU • All rights reserved</h1>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </TabPanel>

        <TabPanel value={selected} index={2} other={other}>
          <Grid
            style={{
              width: "160vh",
              height: "78vh",
              border: "none",
            }}
          >
            <Typography
              variant="h2"
              style={{
                margin: "3vh 0vh",
                textAlign: "center",
                fontSize: "30px",
                fontFamily: "Poppins",
                textTransform: "uppercase",
                fontWeight: "bold",
                color: "white"
              }}
            >
              Bachelor of Science in Information Technology Specialized in
              Business Analytics
            </Typography>
            <Typography
              sx={{
                margin: "3vh 0vh",
                textAlign: "left",
                fontSize: "20px",
                fontFamily: "Poppins",
                marginLeft: "50px",
                marginTop: "50px",
                fontWeight: "Bolder",
                color: "white"
              }}
            >
              Overview
              <Typography
                sx={{
                  margin: "3vh 0vh",
                  textAlign: "justify",
                  fontSize: "18px",
                  fontFamily: "Poppins",
                  marginTop: "50px",
                  marginRight: "20px",
                  textIndent: "50px",
                }}
              >
                 <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "left",
                    alignItems: "center",
                    marginBottom: "20px",
                    marginRight: "20px",
                    color: "white"
                  }}
                >
                  <Image
                    src="/assets/data.gif"
                    width={1800}
                    height={1600}
                    alt="coding"

                    sx={{marginRight: "20px"}}
                  />
                The Business Analytics specialization under the BSIT course aims
                to equip students with the knowledge and skills necessary to
                help guide businesses in improving processes, products,
                services, and software through data analysis. A business analyst
                needs to have certain skills to ride the line between IT and the
                business to help bridge the gap and improve efficiency. To
                answer that need, CITE aims to provide students with the skills
                necessary to succeed in such a role. These skillsets include:
                </Box>
              </Typography>
              <Typography
                sx={{
                  margin: "3vh 0vh",
                  textAlign: "justify",
                  fontSize: "18px",
                  fontFamily: "Poppins",
                  marginTop: "50px",
                  marginRight: "20px",
                }}
              >
                ⦿ Data Aggregation<br></br>⦿ Data Mining<br></br>⦿ Association
                and Sequence Identification <br></br>⦿ Text Mining<br></br>⦿
                Forecasting<br></br>⦿ Predictive Analytics<br></br>⦿
                Optimization<br></br>⦿ Data Visualization<br></br>
               
              </Typography>
              <Typography
                sx={{
                  margin: "3vh 0vh",
                  textAlign: "justify",
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  marginTop: "50px",
                  marginRight: "20px",
                  fontWeight: "Bolder",
                }}
              >
                Essential Learning Experience
              </Typography>
              <Typography
                sx={{
                  margin: "3vh 0vh",
                  textAlign: "justify",
                  fontSize: "18px",
                  fontFamily: "Poppins",
                  marginTop: "50px",
                  marginRight: "20px",
                }}
              >
                ⦿ Lectures <br></br>⦿ Hands-on Laboratory Activities <br></br>⦿
                Seminars and Technical Trainings <br></br>⦿ Cloudswyft Learning
                Platform <br></br>⦿ Live Demonstrations <br></br>⦿ OJT<br></br>
              </Typography>
              <Typography
                sx={{
                  margin: "3vh 0vh",
                  textAlign: "justify",
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  marginTop: "50px",
                  marginRight: "20px",
                }}
              >
                Career Opportunities for Graduates of BSIT Specialized in
                Business Analytics
              </Typography>
              <Typography
                sx={{
                  margin: "3vh 0vh",
                  textAlign: "justify",
                  fontSize: "18px",
                  fontFamily: "Poppins",
                  marginTop: "50px",
                  marginRight: "20px",
                }}
              >
                ⦿ Business management analyst <br></br>⦿ Business performance
                analyst<br></br>⦿ Business analyst<br></br>⦿ Application
                business analyst<br></br>⦿ Business intelligence analyst
                <br></br>⦿ ITSM business analyst<br></br>⦿ Technical business
                analyst<br></br>⦿ Agile business analyst<br></br>⦿ IT business
                analyst<br></br>⦿ Business solutions analyst<br></br>⦿ Systems
                business analyst<br></br>⦿ Senior IT business analyst<br></br>
              </Typography>
            </Typography>
            <div id="footer" className={styles.footer__container1}>
              <div className={styles.footer__content1}>
                <div className={styles.footer__container__info1}>
                  <div className={styles.footer__info1}>
                    <Image
                      src="/assets/bsulogo.png"
                      width={200}
                      height={200}
                      alt="logo"
                    />
                    <Image
                      src="/assets/bustoslogo.png"
                      width={200}
                      height={200}
                      alt="logo"
                    />
                    <Image
                      src="/assets/citelogo.png"
                      width={200}
                      height={200}
                      alt="logo"
                    />
                  </div>
                  <div className={styles.footer__info__text1}>
                    <h1>Bulacan State University - Bustos Campus</h1>
                    <h1>College of Information Technology and Engineering</h1>
                    <h1>Copyright © 2022 BulSU • All rights reserved</h1>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </TabPanel>

        <TabPanel value={selected} index={3} other={other}>
          <Grid
            style={{
              display: "flex",
              width: "160vh",
              height: "78vh",
              border: "none",
            }}
          >
            <Grid style={{ width: "inherit" }}>
              <Typography
                variant="h2"
                style={{
                  margin: "3vh 0vh",
                  textAlign: "center",
                  fontSize: "30px",
                  fontFamily: "Poppins",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: "white"
                }}
              >
                Bachelor of Science in Information Technology Specialized in
                Service Management
              </Typography>
              <Typography
                sx={{
                  margin: "3vh 0vh",
                  textAlign: "left",
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  marginLeft: "50px",
                  marginTop: "50px",
                  fontWeight: "Bolder",
                  color: "white"
                }}
              >
                Overview
                <Typography
                  sx={{
                    margin: "3vh 0vh",
                    textAlign: "justify",
                    fontSize: "18px",
                    fontFamily: "Poppins",
                    marginTop: "50px",
                    marginRight: "20px",
                    textIndent: "50px",
                  }}
                >
                    <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "left",
                    alignItems: "center",
                    marginBottom: "20px",
                    marginRight: "20px",
                    color: "white"
                  }}
                >
                  <Image
                    src="/assets/servicegif.gif"
                    width={1800}
                    height={1600}
                    alt="coding"

                    sx={{marginRight: "20px"}}
                  />
                  The Service Management specialization under the BSIT course
                  aims to equip students with the knowledge and skills necessary
                  to accomplish a variety of tasks that are required today in
                  the fast-changing world of Information Technology. Compared to
                  the other two specializations, WMD, and BA, who focuses more
                  on specific fields, SM students will have a more diverse
                  skillset both on the field of hardware and software. These
                  skillsets include:
                  </Box>
                </Typography>
                <Typography
                  sx={{
                    margin: "3vh 0vh",
                    textAlign: "justify",
                    fontSize: "18px",
                    fontFamily: "Poppins",
                    marginTop: "50px",
                    marginRight: "20px",
                  }}
                >
                  ⦿ Software Development <br></br>⦿ Networking <br></br>⦿ Web
                  Development <br></br>⦿ Database Management <br></br>⦿ In depth
                  knowledge of office application software, including data
                  handling and reporting <br></br>⦿ Technical Support,
                  configuring hardware and software <br></br>
                </Typography>
                <Typography
                  sx={{
                    margin: "3vh 0vh",
                    textAlign: "justify",
                    fontSize: "20px",
                    fontFamily: "Poppins",
                    marginTop: "50px",
                    marginRight: "20px",
                    fontWeight: "Bolder",
                  }}
                >
                  Essential Learning Experience
                </Typography>
                <Typography
                  sx={{
                    margin: "3vh 0vh",
                    textAlign: "justify",
                    fontSize: "18px",
                    fontFamily: "Poppins",
                    marginTop: "50px",
                    marginRight: "20px",
                  }}
                >
                  ⦿ Lectures <br></br>⦿ Hands-on Laboratory Activities <br></br>
                  ⦿ Seminars and Technical Trainings <br></br>⦿ Cloudswyft
                  Learning Platform <br></br>⦿ Live Demonstrations <br></br>⦿
                  OJT<br></br>
                </Typography>
                <Typography
                  sx={{
                    margin: "3vh 0vh",
                    textAlign: "justify",
                    fontSize: "20px",
                    fontFamily: "Poppins",
                    marginTop: "50px",
                    marginRight: "20px",
                  }}
                >
                  Career Opportunities for Graduates of BSIT Specialized in
                  Service Management
                </Typography>
                <Typography
                  sx={{
                    margin: "3vh 0vh",
                    textAlign: "justify",
                    fontSize: "18px",
                    fontFamily: "Poppins",
                    marginTop: "50px",
                    marginRight: "20px",
                  }}
                >
                  ⦿ Technical Services Manager <br></br>⦿ Software Engineer{" "}
                  <br></br>⦿ Systems Analyst<br></br>⦿ Business Analyst<br></br>
                  ⦿ Technical Support <br></br>⦿ Network Engineer <br></br>⦿
                  Technical Consultant<br></br>⦿ Technical Sales Engineer{" "}
                  <br></br>⦿ Project Manager <br></br>⦿ Web Developer <br></br>⦿
                  Software Tester <br></br>⦿ Software Developer <br></br>
                </Typography>
              </Typography>

              <div id="footer" className={styles.footer__container1}>
                <div className={styles.footer__content1}>
                  <div className={styles.footer__container__info1}>
                    <div className={styles.footer__info1}>
                      <Image
                        src="/assets/bsulogo.png"
                        width={200}
                        height={200}
                        alt="logo"
                      />
                      <Image
                        src="/assets/bustoslogo.png"
                        width={200}
                        height={200}
                        alt="logo"
                      />
                      <Image
                        src="/assets/citelogo.png"
                        width={200}
                        height={200}
                        alt="logo"
                      />
                    </div>
                    <div className={styles.footer__info__text1}>
                      <h1>Bulacan State University - Bustos Campus</h1>
                      <h1>College of Information Technology and Engineering</h1>
                      <h1>Copyright © 2022 BulSU • All rights reserved</h1>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={selected} index={0} other={other}>
          <Grid
            style={{
              width: "160vh",
              height: "78vh",
              border: "none",
            }}
          >
            <div id="track" className={styles.track__container}>
              <div className={styles.track__content}>
                <div className={styles.track__info__container}>
                  <div className={styles.track__image}>
                    <Image
                      src="/slider/3.jpg"
                      width={500}
                      height={400}
                      alt="logo"
                    />
                  </div>
                  <div className={styles.track__info__text}>
                    <div className={styles.track__info}>
                      <h1>How does our website works?</h1>
                      <div className={styles.track}>
                        <p>
                          Our solution is intended to work with the<br></br>{" "}
                          CITE departments BSIT Specialization Track<br></br>{" "}
                          Decision Support System. This website helps<br></br>{" "}
                          our beloved students choose the<br></br> appropriate
                          specialization track based on<br></br> their
                          abilities, interests, and knowledge. The<br></br>{" "}
                          website consists of various sets of<br></br> questions
                          pertaining to the particular<br></br> specialization
                          provided by the CITE<br></br> department, which will
                          assist students in<br></br>
                          decision-making and provide a specialized<br></br>{" "}
                          track based on the findings of their<br></br>{" "}
                          evaluations. This also aims to lower the<br></br>{" "}
                          number of students who are unhappy with<br></br>
                          their chosen specialization track.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="track" className={styles.track__container}>
              <div className={styles.track__content}>
                <div className={styles.track__info__container}>
                  <div className={styles.track__info__text}>
                    <div className={styles.track__info}>
                      <h1>Our Website is reliable,</h1>
                      <div className={styles.track}>
                        <p>
                          We provide a well calculated results<br></br> based on
                          your assessment,<br></br> Specialization Track
                          Identifier is best used <br></br>by second-year IT
                          students who will enroll<br></br> in their third year
                          of study. They can use<br></br> this to make an
                          informed decision about<br></br> the specialization
                          track they want to<br></br> pursue. This is ideal
                          because it gives<br></br>
                          students the opportunity to choose and<br></br>{" "}
                          develop their own future goals with the<br></br>{" "}
                          appropriate speciality in advance.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.track__image}>
                    <Image
                      src="/slider/1.jpg"
                      width={500}
                      height={400}
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div id="footer" className={styles.footer__container1}>
              <div className={styles.footer__content1}>
                <div className={styles.footer__container__info1}>
                  <div className={styles.footer__info1}>
                    <Image
                      src="/assets/bsulogo.png"
                      width={200}
                      height={200}
                      alt="logo"
                    />
                    <Image
                      src="/assets/bustoslogo.png"
                      width={200}
                      height={200}
                      alt="logo"
                    />
                    <Image
                      src="/assets/citelogo.png"
                      width={200}
                      height={200}
                      alt="logo"
                    />
                  </div>
                  <div className={styles.footer__info__text1}>
                    <h1>Bulacan State University - Bustos Campus</h1>
                    <h1>College of Information Technology and Engineering</h1>
                    <h1>Copyright © 2022 BulSU • All rights reserved</h1>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </TabPanel>
      </Box>
      
   </div>
  );
}
