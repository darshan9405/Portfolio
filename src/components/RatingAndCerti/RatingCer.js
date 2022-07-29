import classes from './RatingCer.module.css'
import int from '../../images/dsa.png'
import cf from '../../images/cc.png'
import cc from '../../images/cf.png'
const RatingCer = () => {
  return (
    <div className={classes.projects}>
      <h2 style={{ fontSize: '2.5rem' }}>Ratings and Certificates</h2>
      <br />
      <br />
      <div className={classes.projectGrid}>
        <div className={classes.projectCard}>
          <h3>Data Structures and Algorithm</h3>
          <br />
          <div className={classes.imgDiv}>
            <a
              href={
                'https://www.udemy.com/certificate/UC-c4dc17a4-0a54-433b-8f27-da5253139219/'
              }
              target='__blank'
            >
              <img className={classes.img} src={int}></img>
            </a>
          </div>
          <p>Mastering Data Structures & Algorithms using C and C++</p>
          <br />
          <div className={classes.ratingDiv}>
            <div className={classes.ratingContainer}>
              <div className={classes.imgDiv}>
                <a
                  href={'https://www.codechef.com/users/darshan_9405'}
                  target='__blank'
                >
                  <img className={classes.img} src={cc}></img>
                </a>
              </div>
              <p>
                <ul>
                  <li>Highest rating of 1852</li>
                  <li>Solved 200+ problems</li>
                </ul>
              </p>
            </div>
            <div className={classes.ratingContainer}>
              <div className={classes.imgDiv}>
                <a
                  href={'https://codeforces.com/profile/Darshan_9405'}
                  target='__blank'
                >
                  <img className={classes.img} src={cf}></img>
                </a>
              </div>
              <p>
                <ul>
                  <li>Highest Rating of 1091</li>
                  <li>Solved 90+ Problems</li>
                </ul>
              </p>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}
export default RatingCer
