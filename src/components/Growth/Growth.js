import classes from './Growth.module.css'
import data from '../../Helpers/Graph/GraphData'
import PointGenerator from '../../Helpers/Graph/PointsGenerator'
import avatar from '../../images/avator.jpg'
import 'charts.css'
const Growth = () => {
  return (
    <div className={classes.growthCard}>
      <div className={classes.lefttriangle}>
        <div className={classes.imgContainer}>
          <div className={classes.avatar}>
            <a>
              <img
                src={avatar}
                alt="My Image"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.itemdiv1}>
        <table className='charts-css line' id='my-chart'>
          <tbody>
            {data.map((ele, index) => {
              return <PointGenerator array={ele} index={index} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Growth
