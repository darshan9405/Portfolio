import classes from './Skills.module.css'
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
const Skills = () => {
  return (
    <div className={classes.skillContainer}>
      <h2 className={classes.header}>Skills</h2>
      <div className={classes.devContainer}>
        <div className={classes.languages}>
          <h4 style={{ margin: '2vh auto' }}>Languages</h4>
          <div className={classes.imgContainer}>
            <img className={classes.img} alt={'Not found!'} src={cpp} />
            <img className={classes.img} alt={'Not found!'} src={python} />
            <img className={classes.img} alt={'Not found!'} src={java} />
          </div>
          <br />
          <br/>
          <h4 style={{ margin: '2vh auto' }}>App Development</h4>
          <div className={classes.imgContainer}>
            <img className={classes.img} alt={'Not found!'} src={flutter} />
          </div>
          <br />
          <h4 style={{ margin: '2vh auto' }}>Database</h4>
          <div className={classes.imgContainer}>
            <img className={classes.img} alt={'Not found!'} src={mongo} />
            <img className={classes.img} alt={'Not found!'} src={mysql} />
          </div>
        </div>
        <div className={classes.languages}>
          <br />
          <h4 style={{ margin: '2vh auto' }}>Web Development</h4>
          {/* <p>Front End</p> */}
          <div className={classes.imgContainer}>
            <img
              className={classes.img}
              style={{ height: '150px' }}
              alt={'Not found!'}
              src={hcj}
            />
            {/* <img className={classes.img} src={css} />
            <img className={classes.img} src={js} /> */}
          </div>
          <br />
          <h4>Back End</h4>
          <div className={classes.imgContainer}>
            <img className={classes.img} alt={'Not found!'} src={node} />
          </div>
          <br />
          <h4>Framework</h4>
          <div className={classes.imgContainer}>
            <img className={classes.img} alt={'Not found!'} src={rt} />
            <img className={classes.img} alt={'Not found!'} src={bs} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Skills
