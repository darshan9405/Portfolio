import classes from "./Projects.module.css";
import { Button } from "react-bootstrap";
import sh from "../../images/sh.png";
import elite from "../../images/eilte.png";
import namma from "../../images/namma.jpg";
import algo from "../../images/algo.jpeg";
import phone from "../../images/phone.png";
const Projects = () => {
  return (
    <div className={classes.projects} id={"projects"}>
      <h2 style={{ fontSize: "2.5rem" }}>Featured</h2>
      <br />
      <div className={classes.projectGrid}>
        <div className={classes.projectCard}>
          <h3 style={{ textAlign: "center" }}>
            Ranked 2nd in Quant Quest organized by Rendezvous 2023 (IIT Delhi)
          </h3>
          <div className={classes.imgContainer}>
            <img
              className={classes.img}
              style={{ width: "350px", height: "250px" }}
              alt={"Not found!"}
              src={algo}
            />
          </div>
          <Button
            href="https://www.campustimespune.com/quantquest-iitd-2023/"
            target="__blank"
            className={classes.btn}
          >
            Checkout!
          </Button>
        </div>
      </div>
      <br />
      {/* <h2 style={{ fontSize: "2.5rem" }}>Blogs</h2>
      <br />
      <div className={classes.projectGrid}>
        <div className={classes.projectCard}>
          <div className={classes.imgContainer}>
            <img
              className={classes.img}
              style={{ width: "450px", height: "250px" }}
              alt={"Not found!"}
              src={phone}
            />
          </div>
          <h3 style={{ textAlign: "center" }}>
            PhonePe Interview Experience — Software Engineer (Aug 2023)
          </h3>
          <Button
            href="https://medium.com/@darshanb9405/phonepe-interview-experience-software-engineer-aug-2023-25a23f02dfcc/"
            target="__blank"
            className={classes.btn}
          >
            Checkout!
          </Button>
        </div>
      </div>
      <br /> */}
      <h2 style={{ fontSize: "2.5rem" }}>Projects</h2>
      <br />
      <br />
      <div className={classes.projectGrid}>
        <div className={classes.projectCard}>
          <h3>ELITƎ</h3>
          <br />
          <div className={classes.imgContainer}>
            <img
              className={classes.img}
              style={{ width: "fit-content", height: "300px" }}
              alt={"Not found!"}
              src={elite}
            />
          </div>
          <div>
            <ul>
              <li>Designed an interactive and engaging puzzle website.</li>
              <li>
                Implemented using Django, HTML, CSS, JavaScript, and Bootstrap
                with a timer and leaderboard.
              </li>
              <li>Used SQL database for user data.</li>
            </ul>
            <br />
          </div>
          <Button
            href="https://darshan9405.pythonanywhere.com/"
            target="__blank"
            className={classes.btn}
          >
            Checkout!
          </Button>
        </div>
        <div className={classes.projectCard}>
          <h3>APP-LESS RIDE BOOKING</h3>
          <br />
          <div className={classes.imgContainer}>
            <img
              className={classes.img}
              style={{ width: "fit-content", height: "300px" }}
              alt={"Not found!"}
              src={namma}
            />
          </div>
          <div>
            <ul>
              <li>
                Developed a Telegram bot that offers a hassle‑free booking
                experience to customers.
              </li>
              <li>Developed using Python Telegram Bot library.</li>
              <li>Received Honorary mentions from Namma Yatri.</li>
            </ul>
            <br />
          </div>
          <Button
            href="https://t.me/cyborgs_namma_yatri_bot"
            target="__blank"
            className={classes.btn}
          >
            Checkout!
          </Button>
        </div>
        <div className={classes.projectCard}>
          <h3>Mark My Views</h3>
          <br />
          <div>
            <ul>
              <li>
                No dedicated website which collectively contains Engineering
                books of renowned authors and publications.
              </li>
              <li>
                Students need to compare and choose the best book which fulfills
                their need by manually visiting website of renowned publications
                one-by-one which eventually is time consuming.
              </li>
              <li>
                This platform helps students to compare and select the best book
                as per their needs and reviews from other peers which eventually
                save time.
              </li>
              <li>
                Students can post reviews for books which would help simplifying
                the process of choosing between many books.
              </li>
              <li>
                Students can segregate books as per the subject or course that
                they have enrolled in the category section.
              </li>
            </ul>
            <br />
          </div>
          <Button
            href="https://markmyviews.onrender.com/"
            target="__blank"
            className={classes.btn}
          >
            Checkout!
          </Button>
        </div>
        <div className={classes.projectCard}>
          <h3>Smart Helmet</h3>
          <br />
          <div className={classes.imgContainer}>
            <img className={classes.img} alt={"Not found!"} src={sh} />
          </div>
          <ul>
            <li>Developed a smart helmet using Arduino uno r3.</li>
            <li>
              Motive was to restrict the rider from driving without wearing a
              Helmet or without him being in conscious condition.
            </li>
            <li>
              Used MQ3 Alcohol Sensor to detect for the consciousness of the
              rider.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Projects;
