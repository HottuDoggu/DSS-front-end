import Head from "next/head";
import React from "react";
import styles from "../styles/css/general/home.module.css";
import GeneralHeader from "../pages/components/general.header";
import InfoSlider from "./components/info.slider";
import Image from "next/image";
import { useRouter } from "next/router";
import { Link } from "react-scroll";

export default function Homepage() {
  const router = useRouter();

  const goLog = () => {
    router.push("/userlogin");
  };

  const goReg = () => {
    router.push("/register");
  };
  return (
    <div  className={styles.home__container}>
      <Head>
        <title>Assessment Form</title>
        <link rel="icon" href="/assets/logo.png" />
      </Head>

      <div id="home" className={styles.header}>
        <div className={styles.header__box}>
          <div className={styles.header__logo}>
            <Image
              src="/assets/bsulogo.png"
              width={70}
              height={70}
              alt="logo"
            />
            <h3>Bulacan State University</h3>
          </div>
          <span className={styles.flexspace} />
          <div className={styles.nav__bar}>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={styles.about__button}
              href="#about"
            >
              About Us{" "}
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={styles.contacts__button}
              href="#contact"
            >
              Contacts
            </Link>
            <button onClick={goLog} className={styles.login__button}>
              Login
            </button>
            <button onClick={goReg} className={styles.register__button}>
              Register
            </button>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <InfoSlider />
        <div id="about" className={styles.about__container}>
          <div className={styles.about__content}>
            <div className={styles.info__container}>
              <div className={styles.about1}>
                <h1>About Us</h1>
                <div className={styles.p}>
                  <p>
                    Specialization Track Identifier <br></br> was created with
                    one mission:<br></br> to help the students decide which{" "}
                    <br></br> track suits their preference
                  </p>
                </div>
              </div>
              <div className={styles.about__image}>
                <Image
                  src="/assets/aboutimg.png"
                  width={700}
                  height={600}
                  alt="logo"
                />
              </div>
            </div>
            <div className={styles.avatar__container}>
              <div className={styles.avatar1__overall}>
                <div className={styles.avatar}>
                  <Image
                    src="/assets/avatar1.png"
                    width={80}
                    height={80}
                    alt="avatar"
                  />
                  <p>Who we Are </p>
                </div>
                <div className={styles.avatar1__info}>
                  <p>
                    We are here to be your friend <br></br> that will help and
                    guide you <br></br>through your decision-<br></br>making
                    process{" "}
                  </p>
                </div>
              </div>
              <div className={styles.avatar1__overall}>
                <div className={styles.avatar}>
                  <Image
                    src="/assets/avatar2.png"
                    width={80}
                    height={80}
                    alt="avatar"
                  />
                  <p>What we do </p>
                </div>
                <div className={styles.avatar1__info}>
                  <p>
                    Through the given <br></br> assessment, we analyze the{" "}
                    <br></br>results and provide you the<br></br>best track that
                    fits your style{" "}
                  </p>
                </div>
              </div>
              <div className={styles.avatar1__overall}>
                <div className={styles.avatar}>
                  <Image
                    src="/assets/avatar3.png"
                    width={80}
                    height={80}
                    alt="avatar"
                  />
                  <p>Why we do it </p>
                </div>
                <div className={styles.avatar1__info}>
                  <p>
                    To provide the best and most<br></br> reliable result in
                    minutes and <br></br>to provide a best support<br></br>
                    system{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="contact" className={styles.contact__container}>
          <div className={styles.contact__content}>
            <div className={styles.contact__info__container}>
              <div className={styles.contact__image}>
                <Image
                  src="/assets/contactimg.png"
                  width={700}
                  height={600}
                  alt="logo"
                />
              </div>
              <div className={styles.contact__info__text}>
                <div className={styles.contact__info}>
                  <h1>Contact Us</h1>
                  <div className={styles.contacts}>
                    <p>
                      If you have questions about our website in <br></br>{" "}
                      general, feel free to contactus at :{" "}
                    </p>
                  </div>
                </div>
                <div className={styles.location__logo}>
                  <Image
                    src="/assets/svg/location.svg"
                    width={30}
                    height={30}
                    alt="logo"
                  />
                  <div className={styles.p__contact}>
                    <p>C.L. Hilario St, Bustos, Bulacan</p>
                  </div>
                </div>
                <div className={styles.location__logo}>
                  <Image
                    src="/assets/svg/call.svg"
                    width={30}
                    height={30}
                    alt="logo"
                  />
                  <div className={styles.p__contact}>
                    <p>+63 929 764 3552</p>
                  </div>
                </div>
                <div className={styles.location__logo}>
                  <Image
                    src="/assets/svg/mail.svg"
                    width={30}
                    height={30}
                    alt="logo"
                  />
                  <div className={styles.p__contact}>
                    <p>dssspecializationtrack@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer" className={styles.footer__container}>
          <div className={styles.footer__content}>
            <div className={styles.footer__container__info}>
              <div className={styles.footer__info}>
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
              <div className={styles.footer__info__text}>
                <h1>Bulacan State University - Bustos Campus</h1>
                <h1>College of Information Technology and Engineering</h1>
                <h1>Copyright © 2022 BulSU • All rights reserved</h1>
              </div>
              <div className={styles.footer__image}>
                <Image
                  src="/assets/fbicon.png"
                  width={60}
                  height={60}
                  alt="logo"
                />
                <Image
                  src="/assets/igicon.png"
                  width={60}
                  height={60}
                  alt="logo"
                />
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className={styles.about__button}
                  href="#home"
                >
                  <Image
                    src="/assets/svg/arrowup.svg"
                    width={40}
                    height={40}
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
