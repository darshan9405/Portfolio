import classes from './PointsGenerator.module.css'
import { useState, useEffect, Fragment } from 'react'
const PointGenerator = props => {
  const transformArray = props.array
  const [ChartData, setChartData] = useState([-1.0, -1.0])
  useEffect(() => {
    setTimeout(() => {
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
          </td>
        </tr>
      }
    </Fragment>
  )
}
export default PointGenerator
