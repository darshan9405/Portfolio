import classes from './WorkExperience.module.css'
import int from '../../images/internship.png'
const WorkExperience = () => {
  return (
    <div className={classes.projects}>
      <h2 style={{ fontSize: '2.5rem' }}>Work Experience</h2>
      <br />
      <br />
      <div className={classes.projectGrid}>
        <div className={classes.projectCard}>
          <h3>Web development Intern</h3>
          <br />
          <div className={classes.imgDiv}>
            <a
              href={
                'https://drive.google.com/file/d/1Sva6ErgSqlxfpD4hxx3ZITYeO_33aF8A/view?usp=sharing'
              }
              target='__blank'
            >
              <img className={classes.img} src={int}></img>
            </a>
          </div>
          <p>
            <ul>
              <li>
                Worked for 2 months as web development intern at Act T Connect
                (P) Ltd.
              </li>
              <li>Used MERN stack for developing recruitment website.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  )
}
export default WorkExperience
