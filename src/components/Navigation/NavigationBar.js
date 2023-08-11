import classes from './NavigationBar.module.css'
import { Col, Row } from 'react-bootstrap'
import LetterOscillator from '../../Helpers/LettersFunctions/LetterOscillator'
import data from '../../Helpers/Graph/GraphData'
import PointGenerator from '../../Helpers/Graph/PointsGenerator'
import 'charts.css'
const NavigationBar = props => {
  const AcademicsArr = 'ACADEMICS'.split('')
  const ProjectsArr = 'PROJECTS'.split('')
  const gitArr = 'GITHUB'.split('')
  const resume = 'RESUME'.split('')
  return (
    <Col className={classes.mobileCol}>
      <Row className={classes.col}>
        <a
          href={'#Academics'}
          onClick={() => {
            props.setOpen(false)
          }}
          className={classes.arrangement}
        >
          {AcademicsArr.map((ele, index) => {
            return (
              <LetterOscillator
                key={index}
                className={classes.letterStyle}
                char={ele}
              />
            )
          })}
        </a>
      </Row>
      <Row className={classes.col}>
        <a
          href={'#projects'}
          onClick={() => {
            props.setOpen(false)
          }}
          className={classes.arrangement}
        >
          {ProjectsArr.map((ele, index) => {
            return <LetterOscillator key={index} char={ele} />
          })}
        </a>
      </Row>
      <Row className={classes.col}>
        <a
          href={'https://github.com/darshan9405'}
          className={classes.arrangement}
          target='__blank'
          onClick={() => {
            props.setOpen(false)
          }}
        >
          {gitArr.map((ele, index) => {
            return (
              <LetterOscillator
                key={index}
                className={classes.letterStyle}
                char={ele}
              />
            )
          })}
        </a>
      </Row>
      <Row className={classes.col}>
        <a
          href={'https://drive.google.com/file/d/1oU-9ZcKBALio5CSM0Q-AZMzRpHQ6YI8V/view?usp=sharing'}
          className={classes.arrangement}
          target='__blank'
          onClick={() => {
            props.setOpen(false)
          }}
        >
          {resume.map((ele, index) => {
            return (
              <LetterOscillator
                key={index}
                className={classes.letterStyle}
                char={ele}
              />
            )
          })}
        </a>
      </Row>
      <Row>
        <div className={classes.itemdiv1}>
          <table className='charts-css line' id='my-chart'>
            <tbody>
              {data.map((ele, index) => {
                return <PointGenerator key={index} array={ele} index={index} />
              })}
            </tbody>
          </table>
        </div>
      </Row>
    </Col>
  )
}
export default NavigationBar
