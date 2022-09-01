import classes from './Skills.module.css'
import Carousel from 'react-bootstrap/Carousel'
import java from '../../images/java.png'
import python from '../../images/python.png'
import cpp from '../../images/cpp.png'
import rt from '../../images/react.png'
import node from '../../images/node.png'
import bs from '../../images/bootstrap.png'
import mongo from '../../images/mongo.png'
import mysql from '../../images/mysql.png'
import flutter from '../../images/flutter.png'
import hcj from '../../images/hcj.png'
import firebase from '../../images/firebase.png'
import next from '../../images/next.png'
const Skills = () => {
  return (
    <div className={classes.skillContainer}>
      <h2 className={classes.header}>Skills</h2>
      <Carousel variant='dark' interval={1000} className={classes.imgSlider} >
        <Carousel.Item className={classes.silderContainer}>
          <div className={classes.imgContainer}>
            <img className={classes.img} src={python} alt='First slide' />
            <img className={classes.img} src={cpp} alt='First slide' />
            <img className={classes.img} src={java} alt='First slide' />
          </div>
          <br />
          <br />
          <h5 className={classes.Caption}>Languages</h5>
        </Carousel.Item>
        <Carousel.Item className={classes.silderContainer}>
          <div className={classes.imgContainer}>
            <img className={classes.img} src={hcj} alt='First slide' />
          </div>
          <p className={classes.Caption}>Front End</p>
          <h5 className={classes.Caption}>Web Development</h5>
        </Carousel.Item>
        <Carousel.Item className={classes.silderContainer}>
          <div className={classes.imgContainer}>
            <img className={classes.img} src={node} alt='First slide' />
          </div>
          <p className={classes.Caption}>Back End</p>
          <h5 className={classes.Caption}>Web Development</h5>
        </Carousel.Item>
        <Carousel.Item className={classes.silderContainer}>
          <div className={classes.imgContainer} style={{flexDirection:'column'}}>
            <img className={classes.img} src={next} alt='First slide' />
            <br/>
          </div>
          <p className={classes.Caption}>Full Stack React Framework</p>
          <h5 className={classes.Caption}>Web Development</h5>
        </Carousel.Item>
        <Carousel.Item className={classes.silderContainer}>
          <div className={classes.imgContainer}>
            <img className={classes.img} src={rt} alt='First slide' />
            <img className={classes.img} src={bs} alt='First slide' />
          </div>
          <p className={classes.Caption}>Framework</p>
          <h5 className={classes.Caption}>Web Development</h5>
        </Carousel.Item>
        <Carousel.Item className={classes.silderContainer}>
          <div className={classes.imgContainer}>
            <img className={classes.img} src={flutter} alt='First slide' />
            <img className={classes.img} src={firebase} alt='First slide' />
          </div>
          <br />
          <br />
          <h5 className={classes.Caption}>App Development</h5>
        </Carousel.Item>
        <Carousel.Item className={classes.silderContainer}>
          <div className={classes.imgContainer}>
            <img className={classes.img} src={mysql} alt='First slide' />
            <img className={classes.img} src={mongo} alt='First slide' />
          </div>
          <br />
          <br />
          <h5 className={classes.Caption}>Database</h5>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
export default Skills
