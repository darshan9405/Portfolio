import classes from './NavigationBar.module.css'
import { Col, Row } from 'react-bootstrap'
import LetterOscillator from '../../Helpers/LettersFunctions/LetterOscillator'
const NavigationBar = props => {
  const JourneyArr = 'JOURNEY'.split('')
  const ProjectsArr = 'PROJECTS'.split('')
  const gitArr = 'GITHUB'.split('')
  return (
    <Col className={classes.mobileCol}>
      <Row className={classes.col}>
        <a
          href={'#journey'}
          onClick={() => {
            props.setOpen(false)
          }}
          className={classes.arrangement}
        >
          {JourneyArr.map((ele, index) => {
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
    </Col>
  )
}
export default NavigationBar
