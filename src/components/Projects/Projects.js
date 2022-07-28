import classes from './Projects.module.css'
import { Button } from 'react-bootstrap'
const Projects = () => {
  return (
    <div className={classes.projects}>
      <h2 style={{ fontSize: '2.5rem' }}>Projects</h2>
      <br />
      <br />
      <div className={classes.projectGrid}>
        <div className={classes.projectCard}>
          <h3>Smart Helmet</h3>
          <br />
          <p>
            Developed a smart helmet using Arduino uno r3 which helped the rider
            to alert if he has not worn the helmet and also if the rider is
            drunk.
          </p>
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
                This platform will help students to compare and select the best
                book as per their needs and reviews from other peers which
                eventually save time.
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
            href='https://desolate-island-31567.herokuapp.com/'
            target='__blank'
            className={classes.btn}
          >
            Checkout!
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Projects
