import { Fragment } from 'react';
import classes from './screenToggler.module.css';
import up from '../../images/up.png';
const ScreenToggler =(props)=>{
    const toggleScreen = ()=>{
        props.toggleHandler();
    }
    return <div className={classes.togglerDiv}>
        <img onClick={toggleScreen} className = {classes.upBtn} src={up} alt="Render up Button"/>
    </div>
}
export default ScreenToggler;