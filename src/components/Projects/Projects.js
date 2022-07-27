import classes from './Projects.module.css'
const Projects = () => {
  return (
    <div className={classes.projects}>
      <h3>Projects</h3>
      <div className={classes.projectGrid}>
        <div className={classes.projectCard}>
          <h3>Smart Helmet</h3>
          <p>
            Developed a smart helmet using Arduino uno r3 which helped the rider
            to alert if he has not worn the helmet and also if the rider is
            drunk.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Projects
