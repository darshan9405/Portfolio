import classes from './PointsGenerator.module.css'
import { useState, useEffect, Fragment } from 'react'
const PointGenerator = props => {
  const transformArray = props.array
  const [ChartData, setChartData] = useState([0.0,0.0])
  useEffect(() => {
    setTimeout(() => {
      setChartData(transformArray)
    }, 30 * props.index)
  }, [ChartData])
  return (
    <Fragment>
      {
        <tr>
          <td
            style={{
              '--start': ChartData[0],
              '--size': ChartData[1],
              '--color': 'white',
              fontWeight: 'bold'
            }}
          ></td>
        </tr>
      }
    </Fragment>
  )
}
export default PointGenerator
