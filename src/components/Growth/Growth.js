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
          <p>
            Passionate to explore and gain the real experience out of things,
            <br />
            happy and excited to work with new minds and exchange thoughts...
          </p>
          <Button className={classes.btn}>Let's Connect !</Button>
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