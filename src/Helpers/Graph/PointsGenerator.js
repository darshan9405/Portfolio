import classes from './PointsGenerator.module.css'
import { useState, useEffect, Fragment } from 'react'
const PointGenerator = props => {
  const transformArray = props.array
  const [ChartData, setChartData] = useState([-1.0, -1.0])
  const [blink, setBlink] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      if (props.index % 19 === 0) setBlink(true)
      setChartData(transformArray)
    }, 30 * props.index)
  }, [ChartData, transformArray, props.index])
  return (
    <Fragment>
      {
        <tr>
          <td
            style={{
              '--start': ChartData[0],
              '--size': ChartData[1],
              '--color': 'black'
            }}
          >
            {blink && <span className={classes.blink}>•</span>}
          </td>
        </tr>
      }
    </Fragment>
  )
}
export default PointGenerator
