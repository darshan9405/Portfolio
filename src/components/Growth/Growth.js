import classes from './Growth.module.css'
import data from '../../Helpers/Graph/GraphData'
import PointGenerator from '../../Helpers/Graph/PointsGenerator'
import avatar from '../../images/avator.jpg'
import Button from 'react-bootstrap/Button'
import 'charts.css'
const Growth = () => {
  return (
    <div className={classes.growthCard}>
      <div className={classes.lefttriangle}>
        <div className={classes.imgContainer}>
          <div className={classes.avatar}>
            <img src={avatar} alt='Not found!' />
          </div>
        </div>
        <div className={classes.resumeData}>
          <h3>Darshan Bhandari</h3>
          <ul>
            <li>
              Highly passionate to explore and gain the real experience out of
              things.
            </li>
            {/* <br /> */}
            <li>
              Growth mindset which constantly motivates me to learn and try out
              things.
            </li>
            {/* <br /> */}
            <li>
              Excited about working with new minds and experience the
              unexperienced...
            </li>
          </ul>
          <Button
            className={classes.btn}
            href={'https://www.linkedin.com/in/bhandari-darshan'}
            target='__blank'
          >
            Let's Connect !
          </Button>
        </div>
      </div>
      <div className={classes.itemdiv1}>
        <table className='charts-css line' id='my-chart'>
          <tbody>
            {data.map((ele, index) => {
              return <PointGenerator key={index} array={ele} index={index} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Growth
