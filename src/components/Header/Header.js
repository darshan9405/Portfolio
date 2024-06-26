import classes from './Header.module.css'
import { Col, Row } from 'react-bootstrap'
import { Fragment } from 'react'
import LetterOscillator from '../../Helpers/LettersFunctions/LetterOscillator'
import logo from '../../images/sign.png'
import Hamburger from 'hamburger-react'
const Header = props => {
  const AcademicsArr = 'ACADEMICS'.split('')
  const ProjectsArr = 'PROJECTS'.split('')
  const gitArr = 'GITHUB'.split('')
  const resume = 'RESUME'.split('')
  return (
    <Fragment>
      <Row className={classes['header-row']}>
        <Col xs={6}>
          <img className={classes.imgStyle} src={logo} alt={'Not found!'} />
        </Col>
        <Col className={classes.col}>
          <a href={'#Academics'} className={classes.arrangement}>
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
        </Col>
        <Col className={classes.col}>
          <a href={'#projects'} className={classes.arrangement}>
            {ProjectsArr.map((ele, index) => {
              return <LetterOscillator key={index} char={ele} />
            })}
          </a>
        </Col>
        <Col className={classes.col}>
          <a
            href={'https://github.com/darshan9405'}
            className={classes.arrangement}
            target='__blank'
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
        </Col>
        <Col className={classes.col}>
          <a
            href={'https://drive.google.com/file/d/1tN4X7d7xanssnzH9PrYXh0W6LzdnMuh0/view?usp=sharing'}
            className={classes.arrangement}
            target='__blank'
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
        </Col>
      </Row>
      <Row className={classes.mobileView}>
        <Col xs={9}>
          <img
            className={classes.mobileViewImg}
            src={logo}
            alt={'Not found!'}
          />
        </Col>
        <Col
          style={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center'
          }}
        >
          <Hamburger toggled={props.isOpen} toggle={props.setOpen} />
        </Col>
      </Row>
    </Fragment>
  )
}
export default Header
