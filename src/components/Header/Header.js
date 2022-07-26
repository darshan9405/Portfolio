import classes from './Header.module.css'
import { Col, Row } from 'react-bootstrap'
import { Fragment } from 'react'
import LetterOscillator from '../../Helpers/LettersFunctions/LetterOscillator'
import logo from '../../images/logo.png'
const Header = () => {
  const JourneyArr = 'JOURNEY'.split('')
  const AboutArr = 'ABOUT'.split('')
  const MeArr = 'ME'.split('')
  const ProjectsArr = 'PROJECTS'.split('')
  return (
    <Fragment>
      <Row className={classes['header-row']}>
        <Col xs={6}>
          <img className={classes.imgStyle} src={logo} alt={'Not found!'} />
        </Col>
        <Col className={classes.col}>
          <div className={classes.arrangement}>
            {JourneyArr.map(ele => {
              return (
                <LetterOscillator className={classes.letterStyle} char={ele} />
              )
            })}
          </div>
        </Col>
        <Col className={classes.col}>
          <div className={classes.arrangement}>
            {ProjectsArr.map(ele => {
              return <LetterOscillator char={ele} />
            })}
          </div>
        </Col>
        <Col className={classes.col}>
          <div className={classes.arrangement}>
            {AboutArr.map(ele => {
              return (
                <LetterOscillator className={classes.letterStyle} char={ele} />
              )
            })}
            &nbsp;
            {MeArr.map(ele => {
              return (
                <LetterOscillator className={classes.letterStyle} char={ele} />
              )
            })}
          </div>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Header
