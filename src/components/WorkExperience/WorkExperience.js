import classes from "./WorkExperience.module.css";
import int from "../../images/internship.png";
import stock from "../../images/stock.png";
const WorkExperience = () => {
  return (
    <div className={classes.projects}>
      <h2 style={{ fontSize: "2.5rem" }}>Work Experience</h2>
      <br />
      <br />
      <div className={classes.projectGrid}>
        <div className={classes.projectCard}>
          <h3>Web development Intern</h3>
          <br />
          <div className={classes.imgDiv}>
            <a
              href={
                "https://drive.google.com/file/d/1Sva6ErgSqlxfpD4hxx3ZITYeO_33aF8A/view?usp=sharing"
              }
              target="__blank"
            >
              <img className={classes.img} alt={"Not found!"} src={int}></img>
            </a>
          </div>
          <ul>
            <li>
              Worked for 2 months as web development intern at Act T Connect (P)
              Ltd.
            </li>
            <li>Used MERN stack for developing recruitment website.</li>
          </ul>
        </div>
        <div className={classes.projectCard}>
          <h3>Credenz-Wallstreet</h3>
          <br />
          <div className={classes.imgDiv}>
            <img className={classes.img} alt={"Not found!"} src={stock}></img>
          </div>
          <ul>
            <li>Stock market event organized by PICT IEEE Student Branch.</li>
            <li>
              Developed Web‑App using ReactJS(front‑end) and Django(Back‑end).
            </li>
            <li>Around 200+ Students played this 3 day long event.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default WorkExperience;
