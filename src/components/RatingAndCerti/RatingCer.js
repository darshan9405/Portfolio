import classes from "./RatingCer.module.css";
import int from "../../images/dsa.png";
import rect from "../../images/react.jpg";
import cf from "../../images/cc.png";
import cc from "../../images/cf.png";
import leet from "../../images/leetcode.png";
const RatingCer = () => {
  return (
    <div className={classes.projects}>
      <h2 style={{ fontSize: "2.5rem" }}>Ratings and Certificates</h2>
      <br />
      <br />
      <div className={classes.projectGrid}>
        <div className={classes.projectCard}>
          <h3>Data Structures and Algorithm</h3>
          <br />
          <div className={classes.imgDiv}>
            <a
              href={
                "https://www.udemy.com/certificate/UC-c4dc17a4-0a54-433b-8f27-da5253139219/"
              }
              target="__blank"
            >
              <img className={classes.img} alt={"Not found!"} src={int}></img>
            </a>
          </div>
          <p style={{ textAlign: "center" }}>
            Mastering Data Structures & Algorithms using C and C++
          </p>
          <br />
          <h3>React - The Complete Guide</h3>
          <br />
          <div className={classes.imgDiv}>
            <a
              href={
                "https://www.udemy.com/certificate/UC-b3611721-ce86-4074-a2a1-9ec1ba8c2f65/"
              }
              target="__blank"
            >
              <img className={classes.img} alt={"Not found!"} src={rect}></img>
            </a>
          </div>
          <br />
          <div className={classes.ratingDiv}>
            <div className={classes.ratingContainer}>
              <div className={classes.imgDiv}>
                <a
                  href={"https://www.codechef.com/users/darshan_9405"}
                  target="__blank"
                >
                  <img
                    className={classes.img}
                    alt={"Not found!"}
                    src={cc}
                  ></img>
                </a>
              </div>
              <ul>
                <li>Highest rating of 1980</li>
                <li>Solved 335+ problems</li>
              </ul>
            </div>
            <div className={classes.ratingContainer}>
              <div className={classes.imgDiv}>
                <a
                  href={"https://codeforces.com/profile/Darshan_9405"}
                  target="__blank"
                >
                  <img
                    className={classes.img}
                    alt={"Not found!"}
                    src={cf}
                  ></img>
                </a>
              </div>
              <ul>
                <li>Expert @Codeforces</li>
                <li>Solved 1100+ Problems</li>
              </ul>
            </div>
            <br />
            <div className={classes.ratingContainer}>
              <div className={classes.imgDiv}>
                <a href={"https://leetcode.com/darshan_9405/"} target="__blank">
                  <img
                    className={classes.img}
                    alt={"Not found!"}
                    src={leet}
                  ></img>
                </a>
              </div>
              <ul>
                <li>Guardian @Leetcode - 2233</li>
                <li>Solved 600+ Problems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};
export default RatingCer;
